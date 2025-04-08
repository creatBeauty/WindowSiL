import { Glstate } from '../../../globalState.js';
import { visualizeTiles } from '../../Logic/cutting.js';
import { prepareDataForCutting } from '../../Logic/dataForCuting.js';

function visualCutting() {
  const cartBTNtoCutting = document.getElementById('cartBTNtoCutting');
  const strCart = document.getElementById('cart');
  const strCutting = document.getElementById('cutting');

  // Отладочное сообщение

  if (!cartBTNtoCutting || !strCart || !strCutting) {
    console.error('Один или несколько элементов не найдены');
    return;
  }

  cartBTNtoCutting.addEventListener('click', () => {
    strCart.classList.remove('active');
    strCutting.classList.add('active');
    strCutting.style.display = 'flex';
  });
  const data1 = Glstate.basketItemsGlobal;
  const data2 = prepareDataForCutting(data1);
  visualizeTiles(data2);
}

export default visualCutting;
