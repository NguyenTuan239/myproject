// Lấy tất cả các nút có class homePG-sec1-button
const buttons = document.querySelectorAll('.homePG-sec1-button');
const trailerContainer = document.querySelector('.home-trailer-container');

// Khởi tạo Video.js
const videoPlayer = document.getElementById('my-video');

// Duyệt qua từng nút và gắn sự kiện click

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Hiển thị video
      trailerContainer.classList.remove('hidden');
    
      // Tự động phát video thông qua Video.js API
      videoPlayer.play();

    });
  });

// Close dialog if user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === trailerContainer) {
        trailerContainer.classList.add('hidden');
    }
});