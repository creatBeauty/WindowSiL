import { Glstate } from '../../../globalState.js';

import { prepareDataForCutting } from '../../Logic/dataForCuting.js';
import { createCutting, visualizeTiles } from '../../Logic/cutting.js';
import { StoneProcessingArea } from '../../Logic/StoneProcessingArea.js';

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

    let recyclingArea = StoneProcessingArea(Glstate.basketItemsGlobal); // Общая площадь переработки камня
    console.log('Площадь переработки камня:' + recyclingArea + 'метр.кв.');
    let consumables = recyclingArea * 3000; //Расходники,  на один квадрат камня 3000р.
    console.log('Расходники, 3000 на один метр кв.' + consumables);
    let costSquareMeter = Math.round(Glstate.priceForListGlobal / 2.78); // В листе 2.78 м.кв.
    console.log('Стоимость камня за кв.метр ' + costSquareMeter);
    let handlerSalary = Math.round(recyclingArea * costSquareMeter * 0.8);

    console.log('Зарплата работника' + handlerSalary);
    costOrderTxt.textContent = costOfTheMaterial + handlerSalary + consumables; //Стоимость.. материал + зп.рабочего + расходники
    txtInTexArea.textContent = `Прошу выставить счет ${
      costOrderTxt.textContent
    } руб., за изготовление подоконников ${Glstate.basketItemsGlobal
      .map((item) => `${formatDimensions(item)}шт.`) // здесь указано количество и имя
      .join(', ')} из камня ${Glstate.selectedStoneGlobal}.`;
  });
}
export default costOrder;
