const buttonModal = document.querySelector('.cards__button');
const modalWindow = document.querySelector('.modal-container')
const modal = document.querySelector('.modal')

buttonModal.addEventListener('click', function () {
  if (modalWindow.classList.contains('modal-container--closed')) {
    modalWindow.classList.remove('modal-container--closed');
    modalWindow.classList.add('modal-container--opened');
  }
});


modalWindow.addEventListener('click', function(e) {
  if ( !modal.contains(e.target) && !modalWindow.classList.contains('modal-container--closed') ) {
    modalWindow.classList.remove('modal-container--opened');
    modalWindow.classList.add('modal-container--closed');
  }
});
