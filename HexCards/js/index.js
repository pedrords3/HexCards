 // Abrir modal de regras
document.getElementById('rulesButton').addEventListener('click', () => {
    const rulesModal = new bootstrap.Modal(document.getElementById('rulesModal'));
    rulesModal.show();
});

// Processar o formulário
// document.getElementById('playerForm').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const playerName = document.getElementById('playerName').value.trim();
//     if (playerName) {
//         // alert(`Bem-vindo, ${playerName}!`);
//         // Aqui você pode redirecionar para a próxima página:
//         window.location.href = 'game.php';
//     } else {
//         alert('Por favor, insira seu nome antes de continuar.');
//     }
// });

