function handleMouseEnter(){
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}
// Primeiro, obtenha o elemento do span e o menu pelo ID
const spanElement = document.getElementById('burguer');
const menuElement = document.getElementById('menuItens');

// Em seguida, defina a função clickMenu
function clickMenu() {
  // Verifica se o menu está visível e, em seguida, alterna sua visibilidade com base nessa verificação
  if (menuElement.style.display === 'none') {
    menuElement.style.display = 'block';
  } else {
    menuElement.style.display = 'none';
  }
}

// Agora, adicione um ouvinte de eventos para o evento de clique no span
spanElement.addEventListener('click', clickMenu);

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
document.addEventListener("DOMContentLoaded", addEventListenersToCard, false)

function selectCarouselItem(selectedButtonElement){
  const selectedItem = selectedButtonElement.id
  const carousel = document.querySelector('.s-card-carousel')

  console.log(carousel)
}