function order() {
  const orderPostamat = document.getElementById('order-postamat');
  const orderPickup = document.getElementById('order-pickup');
  const orderCourier = document.getElementById('order-courier');
  const deliveryAddress = document.querySelector('.delivery__address');
  const orderDeliveryCourier = document.querySelector(
    '.order-delivery-courier'
  );
  const postamates = document.querySelector('.postamates');
  const ticketsCard = document.querySelector('.order-form__card');
  ticketsCard.addEventListener('click', (event) => {
    //   let target = event.target;
    //   console.log(event.currentTarget);
    //   console.log(event.target.dataset.point);
    //   console.log(event.target.getAttribute('data-point'));
    //   if (target.value === 'courier') {
    //     orderCourier.classList.add('delivery-item--active');
    //     orderPostamat.classList.remove('delivery-item--active');
    //     orderPickup.classList.remove('delivery-item--active');
    //     deliveryAddress.classList.add('hide');
    //     orderDeliveryCourier.classList.remove('hide');
    //   }
    //   if (target.value === 'postamat') {
    //     orderPostamat.classList.add('delivery-item--active');
    //     orderCourier.classList.remove('delivery-item--active');
    //     orderPickup.classList.remove('delivery-item--active');
    //     postamates.classList.remove('hide');
    //     deliveryAddress.classList.add('hide');
    //     orderDeliveryCourier.classList.add('hide');
    //   }
    if (event.target.dataset.point === 'point') {
      console.log('hi');
      deliveryAddress.classList.add('hide');
      orderDeliveryCourier.classList.remove('hide');
    } else {
      deliveryAddress.classList.remove('hide');
      orderDeliveryCourier.classList.add('hide');
    }

    // if (target.value === 'pickup') {

    // orderPickup.classList.add('delivery-item--active');
    // orderCourier.classList.remove('delivery-item--active');
    // orderPostamat.classList.remove('delivery-item--active');
    // postamates.classList.add('hide');
    // deliveryAddress.classList.remove('hide');
    // orderDeliveryCourier.classList.add('hide');
    // }
  });

  const deliveryItem = document.querySelectorAll('.delivery-item');
  deliveryItem.forEach((n, i, a) => {
    // item.addEventListener('click', (event) => {
    //   console.log(event.target);
    //   if (event.currentTarget) {
    //     item.classList.add('delivery-item--active');
    //   }
    //   item.classList.remove('delivery-item--active');
    // });
    n.addEventListener('click', () => {
      a.forEach((m) => {
        m.classList.toggle('delivery-item--active', m === n);
      });
    });
  });
  // document.querySelectorAll('.side__nav > li')
  // deliveryItem.forEach((n, i, a) => {
  //   n.addEventListener('click', () =>
  //     a.forEach((m) => m.classList.toggle('is-active', m === n))
  //   );
  // });
}
order();
