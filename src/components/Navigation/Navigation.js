// Простой массив путей страниц
const pages = [
  'home',
  'calculator',
  'stone-selection',
  'cart',
  'drawing',
  'cutting',
  'contacts',
];

// Функция переключения страниц
function showPage(pageId) {
  // Скрываем все страницы
  pages.forEach((page) => {
    document.getElementById(page).classList.remove('active');
  });

  // Показываем нужную страницу
  document.getElementById(pageId).classList.add('active');

  // Обновляем активную ссылку в меню
  const links = document.querySelectorAll('.navigation__link');
  links.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    }
  });
}

// Инициализация навигации
function initNavigation() {
  const nav = document.querySelector('.navigation');
  initBurgerMenu();

  // Обработчик кликов
  nav.addEventListener('click', (e) => {
    const link = e.target.closest('.navigation__link');
    if (link) {
      e.preventDefault();
      const pageId = link.getAttribute('data-page');
      if (pageId) {
        showPage(pageId);
      }
    }
  });

  // Показываем главную страницу при загрузке
  showPage('home');
}

// Запускаем навигацию
initNavigation();

function initBurgerMenu() {
  const burgerBtn = document.querySelector('.burger-btn');
  const navMenu = document.querySelector('.navigation__menu');

  if (burgerBtn && navMenu) {
    // Добавляем логи для отладки
    console.log('Burger button found:', burgerBtn);

    burgerBtn.addEventListener('click', () => {
      console.log('Burger clicked'); // проверяем клик
      burgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Закрываем меню при клике на пункт меню
    navMenu.addEventListener('click', (e) => {
      if (e.target.closest('.navigation__link')) {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
}

// Убедимся, что скрипт запускается после загрузки DOM
document.addEventListener('DOMContentLoaded', initBurgerMenu);
