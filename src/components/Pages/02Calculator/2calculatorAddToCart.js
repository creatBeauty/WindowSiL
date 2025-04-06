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
    if (
      lengthInDOM.value.trim() === '' ||
      widthInDOM.value.trim() === '' ||
      thicknessInDOM.value.trim() === '' ||
      countInDOM.value.trim() === ''
    ) {
      alert('Заполните поля');
      return;
    }

    const currentCartData = cartWindSillTxt.textContent;
    const newCartDataWindowSill = {
      dimensions: `${lengthInDOM.value}x${widthInDOM.value}x${thicknessInDOM.value}`,
      count: countInDOM.value,
      stone: Glstate.selectedStoneGlobal,
    };

    // Добавляем новый объект в массив
    Glstate.basketItemsGlobal.push(newCartDataWindowSill);

    // Обновляем текстовое содержимое
    cartWindSillTxt.textContent =
      currentCartData +
      ' ' +
      newCartDataWindowSill.dimensions +
      '-' +
      newCartDataWindowSill.count +
      'шт.';
    console.log(Glstate.basketItemsGlobal);
    console.log(typeof Glstate.basketItemsGlobal);
    cartStoneTxt.textContent = Glstate.selectedStoneGlobal;
  });
}
export default calkAddToBasket;
