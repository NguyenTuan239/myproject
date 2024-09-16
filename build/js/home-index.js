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

// Chức năng của tab cài đặt
const settingIcon = document.getElementById('setting-icon');
const settingBar = document.getElementById('setting-bar');
const settingBarEx = document.getElementById('setting-bar-exit');
const rlt = document.getElementById('rtl');
const ltr = document.getElementById('ltr');

settingIcon.addEventListener('click',function(){
    if(!settingBar.classList.contains('reve')){
        settingBar.classList.add('active');
    }else{
        settingBar.classList.remove('reve')
    }
});
settingBarEx.addEventListener('click',function(){
    if(settingBar.classList.contains('reactive')){
        settingBar.classList.remove('active')
    }else{
        settingBar.classList.add('reve')
    }
})
document.addEventListener('click', function(event) {
    if (!settingBar.contains(event.target) && !settingIcon.contains(event.target)) {
        if(settingBar.classList.contains('reactive')){
            settingBar.classList.remove('active')
        }else{
            settingBar.classList.add('reve')
        }
    }
});
// Chuyển sang chế độ RTL
rlt.addEventListener('click', function() {
    settingBar.classList.remove('right-0');
    settingBar.classList.add('left-0');
    settingBar.classList.remove('reactive');
    settingIcon.classList.remove('right-0');
    settingIcon.classList.add('left-0');
    this.classList.add('bg-black', 'text-white');
    this.classList.remove('text-zinc-700');
    ltr.classList.remove('bg-black', 'text-white');
    ltr.classList.add('text-zinc-700');
});

// Chuyển sang chế độ LTR
ltr.addEventListener('click', function() {
    settingBar.classList.remove('left-0');
    settingBar.classList.add('right-0');
    settingBar.classList.add('reactive');
    settingIcon.classList.remove('left-0');
    settingIcon.classList.add('right-0');
    this.classList.add('bg-black', 'text-white');
    this.classList.remove('text-zinc-700');
    rlt.classList.remove('bg-black', 'text-white');
    rlt.classList.add('text-zinc-700');
});
const hots = document.getElementById('hots');
const netf = document.getElementById('netf');
const pri = document.getElementById('pri');
const hul = document.getElementById('hul');
let isNetfClicked = true;
let isHotsClicked = false;
let isPriClicked = false;
let isHulClicked = false;
const netflixText = document.querySelectorAll('.netflix');
const netflixBG = document.querySelectorAll('.netflix-bg');
const hoverBg = document.querySelectorAll('.hover-bg-red');
const hoverText = document.querySelectorAll('.hover-red');
const hoverWebnav = document.querySelectorAll('.web-nav-li');
const logo = document.querySelectorAll('.logo');

