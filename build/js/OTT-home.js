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

// Ẩn nút backtotop Nếu người dùng cuộn hơn 100px từ đầu trang
window.onscroll = function() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 100) { 
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
};