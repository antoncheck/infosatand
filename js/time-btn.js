'use strict'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const duration = 1000; // Время прокрутки в миллисекундах (например, 1000 = 1 секунда)
        const startPosition = window.scrollY;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startTime = performance.now();
  
        function scrollAnimation(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1); // Процент выполнения (0-1)
          const ease = progress < 0.5 ? 2 * progress ** 2 : -1 + (4 - 2 * progress) * progress; // Легкая ease функция
          window.scrollTo(0, startPosition + (targetPosition - startPosition) * ease);
  
          if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
          }
        }
  
        requestAnimationFrame(scrollAnimation);
      }
    });
  });