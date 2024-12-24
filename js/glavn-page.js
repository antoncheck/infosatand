'use strict'
let returnTime = 6000; // Время бездействия в миллисекундах (например, 30 секунд)
let timeout;

function scrollToFirstSection() {
  const firstSection = document.querySelector('#first-section'); // Укажите ID первой секции
  if (firstSection) {
    // Проверяем, не находится ли пользователь уже в первой секции
    const firstSectionTop = firstSection.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY !== firstSectionTop) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function resetTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(scrollToFirstSection, returnTime);
}

function setupInactivityListener() {
  // События для отслеживания активности
  document.addEventListener('mousemove', resetTimer); // Движение мыши
  document.addEventListener('keydown', resetTimer); // Нажатие клавиш
  document.addEventListener('scroll', resetTimer); // Скроллинг
  document.addEventListener('click', resetTimer); // Щелчок мыши
}

// Инициализация
setupInactivityListener();
resetTimer();