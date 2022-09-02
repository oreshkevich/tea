const deliveryItemButton = document.querySelector('.delivery-item__button');
function functionName() {
  if (document.documentElement.clientWidth < 400) {
    deliveryItemButton.value = 'Выбрать ПВЗ';
  } else {
    deliveryItemButton.value = 'Выбрать пункт ПВЗ';
  }
}
window.onload = functionName;
window.onresize = functionName;
