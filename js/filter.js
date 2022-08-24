function filter() {
  const filterBtnRollUp = document.querySelector('.js-filter-btn--roll-up');
  const directoryContent = document.getElementById('directory-content');

  function toggleVisibility() {
    directoryContent.classList.toggle('hide');
  }

  filterBtnRollUp.addEventListener('click', toggleVisibility);
  const lists = document.querySelectorAll(
    '.directory-content__filter-dropdown'
  );
  const btns = document.querySelectorAll('.directory-content__filter-name');

  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      btns.forEach((btnItem, idx) => {
        if (btnItem === btn) {
          btnItem.classList.toggle('feature__link_active');
          lists[idx - 1].classList.toggle('hidden');
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
  function functionName() {
    if (document.documentElement.clientWidth < 900) {
      directoryContent.classList.add('hide');
    }
  }
  window.onload = functionName;
  window.onresize = functionName;
}
filter();

const cartToys = () => {
  const goodsWrapper = document.querySelector('.card-container');

  goodsWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('product-card__btn-add')) {
      event.target.textContent = 'В корзине';
      event.target.classList.add('active-card');
    }
  });
};
cartToys();
