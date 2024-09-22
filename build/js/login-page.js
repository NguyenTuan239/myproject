
// Terms of use Hearder and Footer
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
const search = document.getElementById('search');
const accountButton = document.getElementById('account-button');
const account = document.getElementById('account');

// Xử lý sự kiện khi click vào icon tìm kiếm
searchIcon.addEventListener('click', function () {
    if (!searchIcon.classList.contains('toggled')) {
        this.classList.toggle("active"); 
    searchInput.classList.toggle("active");
    } else {
        searchIcon.classList.remove("toggled"); 
    searchInput.classList.remove("toggled"); 
    }
});
search.addEventListener('click', function () {
    searchIcon.classList.toggle("toggled"); 
    searchInput.classList.toggle("toggled"); 
    searchIcon.classList.remove("active");  
    searchInput.classList.remove("active");
    if (searchIcon.classList.contains('hidden')) {
        searchIcon.classList.remove("hidden");
    } else {
        searchIcon.classList.toggle("hidden");
    }
})

// Xử lý sự kiện khi searchIcon hoặc input mất focus
document.addEventListener('click', function(event) {
    if (!searchIcon.contains(event.target) && !searchInput.contains(event.target)) {
        searchIcon.classList.remove("active");
        searchInput.classList.remove("active");
    }
    if (!search.contains(event.target) && !searchInput.contains(event.target)) {
        searchIcon.classList.remove("toggled");
        searchInput.classList.remove("toggled");
        searchIcon.classList.add("hidden");
    }
});

accountButton.addEventListener('click', function(){
    account.classList.toggle('active');
})
// Xử lý sự kiện khi searchIcon hoặc input mất focus
document.addEventListener('click', function(event) {
    if (!account.contains(event.target) && !accountButton.contains(event.target)) {
        account.classList.remove("active");
    }
});

const hamburgerBtn = document.getElementById('menuButton')
const mobileMenu = document.getElementById('mobile-menu')
const toggleMenu = () => {
    mobileMenu.classList.toggle('toggled')
    hamburgerBtn.classList.toggle('toggle-btn');
    search.classList.toggle("toggled"); 
    accountButton.classList.toggle("toggled"); 
    if(search.classList.contains('hidden')){
        search.classList.remove("hidden"); 
    }else{
        search.classList.toggle("hidden"); 
    }
    if(accountButton.classList.contains('hidden')){
        accountButton.classList.remove("hidden"); 
    }else{
        accountButton.classList.toggle("hidden"); 
    }
}
hamburgerBtn.addEventListener('click', toggleMenu)

const exButton = document.getElementById('exButton')
const navMobile = document.getElementById('nav-mobile')
const navButton = document.getElementById('nav-button')
const navButtonCover = document.getElementById('nav-button-cover')

exButton.addEventListener('click', function () {
    navMobile.classList.remove('active')
    navButtonCover.classList.add('hidden')
})
navButton.addEventListener('click', function () {
    navMobile.classList.toggle('active')
    navButtonCover.classList.remove('hidden')
})
document.addEventListener('click', function(event) {
    if (!navButton.contains(event.target) && !navMobile.contains(event.target)) {
        navMobile.classList.remove("active");
        navButtonCover.classList.add('hidden')
    }
});

const navItem = [
    { nav: 'nav-1', li: 'li-1', plus: 'plus1' },
    { nav: 'nav-2', li: 'li-2', plus: 'plus2' },
    { nav: 'nav-3-1', li: 'li-3-1', plus: 'plus31' },
    { nav: 'nav-3', li: 'li-3', plus: 'plus3' },
    { nav: 'nav-4', li: 'li-4', plus: 'plus4' },
    { nav: 'nav-4-1', li: 'li-4-1', plus: 'plus41' },
    { nav: 'nav-4-2', li: 'li-4-2', plus: 'plus42' },
    { nav: 'nav-4-3', li: 'li-4-3', plus: 'plus43' },
    { nav: 'nav-5', li: 'li-5', plus: 'plus5' },
];

navItem.forEach(item => {
    const navElement = document.getElementById(item.nav);
    const liElement = document.getElementById(item.li);
    const plusButton = document.querySelector(`.${item.plus}`);

    navElement.addEventListener('click', () => {
        liElement.classList.toggle('active');
        plusButton.classList.toggle('active');
    });
});

const navItems = [
    { nav: 'web-nav-home', hover: 'home-hover' },
    { nav: 'web-nav-features', hover: 'features-hover' },
    { nav: 'web-nav-pages', hover: 'pages-hover' },
    { nav: 'web-nav-error-page', hover: 'error-page-hover' },
    { nav: 'web-nav-Blog', hover: 'Blog-hover' },
    { nav: 'web-nav-BlogGrid', hover: 'BlogGrid-hover' },
    { nav: 'web-nav-BlogSidebar', hover: 'BlogSidebar-hover' },
    { nav: 'web-nav-BlogSingle', hover: 'BlogSingle-hover' },
    { nav: 'web-nav-Shop', hover: 'Shop-hover' },
];

