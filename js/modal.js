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
}
modal();

function promoCode() {
  const promoCodeBtn = document.querySelector('.promocode__btn');
  const checkoutInfo = document.getElementById('promo-code');
  const basketCouponInput = document.getElementById('basket-coupon-input');

  promoCodeBtn.addEventListener('click', () => {
    const discount = basketCouponInput.value.trim().toLowerCase();
    if (discount == 'скидка') checkoutInfo.classList.remove('hidden');
  });
}
promoCode();
