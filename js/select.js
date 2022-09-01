const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

// Reset title
// const reset = document.querySelector('.reset');
// reset.addEventListener('click', () => {
//   selectSingle_title.textContent =
//     selectSingle_title.getAttribute('data-default');
// });

const deliveryItemButton = document.querySelector('.delivery-item__button');
function functionName() {
  if (document.documentElement.clientWidth < 400) {
    console.log('hi');
    deliveryItemButton.value = 'Выбрать ПВЗ';
  } else {
    deliveryItemButton.value = 'Выбрать пункт ПВЗ';
  }
}
window.onload = functionName;
window.onresize = functionName;
