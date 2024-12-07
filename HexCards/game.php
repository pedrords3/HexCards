<?php
session_start();

// Verifica se o nome foi enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['playerName'])) {
    $_SESSION['playerName'] = htmlspecialchars($_POST['playerName']); // Salva o nome na sessão
}

// Verifica se o nome já está na sessão
if (!isset($_SESSION['playerName']) || empty($_SESSION['playerName'])) {
    // Redireciona para o index.php se o nome não estiver configurado
    header('Location: index.php');
    exit;
}

// Nome do jogador
$playerName = $_SESSION['playerName'];
?>


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sala de Jogo</title>
    <!-- Link do CSS do Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

</head>
<body class="bg-dark text-white">
    <div id="gameContainer">
        <!-- Chat -->
        <div id="chat">
            <h5>Chat</h5>
            <div id="chatMessages">
                <!-- <p><strong>Jogador2:</strong> Vamos começar!</p> -->
            </div>
            <form id="chatForm" class="d-flex">
                <input type="text" class="form-control" id="chatInput" placeholder="Digite sua mensagem" autocomplete="off">
                <button id="sendChatButton" type="submit" class="btn btn-primary ms-2">Enviar</button>
            </form>
        </div>

        <!-- Área central (cartas de resposta e pergunta) -->
        <div id="main">
            <div class="text-center mb-3">
                <h5>Carta de Pergunta</h5>
                <div id="question" class="card" style="width: 200px; height: 150px;">
                    <p>Pergunta do jogo será exibida aqui</p>
                </div>
            </div>
            <!-- <p>VOCÊ É O MANDANTE</p> -->
            
            <!-- Conteúdo anterior -->
            <button id="startGameButton" class="btn btn-success mt-3" style="display: none;">Iniciar Partida</button>
            
            <div id="respostasEnviadas" class="response-cards d-flex justify-content-center">
               
            </div>

        </div>

        <!-- Lista de jogadores -->
        <div id="players">
            <h5>Jogadores</h5>
            <ul class="list-unstyled">
                <!-- <li>Jogador 1: 10 pontos</li>
                <li>Jogador 2: 7 pontos</li>
                <li>Jogador 3: 5 pontos</li> -->
            </ul>
        </div>

        <!-- Cartas do jogador -->
        <div id="hand" class="response-cards d-flex justify-content-center">
                <div class="card" style="width: 150px; height: 180px;">Minha Carta 1</div>
                <div class="card" style="width: 150px; height: 180px;">Minha Carta 2</div>
                <div class="card" style="width: 150px; height: 180px;">Minha Carta 3</div>
                <div class="card" style="width: 150px; height: 180px;">Minha Carta 4</div>
                <div class="card" style="width: 150px; height: 180px;">Minha Carta 5</div>
                <div class="card" style="width: 150px; height: 180px;">Minha Carta 6</div>
                <div class="card" style="width: 150px; height: 180px;">Minha Carta 7</div>
                <div class="card" style="width: 150px; height: 180px;">Minha Carta 8</div>
                <div class="card" style="width: 150px; height: 180px;">Minha Carta 9</div>
                <div class="card" style="width: 150px; height: 180px;">Minha Carta 10</div>
            </div>
    </div>

    <!-- JavaScript do Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    <!-- JavaScript customizado -->
    <script>
         const ws = new WebSocket('ws://localhost:8080');
        document.getElementById('chatForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const chatInput = document.getElementById('chatInput');
            const message = chatInput.value.trim();
            if (message) {
                const chatMessages = document.getElementById('chatMessages');
                chatMessages.innerHTML += `<p><strong>Você:</strong> ${message}</p>`;
                chatInput.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        });
    </script>

