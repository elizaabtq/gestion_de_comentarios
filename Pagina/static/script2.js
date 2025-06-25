function expandCard(clickedCard, color, longText) {
    const isExpanded = clickedCard.classList.contains('expand');
    const allCards = document.querySelectorAll('.card3');

    // Restaurar todas las tarjetas
    allCards.forEach(c => {
      c.classList.remove('expand');
      c.classList.remove('hidden');
      c.querySelector('.icon').style.display = '';
      c.querySelector('.title').style.display = '';
      c.querySelector('.short-desc').style.display = '';
    });

    // Si no estaba expandida, entonces expandirla y ocultar las otras
    if (!isExpanded) {
      clickedCard.classList.add('expand');
      clickedCard.querySelector('.long-desc').textContent = longText;

      setTimeout(() => {
        clickedCard.querySelector('.icon').style.display = 'none';
        clickedCard.querySelector('.title').style.display = 'none';
        clickedCard.querySelector('.short-desc').style.display = 'none';
      }, 600);

      allCards.forEach(c => {
        if (c !== clickedCard) {
          c.classList.add('hidden');
        }
      });
    }
  }