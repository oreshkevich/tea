const filterBtnRollUp = document.querySelector('.js-filter-btn--roll-up');
const filterBtnExpand = document.querySelector('.js-filter-btn--expand');

const directoryContent = document.getElementById('directory-content');

function toggleVisibility() {
  directoryContent.classList.toggle('hide');
}

filterBtnRollUp.addEventListener('click', toggleVisibility);
