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
/* main section 10 js*/
const swiper10 = new Swiper('.slider-wrapper4', {
    loop: false,
    speed: 1000,
    breakpoints: {
        0: {
            slidesPerView:1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView:2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView:3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView:5,
            spaceBetween: 20,
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
    touchRatio: 0.2,
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

/* HomePG main section 1 css*/
const swiper11 = new Swiper('.mySwiper11', {
    loop: true,
    speed: 500,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


/* Home mian section8 */
const swiper12 = new Swiper('.mySwiper12', {
    loop: true,
    speed: 700,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    slidesPerView: 5,
    spaceBetween: 20,
});

const swiper14 = new Swiper('.mySwiper14', {
    loop: true,
    speed: 700,
    touchRatio: 0.2,
    slidesPerView: 3,
    spaceBetween: 20,
    slideToClickedSlide: true,
});
const swiper13 = new Swiper(".mySwiper13", {
    effect: 'fade',
    loop: true,
    speed: 700,
    followFinger: false,
    simulateTouch: false,
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Đồng bộ hóa mySwiper2 với mySwiper khi slide của mySwiper thay đổi
swiper13.on('slideChangeTransitionStart', function () {
    swiper12.slideToLoop(swiper13.realIndex); 
});

// Đồng bộ hóa mySwiper khi slide của mySwiper2 thay đổi
swiper12.on('slideChangeTransitionStart', function () {
    swiper13.slideToLoop(swiper12.realIndex); 
});
// Đồng bộ hóa mySwiper2 với mySwiper khi slide của mySwiper thay đổi
swiper13.on('slideChangeTransitionStart', function () {
    swiper14.slideToLoop(swiper13.realIndex); 
});

// Đồng bộ hóa mySwiper khi slide của mySwiper2 thay đổi
swiper14.on('slideChangeTransitionStart', function () {
    swiper13.slideToLoop(swiper14.realIndex); 
});


// Hàm xử lý sự kiện slide
function handleSlide14Change(swiper) {
    document.querySelectorAll('.swiper-slide .HomePG-trending-img14').forEach(function(img) {
        img.classList.remove('scale-up');
    });
    swiper.slides.forEach(function (slide) {
        slide.classList.remove('active');
    });

    const activeIndex = swiper.activeIndex;
    const middleSlideIndex = activeIndex +1;

    // Áp dụng class scale-up để phóng to slide giữa
    const middleSlide = swiper.slides[middleSlideIndex];
    if (middleSlide) {
        middleSlide.querySelector('.HomePG-trending-img14').classList.add('scale-up');
        middleSlide.classList.add('active');
    }
}
// Hàm xử lý sự kiện slide
function handleSlide12Change(swiper) {
    document.querySelectorAll('.swiper-slide .HomePG-trending-img12').forEach(function(img) {
        img.classList.remove('scale-up');
    });
    swiper.slides.forEach(function (slide) {
        slide.classList.remove('active');
    });

    const activeIndex = swiper.activeIndex;
    const middleSlideIndex = activeIndex + 2;

    // Áp dụng class scale-up để phóng to slide giữa
    const middleSlide = swiper.slides[middleSlideIndex];
    if (middleSlide) {
        middleSlide.querySelector('.HomePG-trending-img12').classList.add('scale-up');
        middleSlide.classList.add('active');
    }
}
swiper12.on('slideChangeTransitionStart', function (swiper) {
    handleSlide12Change(swiper); 
});
swiper14.on('slideChangeTransitionStart', function (swiper) {
    handleSlide14Change(swiper); 
});

const swiper15 = new Swiper('.mySwiper15', {
    speed: 1000,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    breakpoints: {
        0: {
            slidesPerView:2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView:3,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView:4,
            spaceBetween: 10,
        }
    }
});