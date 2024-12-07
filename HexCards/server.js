const WebSocket = require('ws');
let perguntaAtual = null; // Guarda a pergunta atual

// Criando o servidor WebSocket
const wss = new WebSocket.Server({ port: 8080 });

let players = []; // Lista de jogadores conectados
let perguntas = require('./perguntas.js'); // Importa perguntas
let respostas = require('./respostas.js'); // Importa respostas

// Copia inicial das respostas disponíveis
let respostasDisponiveis = [...respostas];

function resetGameState() {
    players = [];
    roomOwner = null;
    gameStarted = false;
    perguntas = require('./perguntas.js'); // Recarrega as perguntas
    respostas = require('./respostas.js'); // Recarrega as respostas
    respostasDisponiveis = [...respostas]; // Reseta as respostas disponíveis
    respostasEnviadas = [];
    perguntaAtual = null;

    console.log('Estado do jogo reiniciado.');
}


// Função para embaralhar um array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para selecionar uma pergunta aleatória
function escolherPergunta() {
    //! se acabarem as perguntas
    //TODO REEINICIA AS PAERGUNTAS
    if (perguntas.length === 0) {
        perguntas = require('./perguntas.js'); // Recarrega as perguntas originais
        console.log('Perguntas reembaralhadas.');
    }
    //TODO FIM DE JOGO
    // if (perguntas.length === 0) {
    //     wss.clients.forEach(client => {
    //         if (client.readyState === WebSocket.OPEN) {
    //             client.send(JSON.stringify({
    //                 type: 'gameOver',
    //                 message: 'O jogo terminou! Não há mais perguntas disponíveis.'
    //             }));
    //         }
    //     });
    //     return; // Finaliza o processamento
    // }

    const indexAleatorio = Math.floor(Math.random() * perguntas.length);
    const perguntaSelecionada = perguntas[indexAleatorio];
    perguntas.splice(indexAleatorio, 1); // Remove a pergunta escolhida para evitar repetição
    return perguntaSelecionada;
}

// Função para distribuir cartas únicas para um jogador
function distribuirCartas(quantidade) {
    if (respostasDisponiveis.length < quantidade) {
        throw new Error("Não há respostas suficientes para distribuir.");
    }

    const cartas = [];
    for (let i = 0; i < quantidade; i++) {
        const indexAleatorio = Math.floor(Math.random() * respostasDisponiveis.length);
        cartas.push(respostasDisponiveis[indexAleatorio]);
        respostasDisponiveis.splice(indexAleatorio, 1); // Remove a carta usada
    }
    return cartas;
}

function iniciarNovaRodada() {
    // Escolhe uma nova pergunta
    perguntaAtual = escolherPergunta();
    console.log(`Nova pergunta escolhida: ${perguntaAtual.pergunta}`);

    // Distribui uma nova carta para cada jogador
    players.forEach(player => {
        const novaCarta = distribuirCartas(1)[0];
        player.hand.push(novaCarta);
    });

    // Limpa o estado de respostas e votos
    respostasEnviadas = [];

    // Notifica todos os jogadores sobre a nova rodada
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            endRound()
            const jogador = players.find(p => p.id === client);

            client.send(JSON.stringify({
                type: 'newRound',
                question: perguntaAtual.pergunta,
                newCard: jogador.hand[jogador.hand.length - 1].resposta // Envia a nova carta
            }));
        }
    });
}

function endRound() {
    // Lógica para finalizar a rodada
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
                type: 'roundEnded',
                message: 'A rodada terminou! Prepare-se para a próxima.'
            }));
        }
    });

    // Reinicia variáveis de rodada
    respostasEnviadas = [];
    players.forEach(player => player.hasSubmittedAnswer = false);
}


let roomOwner = null; // Variável para guardar o dono da sala
let gameStarted = false; // Status da partida: começou ou não
let respostasEnviadas = []; // Respostas enviadas nesta rodada
let votos = []; // Para armazenar os votos de cada jogador na rodada

