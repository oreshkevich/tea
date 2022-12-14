function modal() {
  const modalBtn = document.querySelector('.more');
  const modal = document.querySelector('.modal');

  modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('modal__close')) {
      modal.classList.add('hidden');
    }
  });
  modal.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
}
modal();
