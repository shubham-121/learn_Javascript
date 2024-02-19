'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  //console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', () => {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

function closeModal() {
  console.log('clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//***same functionality with redudant code */
// btnCloseModal.addEventListener('click', () => {
//   console.log('clicked');
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', () => {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
document.addEventListener('keydown', event => {        //close the modal window on a key press from the keyboard
  console.log(event.key);
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) closeModal();
  }
});