navItems.forEach(item => {
    const navElements = document.getElementById(item.nav);
    const hoverElement = document.getElementById(item.hover);
    let navHovered = true;
    let hoverHovered = true;

    navElements.addEventListener('mouseenter', function() {
        navHovered = true;
        hoverElement.classList.remove('hidden');
    });
    navElements.addEventListener('mouseleave', function() {
        navHovered = false;
        hideHoverIfBothNotHovered();
    });

    hoverElement.addEventListener('mouseleave', function() {
        hoverHovered = false;
        hideHoverIfBothNotHovered();
    });
    hoverElement.addEventListener('mouseenter', function() {
        hoverHovered = true;
        hoverElement.classList.remove('hidden');
    });

    function hideHoverIfBothNotHovered() {
        if (!navHovered && !hoverHovered) {
            hoverElement.classList.add('hidden');
        }
    }
});
// Ẩn nút backtotop Nếu người dùng cuộn hơn 100px từ đầu trang
window.onscroll = function() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 100) { 
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
};

const shareElements = document.querySelectorAll('.share-icon');
const shareHoverElements = document.querySelectorAll('.share-hover');
let shareHovered = true;
let shareHoverHovered = true;

shareElements.forEach(function(shareElement) {
    shareElement.addEventListener('mouseenter', function() {
        shareHovered = true;
        shareHoverElements.forEach(function(shareHover) {
            shareHover.classList.remove('hidden');
        });
    });

    shareElement.addEventListener('mouseleave', function() {
        shareHovered = false;
        hideHoverIfBothNotHover();
    });
});

shareHoverElements.forEach(function(shareHoverElement) {
    shareHoverElement.addEventListener('mouseenter', function() {
        shareHoverHovered = true;
        shareHoverElement.classList.remove('hidden');
    });

    shareHoverElement.addEventListener('mouseleave', function() {
        shareHoverHovered = false;
        hideHoverIfBothNotHover();
    });
});

function hideHoverIfBothNotHover() {
    if (!shareHovered && !shareHoverHovered) {
        shareHoverElements.forEach(function(shareHover) {
            shareHover.classList.add('hidden');
        });
    }
}

//Share icon Hover js
const shareElements2 = document.querySelectorAll('.share-icon1');
const shareHoverElements2 = document.querySelectorAll('.share-hover1');
let shareHovered2 = true;
let shareHoverHovered2 = true;

shareElements2.forEach(function(shareElement) {
    shareElement.addEventListener('mouseenter', function() {
        shareHovered2 = true;
        shareHoverElements2.forEach(function(shareHover) {
            shareHover.classList.remove('hidden');
            shareHover.classList.add('flex');
        });
    });

    shareElement.addEventListener('mouseleave', function() {
        shareHovered2 = false;
        hideHoverIfBothNotHover2();
    });
});

shareHoverElements2.forEach(function(shareHoverElement) {
    shareHoverElement.addEventListener('mouseenter', function() {
        shareHoverHovered2 = true;
        shareHoverElement.classList.remove('hidden');
        shareHoverElement.classList.add('flex');
    });

    shareHoverElement.addEventListener('mouseleave', function() {
        shareHoverHovered2 = false;
        hideHoverIfBothNotHover2();
    });
});

function hideHoverIfBothNotHover2() {
    if (!shareHovered2 && !shareHoverHovered2) {
        shareHoverElements2.forEach(function(shareHover) {
            shareHover.classList.add('hidden');
        });
    }
}

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
const detailMovieNav1 = document.getElementById('detail-movie-des-nav-1');
const detailMovieNav2 = document.getElementById('detail-movie-des-nav-2');
const detailMovieNav3 = document.getElementById('detail-movie-des-nav-3');
const detailMovieNav4 = document.getElementById('detail-movie-des-nav-4');
const detailMovieNav5 = document.getElementById('detail-movie-des-nav-5');
const detailMovieDes1 = document.getElementById('detail-movie-des-1');
const detailMovieDes2 = document.getElementById('detail-movie-des-2');
const detailMovieDes3 = document.getElementById('detail-movie-des-3');
const detailMovieDes4 = document.getElementById('detail-movie-des-4');
const detailMovieDes5 = document.getElementById('detail-movie-des-5');

detailMovieNav1.addEventListener('click', function() {
    this.classList.add('toggle');
    detailMovieNav2.classList.remove('toggle');
    detailMovieNav3.classList.remove('toggle');
    detailMovieDes1.classList.remove('hidden');
    detailMovieDes2.classList.add('hidden');
    detailMovieDes3.classList.add('hidden');
});

detailMovieNav2.addEventListener('click', function() {
    this.classList.add('toggle');
    detailMovieNav1.classList.remove('toggle');
    detailMovieNav3.classList.remove('toggle');
    detailMovieDes1.classList.add('hidden');
    detailMovieDes2.classList.remove('hidden');
    detailMovieDes3.classList.add('hidden');
});

detailMovieNav3.addEventListener('click', function() {
    this.classList.add('toggle');
    detailMovieNav1.classList.remove('toggle');
    detailMovieNav2.classList.remove('toggle');
    detailMovieDes1.classList.add('hidden');
    detailMovieDes2.classList.add('hidden');
    detailMovieDes3.classList.remove('hidden');
});
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