// Evento ao conectar um jogador
wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data);

        if (message.type === 'sendAnswer') {
            // Verifica se o jogador já enviou resposta nesta rodada
            if (respostasEnviadas.some(r => r.player === message.name)) {
                // ws.send(JSON.stringify({
                //     type: 'retornoEnvioResposta',
                //     message: 'Você já enviou uma resposta nesta rodada.'
                // }));
                return;
            }else{
                // ws.send(JSON.stringify({
                //     type: 'retornoEnvioResposta',
                //     message: ''
                // }));
            }

            // Armazena a resposta enviada
            respostasEnviadas.push({ 
                player: message.name, 
                resposta: message.answer, 
                voted: false, // Controle para votação futura 
                votes: 0 // Contador de votos
            });

            console.log(`Resposta enviada por ${message.name}: ${message.answer}`);

            // Notifica todos os jogadores sobre as respostas enviadas
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: 'updateAnswers',
                        respostas: respostasEnviadas.map(r => r.resposta) // Apenas o texto da resposta
                    }));
                }
            });

            // Verifica se todos os jogadores enviaram resposta
            if (respostasEnviadas.length === players.length) {
                console.log('Todos os jogadores enviaram suas respostas. Preparar para votação.');
                wss.clients.forEach(client => {
                    if (client.readyState === WebSocket.OPEN) {
                        const player = players.find(p => p.id === client);
                        const opcoesVoto = respostasEnviadas.filter(r => r.player !== player.name);
            
                        client.send(JSON.stringify({
                            type: 'readyToVote',
                            message: 'Todos os jogadores enviaram suas respostas. Vote na melhor!',
                            options: opcoesVoto.map(r => r.resposta) // Passa todas as respostas (exceto a do próprio jogador)
                        }));

                        // Notifica que a votação começou
                        // client.send(JSON.stringify({
                        //     type: 'votingStarted',
                        //     message: 'A votação começou! Escolha a melhor resposta.'
                        // }));

                        client.send(JSON.stringify({
                            type: 'voteOptions',
                            options: opcoesVoto.map(r => r.resposta)
                        }));
                    }
                });
            }
        }
        
        if (message.type === 'castVote') {

            const playerVotando = players.find(p => p.name === message.name);
            // Verifica se o jogador já votou
            if (votos.some(voto => voto.player === message.name)) {
                // Caso o jogador já tenha votado, envia uma mensagem de erro
                wss.clients.forEach(client => {
                    if (client.readyState === WebSocket.OPEN) {
                        // client.send(JSON.stringify({
                        //     type: 'error', //não pode retornar para o cliente o error
                        //     message: `${message.name}, você já votou nesta rodada.` 
                        // }));
                    }
                });
                return;
            }
            
            // Registra o voto do jogador
            votos.push({ player: message.name, voto: message.vote });

            console.log(`${message.name} votou na resposta: ${message.vote}`);

            // Envia os votos atualizados para todos os jogadores
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: 'updateVotes',
                        votos: votos
                    }));
                }
            });

            // Verifica se todos os jogadores já votaram
            if (votos.length === players.length) {
                // Finaliza a rodada quando todos votarem
                console.log('Todos os jogadores votaram. Finalizando a rodada.');
                // Aqui você pode adicionar lógica para calcular os pontos, por exemplo.
                // Resetar votos para a próxima rodada
                votos = [];
            }

            // Encontre a resposta que foi votada
            const respostaVotada = respostasEnviadas.find(r => r.resposta === message.vote);
            // if (!respostaVotada) {
            //     ws.send(JSON.stringify({ type: 'error', message: 'Resposta inválida!' }));
            //     return;
            // }
        
            // // Impedir que o jogador vote na própria carta
            // if (respostaVotada.player === message.name) {
            //     ws.send(JSON.stringify({ type: 'error', message: 'Você não pode votar na sua própria resposta!' }));
            //     return;
            // }
        
            // // Incrementa os votos da resposta
             respostaVotada.votes += 1;
             console.log(`${message.name} votou na resposta: ${respostaVotada.resposta}`);
        
            // Verifica se todos os jogadores já votaram
             const totalVotes = players.length; //* Todos devem votar
             const votosRecebidos = respostasEnviadas.reduce((acc, r) => acc + r.votes, 0);
             console.log("Total Votos: "+totalVotes);
             console.log("Votos Recebidos: "+votosRecebidos);             
        
            if (votosRecebidos === totalVotes) {
                console.log('Todos os jogadores votaram. Processando resultados.');
        
                // Determinar a resposta vencedora
                const respostaVencedora = respostasEnviadas.reduce((a, b) => (a.votes > b.votes ? a : b));
        
                // Atualizar a pontuação do jogador
                const jogadorVencedor = players.find(p => p.name === respostaVencedora.player);
                if (jogadorVencedor) {
                    jogadorVencedor.score = (jogadorVencedor.score || 0) + 1;
                    console.log(`Ponto para ${jogadorVencedor.name}!`);
                }
        
                // Enviar atualização da pontuação para todos
                wss.clients.forEach(client => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({
                            type: 'roundResults',
                            winner: respostaVencedora.player,
                            answer: respostaVencedora.resposta,
                            players: players.map(p => ({ name: p.name, score: p.score || 0 }))
                        }));
                    }
                });
        
                // Reiniciar a rodada
                iniciarNovaRodada();
            }
        }
        

        if (message.type === 'join') {

             // Bloqueia novos jogadores se o jogo já começou
             if (gameStarted) {
                ws.send(JSON.stringify({ type: 'error', message: 'A partida já começou. Não é possível entrar.' }));
                ws.close(); // Fecha a conexão com o jogador
                return;
            }

            if (!roomOwner) {
                roomOwner = ws; // Define o primeiro jogador como dono
            }
            const isOwner = ws === roomOwner;

            // Jogador entrou na sala
            const cartasJogador = distribuirCartas(10); // Distribui 10 cartas ao jogador
            // console.log(cartasJogador);
            
            
            players.push({ id: ws, name: message.name, hand: cartasJogador });
            // console.log(`${message.name} entrou na sala com 10 cartas.`);
            console.log(`${message.name} entrou na sala com 10 cartas. ${isOwner ? 'É o dono da sala.' : ''}`);

            // Envia as cartas para o jogador
            ws.send(JSON.stringify({
                type: 'hand',
                hand: cartasJogador.map(carta => carta.resposta), // Apenas o texto da carta
                isOwner
            }));

             // Define a pergunta se ainda não houver uma
             if (!perguntaAtual) {
                perguntaAtual = escolherPergunta();
                console.log(`Pergunta escolhida: ${perguntaAtual.pergunta}`);
            }

            // Envia a pergunta atual para o jogador
            ws.send(JSON.stringify({
                type: 'question',
                pergunta: perguntaAtual.pergunta,
                id: perguntaAtual.id,
                dinamica: perguntaAtual.dinamica
            }));

            // Atualiza lista de jogadores para todos
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: 'updatePlayers',
                        players: players.map(player => player.name)
                    }));
                }
            });
        }  else if (message.type === 'startGame' && ws === roomOwner) {
            // Dono da sala iniciou a partida
            gameStarted = true; // Atualiza o status do jogo
            console.log('A partida foi iniciada!');

            // Notifica todos os jogadores
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: 'gameStarted',
                        message: 'A partida foi iniciada. Prepare-se!'
                    }));
                }
            });
        } else if (message.type === 'chat') {
            // Mensagem de chat
            console.log(`Mensagem de ${message.name}: ${message.text}`);
            
            // Repassa para todos os jogadores
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: 'chat',
                        name: message.name,
                        text: message.text
                    }));
                }
            });
        }
    });

    //! Evento ao desconectar
    ws.on('close', () => {
        if (ws === roomOwner) {
            if (players.length > 0) {
                roomOwner = players[0].id; // Transfere o dono para o próximo jogador
                console.log(`${players[0].name} agora é o dono da sala.`);
                roomOwner.send(JSON.stringify({
                    type: 'ownership',
                    message: 'Você é o novo dono da sala.'
                }));
            } else {
                console.log('A sala está vazia e sem dono.');
            }
        }

        //! Remove o jogador da lista e devolve as cartas para o baralho
        const player = players.find(player => player.id === ws);
        if (player) {
            respostasDisponiveis.push(...player.hand); // Devolve cartas ao baralho
            players = players.filter(p => p.id !== ws);
        }

        console.log('Jogador desconectado.');

        //! Atualiza lista de jogadores para todos
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                    type: 'updatePlayers',
                    players: players.map(player => player.name)
                }));
            }
        });
        
        //! Verifica se não há mais jogadores
        if (players.length === 0) {
            console.log('Todos os jogadores saíram. Reiniciando servidor...');
            resetGameState();
        }
    });
});

console.log('Servidor WebSocket rodando na porta 8080...');
