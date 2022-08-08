const filterBtnRollUp = document.querySelector('.js-filter-btn--roll-up');
// const filterBtnExpand = document.querySelector('.js-filter-btn--expand');

const directoryContent = document.getElementById('directory-content');

function toggleVisibility() {
  directoryContent.classList.toggle('hide');
}

filterBtnRollUp.addEventListener('click', toggleVisibility);
const lists = document.querySelectorAll('.directory-content__filter-dropdown');
const btns = document.querySelectorAll('.directory-content__filter-name');

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    btns.forEach((btnItem, idx) => {
      if (btnItem === btn) {
        btnItem.classList.toggle('feature__link_active');
        lists[idx - 1].classList.toggle('hidden');
      } else {
        btnItem.classList.remove('feature__link_active');
      }
    });
  });
});

const directoryContentSubcategories = document.querySelector(
  '.directory-content__subcategories'
);
const btnHide = document.getElementById('js-btn-hide');
const btnExpand = document.getElementById('js-btn-expand');

function toggleVisibilityHide() {
  directoryContentSubcategories.classList.add('hide');
  btnHide.classList.add('hide');
  btnExpand.classList.remove('hide');
}

btnHide.addEventListener('click', toggleVisibilityHide);

function toggleVisibilityExpand() {
  directoryContentSubcategories.classList.remove('hide');
  btnExpand.classList.add('hide');
  btnHide.classList.remove('hide');
}

btnExpand.addEventListener('click', toggleVisibilityExpand);
