<?php
session_start();
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo de Cartas Online</title>
    <!-- Link do CSS do Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark">
    <div class="container d-flex flex-column justify-content-center align-items-center vh-100">
        <div class="card shadow p-4 w-100" style="max-width: 400px;">
            <h1 class="text-center mb-4">Hex Cards</h1>
            <form id="playerForm" method="POST" action="game.php">
                <div class="mb-3">
                    <label for="playerName" class="form-label">Qual o seu nick?</label>
                    <input type="text" class="form-control" id="playerName" name="playerName" placeholder="" required autocomplete="off">
                </div>
                <div class="d-grid gap-2">
                    <button type="button" class="btn btn-info" id="rulesButton">Regras</button>
                    <button type="submit" class="btn btn-primary">Entrar na Sala</button>
                </div>
            </form>

        </div>
    </div>

    <!-- Modal para Regras -->
    <div class="modal fade" id="rulesModal" tabindex="-1" aria-labelledby="rulesModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="rulesModalLabel">Regras do Jogo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-black">
                    <p class="fontePadrao">"X-Ten Cards" é um jogo de festa irreverente e politicamente incorreto 
                        que envolve a criação de combinações engraçadas e muitas vezes chocantes de frases:</p>
                    <p class="fontePadrao"><strong>Objetivo do jogo:</strong></p>
                    <p class="fontePadrao">
                        O objetivo do jogo é fazer as combinações mais engraçadas e muitas vezes absurdas de frases, utilizando as cartas disponíveis, para ganhar pontos.
                    </p>
                    <p class="fontePadrao"><strong>Como funciona:</strong></p>
                    <p class="fontePadrao">Cada jogador começa com 10 cartas brancas (cartas de respostas).</p>
                    <p class="fontePadrao">A carta preta aparece a cada rodada como pergunta ou para completar a frase, e os jogadores que não forem o "Mandante" podem usar 1 carta branca para responder</p>
                    <p class="fontePadrao">Um jogador é selecionado a cada rodada para ser o "Mandante" que será o responsável para escolher a resposta anonimamente que mais te agradar</p>
                    <p class="fontePadrao">A carta do jogador que for escolhida pelo "Mandante" recebe 1 ponto naquela rodada</p>
                    <p class="fontePadrao">O jogo continua até que os jogadores decidam parar ou até que uma condição pré-determinada de pontuação seja atingida.</p>
                    <p class="fontePadrao"><strong>Vencedor:</strong></p>
                    <p class="fontePadrao">O jogo não tem necessariamente um vencedor final, mas geralmente é jogado até que os jogadores decidam parar. O jogador com mais pontos no final do jogo é considerado o "vencedor".</p>
                    <br>
                    <p class="fontePadrao"><b>É importante notar que "X-Ten Cards" é um jogo de humor negro e conteúdo adulto, e pode não ser adequado para todos os públicos. 
                        Os jogadores devem estar cientes disso ao decidirem jogar.</b></p>
                    <p class="fontePadrao2"><b>Se você é chorão e gosta de ficar de mimimi, nem entre pra jogar, nós aconselhamos procurar um psicólogo para tratar seus problemas.</b></p>
                    


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- JavaScript do Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    <!-- JavaScript customizado -->
    <script src="js/index.js"></script>
</body>
</html>
