// Простой импорт функций навигации
import './components/Navigation/Navigation.js';
import greatOrder from './components/Pages/01Primary/primary.js';
import btnGetStonesCalculator from './components/Pages/02Calculator/1calculatorGetStones.js';
import stoneSelect from './components/Pages/02Calculator/1calculatorGetStones.js';
import btnConfirmStones from './components/Pages/03StoneSelection/2btnStoneSelectionСonfirm.js';
// Функция инициализации приложения
function initApp() {
  try {
    console.log('Приложение успешно инициализировано');
    greatOrder();
    btnGetStonesCalculator();
    stoneSelect();
    btnConfirmStones();
  } catch (error) {
    console.error('Ошибка при инициализации приложения:', error);
  }
}

// Проверяем загрузку документа
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
