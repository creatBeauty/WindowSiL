import { Glstate } from '../../../globalState.js';

import { prepareDataForCutting } from '../../Logic/dataForCuting.js';
import { createCutting, visualizeTiles } from '../../Logic/cutting.js';

let costOrderBtn = document.querySelector('.btn-cost-order');
let costOrderTxt = document.querySelector('.cost-order-data-logic');
let txtInTexArea = document.getElementById('messageInfo');

function costOrder() {
  costOrderBtn.addEventListener('click', () => {
    function formatDimensions(item) {
      return `${item.dimensions}--${item.count}`;
    }

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
    txtInTexArea.textContent = `Прошу выставить счет на подоконники ${Glstate.basketItemsGlobal
      .map((item) => `${formatDimensions(item)}шт.`) // здесь указано количество и имя
      .join(', ')} из камня ${Glstate.selectedStoneGlobal}.`;
  });
}
export default costOrder;
