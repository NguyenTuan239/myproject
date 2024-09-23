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
/* Detail movie page js */
const detailMovies = [
    { nav: 'detail-movie-des-nav-1', des: 'detail-movie-des-1' },
    { nav: 'detail-movie-des-nav-2', des: 'detail-movie-des-2' },
    { nav: 'detail-movie-des-nav-3', des: 'detail-movie-des-3' },
];

detailMovies.forEach(({ nav, des }, index) => {
    document.getElementById(nav).addEventListener('click', function() {
        detailMovies.forEach(({ nav: otherNav, des: otherDes }, otherIndex) => {
            const isActive = index === otherIndex;
            document.getElementById(otherNav).classList.toggle('toggle', isActive);
            document.getElementById(otherDes).classList.toggle('hidden', !isActive);
        });
    });
});

const detailMovieNav4 = document.getElementById('detail-movie-des-nav-4');
const detailMovieNav5 = document.getElementById('detail-movie-des-nav-5');
const detailMovieDes4 = document.getElementById('detail-movie-des-4');
const detailMovieDes5 = document.getElementById('detail-movie-des-5');

detailMovieNav4.addEventListener('click', function() {
    this.classList.add('toggle');
    detailMovieNav5.classList.remove('toggle');
    detailMovieDes5.classList.add('hidden');
    detailMovieDes4.classList.remove('hidden');
});
detailMovieNav5.addEventListener('click', function() {
    this.classList.add('toggle');
    detailMovieNav4.classList.remove('toggle');
    detailMovieDes4.classList.add('hidden');
    detailMovieDes5.classList.remove('hidden');
});

