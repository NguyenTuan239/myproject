/* main section2 js*/
const swiper = new Swiper('.slider-wrapper', {
    loop: false,
    speed: 1000,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView:2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView:3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView:5,
            spaceBetween: 30,
        }
    }
  });
  /* main section3 js*/
const swiper2 = new Swiper('.slider-wrapper2', {
    loop: false,
    speed: 1000,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView:2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView:3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView:6,
            spaceBetween: 50,
        }
    }
});
/* main section4 css*/
const swiper3 = new Swiper('.slider-wrapper3', {
    loop: true,
    speed: 1000,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView:2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView:3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView:6,
            spaceBetween: 0,
        }
    }
});
/* main section5 js*/
// Initialize mySwiper2
var swiper4 = new Swiper(".mySwiper2", {
    direction: "vertical",
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    navigation: {
        nextEl: '.sec5-next',
        prevEl: '.sec5-prev',
    },
});

// Initialize mySwiper
var swiper5 = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    watchSlidesProgress: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
// Đồng bộ hóa mySwiper2 với mySwiper khi slide của mySwiper thay đổi
swiper5.on('slideChangeTransitionStart', function () {
    swiper4.slideToLoop(swiper5.realIndex); // Chuyển slide mySwiper2 dựa trên realIndex của mySwiper
});

// Đồng bộ hóa mySwiper khi slide của mySwiper2 thay đổi
swiper4.on('slideChangeTransitionStart', function () {
    swiper5.slideToLoop(swiper4.realIndex); // Chuyển slide mySwiper dựa trên realIndex của mySwiper2
});

// Lắng nghe sự kiện click trên mỗi slide của mySwiper2
swiper4.on('click', function (swiper) {
    let clickedSlide = swiper.clickedSlide; // Lấy element của slide đã click
    if (clickedSlide) {
        let realIndex = clickedSlide.getAttribute('data-swiper-slide-index'); // Lấy realIndex từ thuộc tính của slide
        if (realIndex !== undefined) {
            swiper4.slideToLoop(realIndex); // Chuyển slide có chỉ số thực lên đầu tiên
        }
    }
});
// Quản lý sec5-red-line trên slide đầu tiên của mySwiper2
swiper4.on('slideChangeTransitionStart', function (swiper) {
    // Ẩn tất cả các sec5-red-line trên các slide
    document.querySelectorAll('.swiper-slide .sec5-red-line').forEach(function(line) {
        line.style.display = 'none';
    });

    // Chỉ hiện sec5-red-line trên slide đầu tiên
    const firstVisibleSlide = swiper.slides[swiper.activeIndex];
    const redLine = firstVisibleSlide.querySelector('.sec5-red-line');
    if (redLine) {
        redLine.style.display = 'block'; // Hiện sec5-red-line trên slide đầu tiên
    }
});

  /* main section6 js*/
const swiper6 = new Swiper('.mySwiper3', {
    loop: true,
    speed: 800,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView:2,
            spaceBetween: 15,
        }, 
        768: {
            slidesPerView:4,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView:11,
            spaceBetween: 20,
        }
    }
});

 /* main section8 js*/
