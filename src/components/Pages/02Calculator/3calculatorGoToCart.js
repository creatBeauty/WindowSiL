const calculatorGoToCartBtnInDOM = document.getElementById('go-to-cart');
const strCalculator = document.getElementById('calculator');
const strCart = document.getElementById('cart');

function btnGoToCart() {
  calculatorGoToCartBtnInDOM.addEventListener('click', () => {
    strCalculator.classList.remove('active');
    strCart.classList.add('active');
  });
}
export default btnGoToCart;
