import { Glstate } from '../../../globalState.js';

const stoneSelections = document.querySelectorAll('.grid-element');
const strCalculator = document.getElementById('calculator');
const strStoneSelection = document.getElementById('stone-selection');
let stoneSelectionName = document.querySelector('.stone-selection-name');

function stoneSelect() {
  console.log('Функция stoneSelect вызвана'); // Для отладки
  stoneSelections.forEach((el) => {
    el.addEventListener('click', () => {
      console.log('Кнопка нажата'); // Для отладки
      // Убираем выделение со всех элементов
      stoneSelections.forEach((el2) => {
        el2.classList.remove('selectedStones');
      });

      // Добавляем выделение к выбранному элементу
      el.classList.add('selectedStones');
      el.style.border = '8px solid rgb(204, 138, 71)';

      // Извлекаем название камня
      const stoneType = el
        .querySelector('.button-description')
        .textContent.trim(); // Находим элемент и получаем текст

      // Извлекаем цену
      const priceText = el.querySelector('.symmPrice').textContent.trim(); // Получаем текст с ценой
      const price = priceText.replace(/\D/g, ''); // Извлекаем только числовое значение, убирая все ненужные символы

      // Присваиваем значение глобальным переменным
      Glstate.selectedStoneGlobal = stoneType;
      Glstate.priceForListGlobal = price;
      stoneSelectionName.style.fontFamily = 'Arial';
      stoneSelectionName.textContent = stoneType;
      // Задержка в 1 секунду перед переключением классов
      setTimeout(() => {
        strCalculator.classList.add('active');
        strStoneSelection.classList.remove('active');
      }, 500); // 1000 миллисекунд = 1 секунда

      // Для вывода в консоль, если нужно следить за изменениями
      console.log(
        `Выбранный камень: ${Glstate.selectedStoneGlobal}, Стоимость: ${Glstate.priceForListGlobal}`
      );
    });
  });
}

export default stoneSelect;
