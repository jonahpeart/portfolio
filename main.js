/////////// MODAL FUNCTIONS ////////////////
const cards = document.querySelectorAll(".project")
const modals = document.querySelectorAll(".modal-window")
const closeButtons = document.querySelectorAll('.modal-close');

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
  }
}

function closeAllModals() {
  modals.forEach(modal => {
    modal.style.display = 'none';
    document.body.style.overflowY = 'scroll';
  });
}


cards.forEach(cards => {
  cards.addEventListener('click', () => {
    const modalId = cards.getAttribute('data-modal');
    openModal(modalId);
  });
});


closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    closeAllModals();
  });
});


window.addEventListener('click', event => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflowY = 'scroll';
    }
  });
});


//////////// TITLE WORD ANIMATION /////////////////
let text = document.getElementById('text');
let animationDelay = 20;

let words = text.innerText.split(' ');
let newDom = '';

words.forEach(word => {
  newDom += `<span class="word">`;
  for (let i = 0; i < word.length; i++) {
    newDom += `<span class="char">${word[i]}</span>`;
  }
  newDom += `</span> `;
});

text.innerHTML = newDom.trim();

let chars = text.querySelectorAll('.char');
chars.forEach((char, i) => {
  char.style.animationDelay = animationDelay * i + 'ms';
});
