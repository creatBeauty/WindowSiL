import { selectedStone, priceForList } from '../../../globalState';

const stoneSelections = document.querySelectorAll('.grid-element'); // Убедитесь, что '.grid-element' правильный селектор
function stoneSelect() {
  stoneSelections.forEach((el) => {
    el.addEventListener('click', () => {
      // Убираем выделение со всех элементов
      stoneSelections.forEach((el2) => {
        el2.classList.remove('selectedStones');
      });

      // Добавляем выделение к выбранному элементу
      el.classList.add('selectedStones');
      el.style.background = 'rgb(249, 101, 101)';

      // Извлекаем название камня
      const stoneType = el
        .querySelector('.button-description')
        .textContent.trim(); // Находим элемент и получаем текст

      // Извлекаем цену
      const priceText = el.querySelector('.symmPrice').textContent.trim(); // Получаем текст с ценой
      const price = priceText.replace(/\D/g, ''); // Извлекаем только числовое значение, убирая все ненужные символы

      // Присваиваем значение глобальным переменным
      selectedStone.value = stoneType; // Если selectedStone - это объект
      priceForList.value = price; // Если priceForList - это объект

      // Если selectedStone и priceForList не являются объектами
      // selectedStone = stoneType;
      // priceForList = price;

      // Для вывода в консоль, если нужно следить за изменениями
      console.log(
        `Selected Stone: ${selectedStone.value}, Price: ${priceForList.value}`
      );
    });
  });
}

export default stoneSelect;