hots.addEventListener('click', function () {
    isNetfClicked = false;
    isHotsClicked = true;
    isPriClicked = false;
    isHulClicked = false;
    netflixText.forEach(function (netflix) {
        netflix.classList.add('hotstar');
        netflix.classList.remove('netflix','prime','hulu');
    });
    if (isSec8Season1Clicked) {
        sec8Season1.classList.add('hotstar');
        sec8Season1.classList.remove('red-text','prime','hulu');
    }
    if (isSec8Season2Clicked) {
        sec8Season2.classList.add('hotstar');
        sec8Season2.classList.remove('red-text','prime','hulu');
    }
    if (isSec8Season3Clicked) {
        sec8Season3.classList.add('hotstar');
        sec8Season3.classList.remove('red-text','prime','hulu');
    }
    if (isSec8Season1S2Clicked) {
        sec8Season1S2.classList.add('hotstar');
        sec8Season1S2.classList.remove('red-text','prime','hulu');
    }
    if (isSec8Season2S2Clicked) {
        sec8Season2S2.classList.add('hotstar');
        sec8Season2S2.classList.remove('red-text','prime','hulu');
    }
    if (isSec8Season3S2Clicked) {
        sec8Season3S2.classList.add('hotstar');
        sec8Season3S2.classList.remove('red-text','prime','hulu');
    }
    if (isSec8Season1S3Clicked) {
        sec8Season1S3.classList.add('hotstar');
        sec8Season1S3.classList.remove('red-text','prime','hulu');
    }
    if (isSec8Season2S3Clicked) {
        sec8Season2S3.classList.add('hotstar');
        sec8Season2S3.classList.remove('red-text','prime','hulu');
    }
    if (isSec8Season3S3Clicked) {
        sec8Season3S3.classList.add('hotstar');
        sec8Season3S3.classList.remove('red-text','prime','hulu');
    }
    netflixBG.forEach(function (netflix) {
        netflix.classList.add('hotstar-bg');
        netflix.classList.remove('netflix-bg','prime-bg','hulu-bg');
    });
    hoverBg.forEach(function (icon) {
        icon.classList.remove('hover-bg-red','hover-bg-cyan','hover-bg-green');
        icon.classList.add('hover-bg-blue');
    });
    hoverText.forEach(function (link) {
        link.classList.remove('hover-red','hover-cyan','hover-green');
        link.classList.add('hover-blue');
    });
    hoverWebnav.forEach(function (link) {
        link.classList.remove('web-nav-li-red','web-nav-li-cyan','web-nav-li-green');
        link.classList.add('web-nav-li-blue');
    });
    logo.forEach(function (link) {
        link.classList.remove('logo-cyan','logo-green');
        link.classList.add('logo-blue');
    });
    this.classList.add('bg-black', 'text-white');
    this.classList.remove('text-zinc-700');
    netf.classList.remove('bg-black', 'text-white');
    netf.classList.add('text-zinc-700');
    pri.classList.remove('bg-black', 'text-white');
    pri.classList.add('text-zinc-700');
    hul.classList.remove('bg-black', 'text-white');
    hul.classList.add('text-zinc-700');
});
netf.addEventListener('click', function () {
    isNetfClicked = true;
    isHotsClicked = false;
    isPriClicked = false;
    isHulClicked = false;
    netflixText.forEach(function (netflix) {
        netflix.classList.add('netflix');
        netflix.classList.remove('hotstar','prime','hulu');
    });
    if (isSec8Season1Clicked) {
        sec8Season1.classList.add('red-text');
        sec8Season1.classList.remove('hotstar','prime','hulu');
    }
    if (isSec8Season2Clicked) {
        sec8Season2.classList.add('red-text');
        sec8Season2.classList.remove('hotstar','prime','hulu');
    }
    if (isSec8Season3Clicked) {
        sec8Season3.classList.add('red-text');
        sec8Season3.classList.remove('hotstar','prime','hulu');
    }
    if (isSec8Season1S2Clicked) {
        sec8Season1S2.classList.add('red-text');
        sec8Season1S2.classList.remove('hotstar','prime','hulu');
    }
    if (isSec8Season2S2Clicked) {
        sec8Season2S2.classList.add('red-text');
        sec8Season2S2.classList.remove('hotstar','prime','hulu');
    }
    if (isSec8Season3S2Clicked) {
        sec8Season3S2.classList.add('red-text');
        sec8Season3S2.classList.remove('hotstar','prime','hulu');
    }
    if (isSec8Season1S3Clicked) {
        sec8Season1S3.classList.add('red-text');
        sec8Season1S3.classList.remove('hotstar','prime','hulu');
    }
    if (isSec8Season2S3Clicked) {
        sec8Season2S3.classList.add('red-text');
        sec8Season2S3.classList.remove('hotstar','prime','hulu');
    }
    if (isSec8Season3S3Clicked) {
        sec8Season3S3.classList.add('red-text');
        sec8Season3S3.classList.remove('hotstar','prime','hulu');
    }
    netflixBG.forEach(function (netflix) {
        netflix.classList.add('netflix-bg');
        netflix.classList.remove('hotstar-bg','prime-bg','hulu-bg');
    });
    hoverBg.forEach(function (icon) {
        icon.classList.remove('hover-bg-blue','hover-bg-cyan','hover-bg-green');
        icon.classList.add('hover-bg-red');
    });
    hoverText.forEach(function (link) {
        link.classList.remove('hover-blue','hover-cyan','hover-green');
        link.classList.add('hover-red');
    });
    hoverWebnav.forEach(function (link) {
        link.classList.remove('web-nav-li-blue','web-nav-li-cyan','web-nav-li-green');
        link.classList.add('web-nav-li-red');
    });
    logo.forEach(function (link) {
        link.classList.remove('logo-cyan','logo-green','logo-blue');
    });
    this.classList.add('bg-black', 'text-white');
    this.classList.remove('text-zinc-700');
    hots.classList.remove('bg-black', 'text-white');
    hots.classList.add('text-zinc-700');
    pri.classList.remove('bg-black', 'text-white');
    pri.classList.add('text-zinc-700');
    hul.classList.remove('bg-black', 'text-white');
    hul.classList.add('text-zinc-700');
});
pri.addEventListener('click', function () {
    isNetfClicked = false;
    isHotsClicked = false;
    isPriClicked = true;
    isHulClicked = false;
    netflixText.forEach(function (netflix) {
        netflix.classList.add('prime');
        netflix.classList.remove('hotstar','netflix','hulu');
    });
    if (isSec8Season1Clicked) {
        sec8Season1.classList.add('prime');
        sec8Season1.classList.remove('hotstar','red-text','hulu');
    }
    if (isSec8Season2Clicked) {
        sec8Season2.classList.add('prime');
        sec8Season2.classList.remove('hotstar','red-text','hulu');
    }
    if (isSec8Season3Clicked) {
        sec8Season3.classList.add('prime');
        sec8Season3.classList.remove('hotstar','red-text','hulu');
    }
    if (isSec8Season1S2Clicked) {
        sec8Season1S2.classList.add('prime');
        sec8Season1S2.classList.remove('hotstar','red-text','hulu');
    }
    if (isSec8Season2S2Clicked) {
        sec8Season2S2.classList.add('prime');
        sec8Season2S2.classList.remove('hotstar','red-text','hulu');
    }
    if (isSec8Season3S2Clicked) {
        sec8Season3S2.classList.add('prime');
        sec8Season3S2.classList.remove('hotstar','red-text','hulu');
    }
    if (isSec8Season1S3Clicked) {
        sec8Season1S3.classList.add('prime');
        sec8Season1S3.classList.remove('hotstar','red-text','hulu');
    }
    if (isSec8Season2S3Clicked) {
        sec8Season2S3.classList.add('prime');
        sec8Season2S3.classList.remove('hotstar','red-text','hulu');
    }
    if (isSec8Season3S3Clicked) {
        sec8Season3S3.classList.add('prime');
        sec8Season3S3.classList.remove('hotstar','red-text','hulu');
    }
    netflixBG.forEach(function (netflix) {
        netflix.classList.add('prime-bg');
        netflix.classList.remove('hotstar-bg','netflix-bg','hulu-bg');
    });
    hoverBg.forEach(function (icon) {
        icon.classList.remove('hover-bg-blue','hover-bg-red','hover-bg-green');
        icon.classList.add('hover-bg-cyan');
    });
    hoverText.forEach(function (link) {
        link.classList.remove('hover-blue','hover-red','hover-green');
        link.classList.add('hover-cyan');
    });
    hoverWebnav.forEach(function (link) {
        link.classList.remove('web-nav-li-blue','web-nav-li-red','web-nav-li-green');
        link.classList.add('web-nav-li-cyan');
    });
    logo.forEach(function (link) {
        link.classList.remove('logo-green','logo-blue');
        link.classList.add('logo-cyan');
    });
    this.classList.add('bg-black', 'text-white');
    this.classList.remove('text-zinc-700');
    hots.classList.remove('bg-black', 'text-white');
    hots.classList.add('text-zinc-700');
    netf.classList.remove('bg-black', 'text-white');
    netf.classList.add('text-zinc-700');
    hul.classList.remove('bg-black', 'text-white');
    hul.classList.add('text-zinc-700');
});
hul.addEventListener('click', function () {
    isNetfClicked = false;
    isHotsClicked = false;
    isPriClicked = false;
    isHulClicked = true;
    netflixText.forEach(function (netflix) {
        netflix.classList.add('hulu');
        netflix.classList.remove('hotstar','netflix','prime');
    });
    if (isSec8Season1Clicked) {
        sec8Season1.classList.add('hulu');
        sec8Season1.classList.remove('hotstar','red-text','prime');
    }
    if (isSec8Season2Clicked) {
        sec8Season2.classList.add('hulu');
        sec8Season2.classList.remove('hotstar','red-text','prime');
    }
    if (isSec8Season3Clicked) {
        sec8Season3.classList.add('hulu');
        sec8Season3.classList.remove('hotstar','red-text','prime');
    }
    if (isSec8Season1S2Clicked) {
        sec8Season1S2.classList.add('hulu');
        sec8Season1S2.classList.remove('hotstar','red-text','prime');
    }
    if (isSec8Season2S2Clicked) {
        sec8Season2S2.classList.add('hulu');
        sec8Season2S2.classList.remove('hotstar','red-text','prime');
    }
    if (isSec8Season3S2Clicked) {
        sec8Season3S2.classList.add('hulu');
        sec8Season3S2.classList.remove('hotstar','red-text','prime');
    }
    if (isSec8Season1S3Clicked) {
        sec8Season1S3.classList.add('hulu');
        sec8Season1S3.classList.remove('hotstar','red-text','prime');
    }
    if (isSec8Season2S3Clicked) {
        sec8Season2S3.classList.add('hulu');
        sec8Season2S3.classList.remove('hotstar','red-text','prime');
    }
    if (isSec8Season3S3Clicked) {
        sec8Season3S3.classList.add('hulu');
        sec8Season3S3.classList.remove('hotstar','red-text','prime');
    }
    netflixBG.forEach(function (netflix) {
        netflix.classList.add('hulu-bg');
        netflix.classList.remove('hotstar-bg','netflix-bg','prime-bg');
    });
    hoverBg.forEach(function (icon) {
        icon.classList.remove('hover-bg-blue','hover-bg-red','hover-bg-cyan');
        icon.classList.add('hover-bg-green');
    });
    hoverText.forEach(function (link) {
        link.classList.remove('hover-blue','hover-red','hover-cyan');
        link.classList.add('hover-green');
    });
    hoverWebnav.forEach(function (link) {
        link.classList.remove('web-nav-li-blue','web-nav-li-red','web-nav-li-cyan');
        link.classList.add('web-nav-li-green');
    });
    logo.forEach(function (link) {
        link.classList.remove('logo-cyan','logo-blue');
        link.classList.add('logo-green');
    });
    this.classList.add('bg-black', 'text-white');
    this.classList.remove('text-zinc-700');
    hots.classList.remove('bg-black', 'text-white');
    hots.classList.add('text-zinc-700');
    netf.classList.remove('bg-black', 'text-white');
    netf.classList.add('text-zinc-700');
    pri.classList.remove('bg-black', 'text-white');
    pri.classList.add('text-zinc-700');
});


document.addEventListener('DOMContentLoaded', function() {
    var resetButton = document.getElementById('reset');
    var dialog = document.getElementById('reset-dialog');
    var confirmButton = document.getElementById('confirm-reset');
    var cancelButton = document.getElementById('cancel-reset');

    // Show dialog
    resetButton.addEventListener('click', function(event) {
        event.preventDefault();
        dialog.style.display = 'block';
    });

    // Confirm reset and reload page
    confirmButton.addEventListener('click', function() {
        dialog.style.display = 'none';
        location.reload();
    });

    // Cancel reset
    cancelButton.addEventListener('click', function() {
        dialog.style.display = 'none';
    });

    // Close dialog if user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === dialog) {
            dialog.style.display = 'none';
        }
    });
});


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
// Ẩn nút backtotop Nếu người dùng cuộn hơn 100px từ đầu trang
window.onscroll = function() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 100) { 
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
};