<script>
    let gameStarted = false; // Controle do estado da partida
    let hasSubmittedAnswer = false; // Controle para impedir envio múltiplo

    // Evento de clique para selecionar e enviar uma carta
    document.getElementById('hand').addEventListener('click', (event) => {
        if (!gameStarted) {
            alert('A partida ainda não começou. Aguarde o dono da sala.');
            return;
        }

        if (hasSubmittedAnswer) {
            alert('Você já enviou sua resposta nesta rodada.');
            return; // Bloqueia múltiplos envios
        }

        const card = event.target.closest('.card');
        if (card) {
            const answerText = card.textContent.trim();

            // Marca que o jogador já enviou a resposta
            hasSubmittedAnswer = true;

            // Envia a resposta ao servidor
            ws.send(JSON.stringify({
                type: 'sendAnswer',
                name: playerName,
                answer: answerText
            }));

            // Remove a carta enviada
            card.remove();

            // (Opcional) Adiciona uma mensagem visual ou desativa as cartas restantes
            alert('Sua resposta foi enviada!');
        }
    });

    // Reseta a flag no final da rodada
    ws.addEventListener('message', (event) => {
        const message = JSON.parse(event.data);

        // Quando a rodada terminar, permite novo envio
        if (message.type === 'roundEnded') {
            hasSubmittedAnswer = false; // Permite enviar na próxima rodada
        }
    });
</script>


