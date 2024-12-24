'use strict'
// Функция для открытия модального окна
function openModal(url) {
    if (!url) {
      console.error("URL отсутствует!");
      return;
    }
    console.log("Открываем URL:", url); // Для отладки
    const modal = document.getElementById('modal');
    const iframe = modal.querySelector('iframe');
    iframe.src = url; // Устанавливаем URL в iframe
    modal.hidden = false; // Показываем модальное окно
  }

  // Функция для закрытия модального окна
  function closeModal() {
    const modal = document.getElementById('modal');
    const iframe = modal.querySelector('iframe');
    iframe.src = ''; // Очищаем iframe
    modal.hidden = true; // Скрываем модальное окно
  }