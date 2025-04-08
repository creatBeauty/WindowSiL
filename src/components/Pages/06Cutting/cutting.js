const btnCutting = document.querySelector('.btn-cutting');
const strCutting = document.getElementById('cutting');
const strCart = document.getElementById('cart');
const stoneSelections = document.querySelectorAll('.grid-element');

function btngoToCartExit() {
  btnCutting.addEventListener('click', () => {
    strCutting.classList.remove('active');
    strCart.classList.add('active');
    strCutting.style.display = 'none';

    stoneSelections.forEach((el) => {
      el.style.background = '#585f73';
    });
  });
}

export default btngoToCartExit;
