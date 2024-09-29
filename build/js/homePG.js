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
$(document).ready(function() {
  $('.movie-select').select2({
      width: 'resolve'
  });
  // Auto-focus on the search box when the dropdown opens
  $('.movie-select').on('select2:open', function() {
      setTimeout(function() {
          document.querySelector('.select2-search__field').focus();
      }, 1);
  });
  // Change background color on hover
  $(document).on('mouseenter', '.select2-results__option--selected', function() {
      $(this).css({
          'background-color': 'red', // Change to red on hover
          'color': 'white' // Ensure text color is white for contrast
      });
  }).on('mouseleave', '.select2-results__option--selected', function() {
      $(this).css({
          'background-color': 'black', // Revert back to black when not hovered
          'color': 'white' // Ensure text color remains white
      });
  });
});
const HomePGSec8Movies = [
    { nav: '.HomePG-sec8-nav-1', des: '.HomePG-sec8-nav-pt1' },
    { nav: '.HomePG-sec8-nav-2', des: '.HomePG-sec8-nav-pt2' },
    { nav: '.HomePG-sec8-nav-3', des: '.HomePG-sec8-nav-pt3' },
    { nav: '.HomePG-sec8-nav-4', des: '.HomePG-sec8-nav-pt4' },
];

HomePGSec8Movies.forEach(({ nav, des }, index) => {
    document.querySelectorAll(nav).forEach((na) => {
        na.addEventListener('click', () => {
            HomePGSec8Movies.forEach(({ nav: otherNav, des: otherDes }, otherIndex) => {
                const isActive = index === otherIndex;
                document.querySelectorAll(otherNav).forEach((otherNa) => {
                    otherNa.classList.toggle('toggle', isActive);
                })
                document.querySelectorAll(otherDes).forEach((otherDe) => {
                    otherDe.classList.toggle('hidden', !isActive);
                })
            });
        });
    })
});