import stonePrices from './stoneCostData.js';

async function loadPrices() {
  // Здесь вы можете использовать данные из stonePrices
  stonePrices.forEach((stone) => {
    const stoneName = stone.name;
    const price = stone.price;

    // Находим элементы на странице по названию камня
    const buttons = document.querySelectorAll(`[data-stone="${stoneName}"]`);
    buttons.forEach((button) => {
      const priceDisplay = button.querySelector('.symmPrice');
      if (priceDisplay) {
        priceDisplay.innerHTML = `${price} <span class="namePrice">руб/лист</span>`; // Обновляем цену
      }
    });
  });
}

// Вызываем функцию при загрузке страницы
window.onload = loadPrices;
