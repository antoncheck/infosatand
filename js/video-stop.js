'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');
  
    videos.forEach(video => {
      video.addEventListener('play', () => {
        // Останавливаем все другие видео
        videos.forEach(otherVideo => {
          if (otherVideo !== video && !otherVideo.paused) {
            otherVideo.pause();
          }
        });
      });
    });
  });