<script>
    const playerName = "<?php echo $_SESSION['playerName']; ?>";
    // const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
        console.log('Conectado ao servidor WebSocket.');
        
        // Envia o nome do jogador ao conectar
        ws.send(JSON.stringify({ type: 'join', name: playerName }));
    };

    ws.onmessage = (event) => {
        const message = JSON.parse(event.data);

        if (message.type === 'updateAnswers') {
            const respostasContainer = document.getElementById('respostasEnviadas');
            respostasContainer.innerHTML = ''; // Limpa respostas anteriores

            message.respostas.forEach(answer => {
                const answerCard = document.createElement('div');
                answerCard.className = 'card';
                answerCard.style.width = '150px';
                answerCard.style.height = '180px';
                answerCard.style.margin = '5px';
                answerCard.style.padding = '10px';
                answerCard.style.border = '1px solid #000';
                answerCard.style.display = 'flex';
                answerCard.style.alignItems = 'center';
                answerCard.style.justifyContent = 'center';
                answerCard.style.display = 'none'; //???
                answerCard.textContent = answer; // Exibe o texto da resposta
                respostasContainer.appendChild(answerCard);
            });
        }

        if (message.type === 'readyToVote') {
            const respostasContainer = document.getElementById('respostasEnviadas');
            const notificationAnswer = document.createElement('div');
            notificationAnswer.className = 'alert alert-info mt-3';
            notificationAnswer.textContent = message.message; // "Todos os jogadores enviaram suas respostas. Vote na melhor!"
            respostasContainer.prepend(notificationAnswer);

            // Esconde a mensagem depois de 4 segundos
            setTimeout(() => {
                notificationAnswer.remove(); // Remove a mensagem da tela
            }, 4000); // 4 segundos

            
        }
        if (message.type === 'votingStarted') {
            // Notificar que a votação começou
            // alert('A votação começou! Escolha a melhor resposta.');
        }       
   

        if (message.type === 'castVote') {
            const respostaVotada = respostasEnviadas.find(r => r.resposta === message.vote);
            if (!respostaVotada) {
                ws.send(JSON.stringify({ type: 'error', message: 'Resposta inválida!' }));
                return;
            }

            if (respostaVotada.player === message.name) {
                ws.send(JSON.stringify({ type: 'error', message: 'Você não pode votar na sua própria carta!' }));
                return;
            }

            // Incrementa os votos da resposta escolhida
            respostaVotada.votes += 1;
            console.log(`${message.name} votou em: ${respostaVotada.resposta}`);
        }

        if (message.type === 'voteOptions') {
            const respostasContainer = document.getElementById('respostasEnviadas');
            respostasContainer.innerHTML = ''; // Limpa respostas anteriores

            message.options.forEach((resposta, index) => {
                const card = document.createElement('div');
                card.className = 'card resposta-card';
                card.className = 'card';
                card.style.width = '150px';
                card.style.height = '180px';
                card.style.margin = '5px';
                card.style.padding = '10px';
                card.style.border = '1px solid #000';
                card.style.display = 'flex';
                card.style.alignItems = 'center';
                card.style.justifyContent = 'center';
                // card.style.background = 'red';
                card.textContent = resposta;

                // Clique para votar
                card.onclick = () => {
                    const confirmation = confirm(`Deseja votar nesta resposta?\n"${resposta}"`);
                    if (confirmation) {
                        card.style.background = 'lightgreen';
                        card.style.color = 'white';
                        respostasContainer.style.pointerEvents = 'none'; //* DESABILITA CLIQUE AO ENVIAR A RESPOSTA
                        ws.send(JSON.stringify({
                            type: 'castVote',
                            name: playerName,
                            vote: resposta // Envia a resposta votada para o servidor
                        }));
                    }
                };

                respostasContainer.appendChild(card);
            });
        }

        if (message.type === 'roundResults') {
            const respostasContainer = document.getElementById('respostasEnviadas');
            respostasContainer.innerHTML = ''; // Limpa a interface

            const notification = document.createElement('div');
            notification.className = 'alert alert-success mt-3';
            notification.textContent = `Rodada encerrada! Vencedor: ${message.winner} com a resposta: "${message.answer}"`;
            respostasContainer.appendChild(notification);
            setTimeout(() => {
                notification.remove(); // Remove a mensagem da tela
            }, 2000);

            // Atualiza a lista de jogadores e pontuação
            // const playersList = document.getElementById('playersList');
            const playersList = document.getElementById('players');
            playersList.innerHTML = ''; // Limpa a lista

            message.players.forEach(player => {
                const playerItem = document.createElement('div');
                playerItem.textContent = `${player.name} - Pontos: ${player.score}`;
                playersList.appendChild(playerItem);
            });
        }

        if (message.type === 'newRound') {
            const respostasContainer = document.getElementById('respostasEnviadas');
            respostasContainer.style.pointerEvents = 'auto'; //*HABILITA CLIQUE PARA ENVIAR RESPOSTA
            // const perguntaContainer = document.getElementById('perguntaAtual');
            const perguntaContainer = document.getElementById('question');
            perguntaContainer.style.width = '150px';
            perguntaContainer.style.height = '180px';
            perguntaContainer.textContent = message.question;

            // const maoContainer = document.getElementById('maoCartas');
            const maoContainer = document.getElementById('hand');
            const novaCarta = document.createElement('div');
            novaCarta.className = 'card';
            novaCarta.style.width = '150px';
            novaCarta.style.height = '180px';
            novaCarta.style.margin = '5px';
            novaCarta.style.padding = '10px';
            novaCarta.style.border = '1px solid #000';
            novaCarta.style.display = 'flex';
            novaCarta.style.alignItems = 'center';
            novaCarta.style.justifyContent = 'center';
            novaCarta.textContent = message.newCard;
            maoContainer.appendChild(novaCarta);
        }


        // if (message.type === 'error') { // exibe um alert
        //     alert(message.message);
        // }

        if (message.type === 'hand') {

            if (message.isOwner) {
                const startButton = document.getElementById('startGameButton');
                startButton.style.display = 'inline-block'; // Exibe o botão para o dono
                startButton.addEventListener('click', () => {
                    ws.send(JSON.stringify({ type: 'startGame' }));
                });
            }
            // Recebe e exibe as cartas
            const handContainer = document.getElementById('hand');
            handContainer.innerHTML = ''; // Limpa cartas anteriores
            message.hand.forEach(cardText => { // Aqui, cardText é o texto diretamente
                const cardElement = document.createElement('div');
                cardElement.className = 'card';
                cardElement.style.width = '150px';
                cardElement.style.height = '180px';
                cardElement.style.margin = '5px';
                cardElement.style.padding = '10px';
                cardElement.style.border = '1px solid #000';
                cardElement.style.display = 'flex';
                cardElement.style.alignItems = 'center';
                cardElement.style.justifyContent = 'center';
                cardElement.textContent = cardText; // Usa o texto diretamente
                handContainer.appendChild(cardElement);
            });
        }

        if (message.type === 'gameStarted') {
            gameStarted = true;
            const startButton = document.getElementById('startGameButton');
            if (startButton) {
                startButton.style.display = 'none'; // Esconde o botão após iniciar

            }

        const gameContainer = document.getElementById('gameContainer');
        const notification = document.createElement('div');
        notification.className = 'alert alert-success mt-3';
        notification.textContent = message.message;
        gameContainer.prepend(notification); // Mostra mensagem de que o jogo começou

        // Esconde a mensagem depois de 2 segundos
        setTimeout(() => {
            notification.remove(); // Remove a mensagem da tela
        }, 2000); // 2 segundos

    }

    if (message.type === 'error') {
        alert(message.message); // Exibe erro para o jogador
    }


        if (message.type === 'question') {
            // Recebe e exibe a pergunta
            const questionElement = document.getElementById('question');
            questionElement.style.width = '150px';
            questionElement.style.height = '180px';
            questionElement.textContent = message.pergunta;
        }

        if (message.type === 'updatePlayers') {
            // Atualiza a lista de jogadores
            const playersList = document.getElementById('players');
            playersList.innerHTML = '<h5>Jogadores</h5><ul>';
            message.players.forEach(player => {
                playersList.innerHTML += `<li>${player}</li>`;
            });
            playersList.innerHTML += '</ul>';
        } 
        else if (message.type === 'chat') {
            // Exibe a mensagem de chat
            const chatMessages = document.getElementById('chatMessages');
            chatMessages.innerHTML += `<div><strong>${message.name}:</strong> ${message.text}</div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll automático
        }
    };

    ws.onclose = () => {
        console.log('Conexão com o servidor WebSocket fechada.');
    };

    // Lógica de envio de mensagens no chat
    document.getElementById('sendChatButton').addEventListener('click', () => {
        const chatInput = document.getElementById('chatInput');
        const messageText = chatInput.value.trim();

        if (messageText) {
            ws.send(JSON.stringify({ type: 'chat', name: playerName, text: messageText }));
            chatInput.value = ''; // Limpa o campo de input
        }
    });

    document.getElementById('chatInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('sendChatButton').click();
        }
    });

    // Quando o jogador clica em uma carta para votar
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('votoCard')) {
            const card = e.target;
            const respostaVotada = card.textContent;

            // Verifica se o jogador já votou
            if (hasVoted) {
                alert('Você já votou nesta rodada.');
                return;
            }

            // Verifica se o jogador está tentando votar na sua própria resposta
            if (respostaVotada === myAnswer) {
                alert('Você não pode votar na sua própria resposta.');
                return;
            }

            // Envia o voto ao servidor
            ws.send(JSON.stringify({
                type: 'castVote',
                name: playerName, // Nome do jogador (assumindo que você tem essa variável)
                vote: respostaVotada
            }));

            // Marca que o jogador já votou
            hasVoted = true;

            // Desabilita as opções de voto após votar
            const allCards = document.querySelectorAll('.votoCard');
            allCards.forEach(card => card.disabled = true);
        }
    });


    // Lógica para votar em uma carta (exibe todas as opções)
    // document.addEventListener('click', function (e) {
    //         if (e.target.classList.contains('votoCard')) {
    //             const card = e.target;
    //             const respostaVotada = card.textContent;

    //             // Verifica se o jogador está tentando votar na sua própria resposta
    //             if (respostaVotada === myAnswer) {
    //                 alert('Você não pode votar na sua própria resposta.');
    //                 return;
    //             }

    //             // Envia o voto ao servidor
    //             socket.send(JSON.stringify({
    //                 type: 'castVote',
    //                 vote: respostaVotada
    //             }));

    //             // Desabilita as opções de voto após votar
    //             const allCards = document.querySelectorAll('.votoCard');
    //             allCards.forEach(card => card.disabled = true);
    //         }
    //     });
</script>




</body>
</html>
