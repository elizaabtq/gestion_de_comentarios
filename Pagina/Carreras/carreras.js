let expanded = null;
function toggleExpand(card4) {
    const cards = document.querySelectorAll('.card4');
    const container4 = document.getElementById('cards-container');

    if (expanded === card4) {
    card4.classList.remove('expanded');
    cards.forEach(c => c.classList.remove('hidden'));
    expanded = null;
    } else {
    cards.forEach(c => {
        if (c !== card4) c.classList.add('hidden');
    });
    card4.classList.add('expanded');
    expanded = card4;
    }
}