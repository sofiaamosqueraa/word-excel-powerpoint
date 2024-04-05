let currentIndex = 0; 


function updateButtonVisibility() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    // Mostra ou esconde o botão "Anterior" com base no índice atual
    if (currentIndex === 0) {
        prevButton.style.display = 'none'; // Esconde o botão "Anterior" se estiver no primeiro card
    } else {
        prevButton.style.display = 'inline-block'; // Mostra o botão "Anterior" se não estiver no primeiro card
    }

    // Mostra ou esconde o botão "Próximo" com base no índice atual
    if (currentIndex === totalCards - 1) {
        nextButton.style.display = 'none'; // Esconde o botão "Próximo" se estiver no último card
    } else {
        nextButton.style.display = 'inline-block'; // Mostra o botão "Próximo" se não estiver no último card
    }
}

document.getElementById('nextButton').addEventListener('click', function() {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    cards[currentIndex].style.display = 'none'; // Esconde o card atual
    currentIndex = (currentIndex + 1) % totalCards; // Move para o próximo card
    cards[currentIndex].style.display = 'block'; // Mostra o próximo card
    updateButtonVisibility(); // Atualiza a visibilidade dos botões
});

document.getElementById('prevButton').addEventListener('click', function() {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    cards[currentIndex].style.display = 'none'; // Esconde o card atual
    currentIndex = (currentIndex - 1 + totalCards) % totalCards; // Calcula o índice anterior de forma circular
    cards[currentIndex].style.display = 'block'; // Mostra o card anterior
    updateButtonVisibility(); // Atualiza a visibilidade dos botões
});

// Chama a função para inicializar a visibilidade dos botões
updateButtonVisibility();