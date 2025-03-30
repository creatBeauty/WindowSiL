// Простой импорт функций навигации
import './components/Navigation/Navigation.js';

// Функция инициализации приложения
function initApp() {
  try {
    console.log('Приложение успешно инициализировано');
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
