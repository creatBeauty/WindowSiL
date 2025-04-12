import { Glstate } from '../../../globalState.js';

// Функция для назначения обработчиков кликов
function assignEdgeClickHandlers() {
  // Получаем элемент с классом Edge-Selection
  const edgeSelectionDiv = document.querySelector('.Edge-Selection');

  // Получаем все кнопки внутри этого элемента
  const buttons = edgeSelectionDiv.querySelectorAll('.Edge');

  // Назначаем обработчик клика для каждой кнопки
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Убираем border у всех кнопок
      buttons.forEach((btn) => {
        btn.style.border = 'none'; // Убираем border
      });

      // Получаем текст из span внутри кнопки
      const spanValue = button.querySelector('.button-text').textContent;

      // Присваиваем значение глобальной переменной Edge
      Glstate.Edge = spanValue;

      // Назначаем border для кнопки, по которой кликнули
      button.style.border = '4px solid rgb(204, 138, 71)'; // Замените на нужный цвет

      // Выводим значение для проверки (можно удалить в продакшене)
      console.log(`Edge set to: ${Edge}`);
    });
  });
}

export default assignEdgeClickHandlers;
