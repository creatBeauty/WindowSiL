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

// Запускаем всё после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initBurgerMenu();
});

function initBurgerMenu() {
  const burgerBtn = document.querySelector('.burger-btn');
  const navMenu = document.querySelector('.navigation__menu');

  if (burgerBtn && navMenu) {
    console.log('Burger button found:', burgerBtn); // для отладки

    // Единственный обработчик клика для бургер-кнопки
    burgerBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // предотвращаем всплытие события
      console.log('Burger clicked'); // для отладки
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

    // Закрываем меню при клике вне его
    document.addEventListener('click', (e) => {
      if (
        !e.target.closest('.navigation__menu') &&
        !e.target.closest('.burger-btn')
      ) {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
}
