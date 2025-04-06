import { Glstate } from '../../../globalState.js';

let lengthInDOM = document.querySelector('.data-lendth-input');
let widthInDOM = document.querySelector('.data-width-input');
let thicknessInDOM = document.querySelector('.data-thickness-input');
let countInDOM = document.querySelector('.data-count-input');

let cartStoneTxt = document.querySelector('.cart-data-stone');
let cartWindSillTxt = document.querySelector('.cart-data-size-order');

let btnAddToBasket = document.querySelector('.add-to-basket');

function calkAddToBasket() {
  btnAddToBasket.addEventListener('click', () => {
    const currentCartData = cartWindSillTxt.textContent;
    const newCartDataWindowSill = `${lengthInDOM.value}x${widthInDOM.value}x${thicknessInDOM.value}-${countInDOM.value}шт.`;
    cartWindSillTxt.textContent = currentCartData + ' ' + newCartDataWindowSill;
    cartStoneTxt.textContent = Glstate.selectedStoneGlobal;
  });
}
export default calkAddToBasket;