var swiper8 = new Swiper(".mySwiper4", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const sec8Season1 = document.getElementById("sec8-season1");
const sec8Season2 = document.getElementById("sec8-season2");
const sec8Season3 = document.getElementById("sec8-season3");
let isSec8Season1Clicked = true;
let isSec8Season2Clicked = false;
let isSec8Season3Clicked = false;
const sec8Season1Content = document.getElementById("sec8-season1-content");
const sec8Season2Content = document.getElementById("sec8-season2-content");
const sec8Season3Content = document.getElementById("sec8-season3-content");

sec8Season1.addEventListener('click', function () {
    isSec8Season1Clicked = true;
    isSec8Season2Clicked = false;
    isSec8Season3Clicked = false;
    sec8Season1Content.classList.remove('hidden');
    sec8Season2Content.classList.add('hidden');
    sec8Season3Content.classList.add('hidden');
    if (isNetfClicked) {
        sec8Season1.classList.add('red-text');
        sec8Season1.classList.remove('hotstar','prime','hulu');
        sec8Season2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHotsClicked) {
        sec8Season1.classList.add('hotstar');
        sec8Season1.classList.remove('red-text','prime','hulu');
        sec8Season2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isPriClicked) {
        sec8Season1.classList.add('prime');
        sec8Season1.classList.remove('red-text','hotstar','hulu');
        sec8Season2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHulClicked) {
        sec8Season1.classList.add('hulu');
        sec8Season1.classList.remove('red-text','hotstar','prime');
        sec8Season2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3.classList.remove('hotstar','red-text','prime','hulu');
    }
})
sec8Season2.addEventListener('click', function () {
    isSec8Season1Clicked = false;
    isSec8Season2Clicked = true;
    isSec8Season3Clicked = false;
    sec8Season2Content.classList.remove('hidden');
    sec8Season1Content.classList.add('hidden');
    sec8Season3Content.classList.add('hidden');
    if (isNetfClicked) {
        sec8Season2.classList.add('red-text');
        sec8Season2.classList.remove('hotstar','prime','hulu');
        sec8Season1.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHotsClicked) {
        sec8Season2.classList.add('hotstar');
        sec8Season2.classList.remove('red-text','prime','hulu');
        sec8Season1.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isPriClicked) {
        sec8Season2.classList.add('prime');
        sec8Season2.classList.remove('red-text','hotstar','hulu');
        sec8Season1.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHulClicked) {
        sec8Season2.classList.add('hulu');
        sec8Season2.classList.remove('red-text','hotstar','prime');
        sec8Season1.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3.classList.remove('hotstar','red-text','prime','hulu');
    }
})
sec8Season3.addEventListener('click', function () {
    isSec8Season1Clicked = false;
    isSec8Season2Clicked = false;
    isSec8Season3Clicked = true;
    sec8Season3Content.classList.remove('hidden');
    sec8Season1Content.classList.add('hidden');
    sec8Season2Content.classList.add('hidden');
    if (isNetfClicked) {
        sec8Season3.classList.add('red-text');
        sec8Season3.classList.remove('hotstar','prime','hulu');
        sec8Season2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season1.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHotsClicked) {
        sec8Season3.classList.add('hotstar');
        sec8Season3.classList.remove('red-text','prime','hulu');
        sec8Season2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season1.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isPriClicked) {
        sec8Season3.classList.add('prime');
        sec8Season3.classList.remove('red-text','hotstar','hulu');
        sec8Season2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season1.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHulClicked) {
        sec8Season3.classList.add('hulu');
        sec8Season3.classList.remove('red-text','hotstar','prime');
        sec8Season2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season1.classList.remove('hotstar','red-text','prime','hulu');
    }
})
const sec8Season1S2 = document.getElementById("sec8-season1-s2");
const sec8Season2S2 = document.getElementById("sec8-season2-s2");
const sec8Season3S2 = document.getElementById("sec8-season3-s2");
let isSec8Season1S2Clicked = true;
let isSec8Season2S2Clicked = false;
let isSec8Season3S2Clicked = false;
const sec8Season1ContentS2 = document.getElementById("sec8-season1-content-s2");
const sec8Season2ContentS2 = document.getElementById("sec8-season2-content-s2");
const sec8Season3ContentS2 = document.getElementById("sec8-season3-content-s2");

sec8Season1S2.addEventListener('click', function () {
    isSec8Season1S2Clicked = true;
    isSec8Season2S2Clicked = false;
    isSec8Season3S2Clicked = false;
    sec8Season1ContentS2.classList.remove('hidden');
    sec8Season2ContentS2.classList.add('hidden');
    sec8Season3ContentS2.classList.add('hidden');
    if (isNetfClicked) {
        sec8Season1S2.classList.add('red-text');
        sec8Season1S2.classList.remove('hotstar','prime','hulu');
        sec8Season2S2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S2.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHotsClicked) {
        sec8Season1S2.classList.add('hotstar');
        sec8Season1S2.classList.remove('red-text','prime','hulu');
        sec8Season2S2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S2.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isPriClicked) {
        sec8Season1S2.classList.add('prime');
        sec8Season1S2.classList.remove('red-text','hotstar','hulu');
        sec8Season2S2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S2.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHulClicked) {
        sec8Season1S2.classList.add('hulu');
        sec8Season1S2.classList.remove('red-text','hotstar','prime');
        sec8Season2S2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S2.classList.remove('hotstar','red-text','prime','hulu');
    }
})
sec8Season2S2.addEventListener('click', function () {
    isSec8Season1S2Clicked = false;
    isSec8Season2S2Clicked = true;
    isSec8Season3S2Clicked = false;
    sec8Season2ContentS2.classList.remove('hidden');
    sec8Season1ContentS2.classList.add('hidden');
    sec8Season3ContentS2.classList.add('hidden');
    if (isNetfClicked) {
        sec8Season2S2.classList.add('red-text');
        sec8Season2S2.classList.remove('hotstar','prime','hulu');
        sec8Season1S2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S2.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHotsClicked) {
        sec8Season2S2.classList.add('hotstar');
        sec8Season2S2.classList.remove('red-text','prime','hulu');
        sec8Season1S2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S2.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isPriClicked) {
        sec8Season2S2.classList.add('prime');
        sec8Season2S2.classList.remove('red-text','hotstar','hulu');
        sec8Season1S2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S2.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHulClicked) {
        sec8Season2S2.classList.add('hulu');
        sec8Season2S2.classList.remove('red-text','hotstar','prime');
        sec8Season1S2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S2.classList.remove('hotstar','red-text','prime','hulu');
    }
})
sec8Season3S2.addEventListener('click', function () {
    isSec8Season1S2Clicked = false;
    isSec8Season2S2Clicked = false;
    isSec8Season3S2Clicked = true;
    sec8Season3ContentS2.classList.remove('hidden');
    sec8Season1ContentS2.classList.add('hidden');
    sec8Season2ContentS2.classList.add('hidden');
    if (isNetfClicked) {
        sec8Season3S2.classList.add('red-text');
        sec8Season3S2.classList.remove('hotstar','prime','hulu');
        sec8Season2S2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season1S2.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHotsClicked) {
        sec8Season3S2.classList.add('hotstar');
        sec8Season3S2.classList.remove('red-text','prime','hulu');
        sec8Season2S2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season1S2.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isPriClicked) {
        sec8Season3S2.classList.add('prime');
        sec8Season3S2.classList.remove('red-text','hotstar','hulu');
        sec8Season2S2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season1S2.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHulClicked) {
        sec8Season3S2.classList.add('hulu');
        sec8Season3S2.classList.remove('red-text','hotstar','prime');
        sec8Season2S2.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season1S2.classList.remove('hotstar','red-text','prime','hulu');
    }
})
const sec8Season1S3 = document.getElementById("sec8-season1-s3");
const sec8Season2S3 = document.getElementById("sec8-season2-s3");
const sec8Season3S3 = document.getElementById("sec8-season3-s3");
let isSec8Season1S3Clicked = true;
let isSec8Season2S3Clicked = false;
let isSec8Season3S3Clicked = false;
const sec8Season1ContentS3 = document.getElementById("sec8-season1-content-s3");
const sec8Season2ContentS3 = document.getElementById("sec8-season2-content-s3");
const sec8Season3ContentS3 = document.getElementById("sec8-season3-content-s3");

sec8Season1S3.addEventListener('click', function () {
    isSec8Season1S3Clicked = true;
    isSec8Season2S3Clicked = false;
    isSec8Season3S3Clicked = false;
    sec8Season1ContentS3.classList.remove('hidden');
    sec8Season2ContentS3.classList.add('hidden');
    sec8Season3ContentS3.classList.add('hidden');
    if (isNetfClicked) {
        sec8Season1S3.classList.add('red-text');
        sec8Season1S3.classList.remove('hotstar','prime','hulu');
        sec8Season2S3.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHotsClicked) {
        sec8Season1S3.classList.add('hotstar');
        sec8Season1S3.classList.remove('red-text','prime','hulu');
        sec8Season2S3.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isPriClicked) {
        sec8Season1S3.classList.add('prime');
        sec8Season1S3.classList.remove('red-text','hotstar','hulu');
        sec8Season2S3.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHulClicked) {
        sec8Season1S3.classList.add('hulu');
        sec8Season1S3.classList.remove('red-text','hotstar','prime');
        sec8Season2S3.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S3.classList.remove('hotstar','red-text','prime','hulu');
    }
})
sec8Season2S3.addEventListener('click', function () {
    isSec8Season1S2Clicked = false;
    isSec8Season2S2Clicked = true;
    isSec8Season3S2Clicked = false;
    sec8Season2ContentS3.classList.remove('hidden');
    sec8Season1ContentS3.classList.add('hidden');
    sec8Season3ContentS3.classList.add('hidden');
    if (isNetfClicked) {
        sec8Season2S3.classList.add('red-text');
        sec8Season2S3.classList.remove('hotstar','prime','hulu');
        sec8Season1S3.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHotsClicked) {
        sec8Season2S3.classList.add('hotstar');
        sec8Season2S3.classList.remove('red-text','prime','hulu');
        sec8Season1S3.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isPriClicked) {
        sec8Season2S3.classList.add('prime');
        sec8Season2S3.classList.remove('red-text','hotstar','hulu');
        sec8Season1S3.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHulClicked) {
        sec8Season2S3.classList.add('hulu');
        sec8Season2S3.classList.remove('red-text','hotstar','prime');
        sec8Season1S3.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season3S3.classList.remove('hotstar','red-text','prime','hulu');
    }
})
sec8Season3S3.addEventListener('click', function () {
    isSec8Season1S3Clicked = false;
    isSec8Season2S3Clicked = false;
    isSec8Season3S3Clicked = true;
    sec8Season3ContentS3.classList.remove('hidden');
    sec8Season1ContentS3.classList.add('hidden');
    sec8Season2ContentS3.classList.add('hidden');
    if (isNetfClicked) {
        sec8Season3S3.classList.add('red-text');
        sec8Season3S3.classList.remove('hotstar','prime','hulu');
        sec8Season2S3.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season1S3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHotsClicked) {
        sec8Season3S3.classList.add('hotstar');
        sec8Season3S3.classList.remove('red-text','prime','hulu');
        sec8Season2S3.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season1S3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isPriClicked) {
        sec8Season3S3.classList.add('prime');
        sec8Season3S3.classList.remove('red-text','hotstar','hulu');
        sec8Season2S3.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season1S3.classList.remove('hotstar','red-text','prime','hulu');
    }
    if (isHulClicked) {
        sec8Season3S3.classList.add('hulu');
        sec8Season3S3.classList.remove('red-text','hotstar','prime');
        sec8Season2S3.classList.remove('hotstar','red-text','prime','hulu');
        sec8Season1S3.classList.remove('hotstar','red-text','prime','hulu');
    }
})

/* main section 9 css*/
const swiper9 = new Swiper('.mySwiper5', {
    loop: true,
    speed: 1000,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView:2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView:3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView:6,
            spaceBetween: 20,
        }
    }
});