function handleMouseEnter(){
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}
function handleMouseLeave(){
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}
function addEventListenersToCard(){
    const cardElements = window.document.getElementsByClassName('s-card')
    for (let indes = 0; indes < cardElements.length; indes++) {
        const card = cardElements[indes];
        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}
document.addEventListener("DOMContentLoaded", addEventListenersToCard)