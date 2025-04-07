import { Glstate } from '../../../globalState.js';

import { prepareDataForCutting } from '../../Logic/dataForCuting.js';
import { createCutting, visualizeTiles } from '../../Logic/cutting.js';

let costOrderBtn = document.querySelector('.btn-cost-order');
let costOrderTxt = document.querySelector('.cost-order-data-logic');

function costOrder() {
  costOrderBtn.addEventListener('click', () => {
    const dataForCutting = prepareDataForCutting(Glstate.basketItemsGlobal);
    console.log(dataForCutting);
    const countListForOrder = createCutting(dataForCutting);
    visualizeTiles(countListForOrder.tiles);

    Glstate.quantitySheetsAfterCuttingGlobal = countListForOrder;
    console.log(countListForOrder);
    console.log(Glstate.priceForListGlobal);
    const costOfTheMaterial =
      Number(Glstate.priceForListGlobal) *
      Number(countListForOrder.sheetsCount);
    console.log(costOfTheMaterial);
    costOrderTxt.textContent = costOfTheMaterial;
  });
}
export default costOrder;
