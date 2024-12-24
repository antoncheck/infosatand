'use strict'
let inactivityTime = 6000; // Время бездействия в миллисекундах (например, 30 секунд)
let timeout;

function resetTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    window.location.href = './/index.html'; // URL главной страницы
  }, inactivityTime);
}

// Сброс таймера при любой активности
function setupInactivityListener() {
  document.addEventListener('mousemove', resetTimer); // Движение мыши
  document.addEventListener('keydown', resetTimer); // Нажатие клавиш
  document.addEventListener('scroll', resetTimer); // Скроллинг
  document.addEventListener('click', resetTimer); // Щелчок мыши
}

// Инициализация
setupInactivityListener();
resetTimer();
