'use strict'
let inactivityTime = 6000; // Время бездействия в миллисекундах (30 секунд)
let timeout;

// Функция перенаправления на главную страницу
function redirectToHome() {
  window.location.href = './/index.html'; // URL главной страницы
}

// Сброс таймера
function resetTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(redirectToHome, inactivityTime);
}

// Отслеживание активности
function setupInactivityListener() {
  // События активности на странице
  document.addEventListener('mousemove', resetTimer); // Движение мыши
  document.addEventListener('keydown', resetTimer); // Нажатие клавиш
  document.addEventListener('scroll', resetTimer); // Скроллинг
  document.addEventListener('click', resetTimer); // Щелчок мыши

  // Обработка активности для всех видео на странице
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.addEventListener('play', resetTimer); // Если видео играет, сбросить таймер
    video.addEventListener('pause', resetTimer); // Если видео ставится на паузу, сбросить таймер
    video.addEventListener('ended', resetTimer); // Если видео закончилось, сбросить таймер
    video.addEventListener('timeupdate', resetTimer); // Если видео проигрывается, считать это действием
  });
}

// Инициализация
setupInactivityListener();
resetTimer();
