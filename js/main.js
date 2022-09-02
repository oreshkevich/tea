function order() {
  const deliveryAddress = document.querySelector('.delivery__address');
  const orderDeliveryCourier = document.querySelector(
    '.order-delivery-courier'
  );

  const deliveryItem = document.querySelectorAll('.delivery-item');
  deliveryItem.forEach((n, i, a) => {
    n.addEventListener('click', (event) => {
      a.forEach((m) => {
        m.classList.toggle('delivery-item--active', m === n);
        if (event.currentTarget.dataset.point === 'point') {
          deliveryAddress.classList.add('hide');
          orderDeliveryCourier.classList.remove('hide');
        } else {
          deliveryAddress.classList.remove('hide');
          orderDeliveryCourier.classList.add('hide');
        }
      });
    });
  });
}
order();
