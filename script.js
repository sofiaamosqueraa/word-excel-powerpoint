let currentIndex = 0; // Inicializa o índice do cartão atual como 0

document.getElementById('nextButton').addEventListener('click', function() {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    cards[currentIndex].style.display = 'none'; // Esconde o cartão atual
    currentIndex = (currentIndex + 1) % totalCards; // Move para o próximo cartão
    cards[currentIndex].style.display = 'block'; // Mostra o próximo cartão
});

document.getElementById('prevButton').addEventListener('click', function() {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    cards[currentIndex].style.display = 'none'; // Esconde o cartão atual
    currentIndex = (currentIndex - 1 + totalCards) % totalCards; // Calcula o índice anterior de forma circular
    cards[currentIndex].style.display = 'block'; // Mostra o cartão anterior
});
