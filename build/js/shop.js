// Price Filter Js start

const minPrice = 0;
const maxPrice = 50; // Giá trị tối đa
const slider = document.getElementById('filter-container');
const leftHandle = document.getElementById('filter-change-left');
const rightHandle = document.getElementById('filter-change-right');
const range = document.getElementById('slider-range');
const leftPrice = document.getElementById('filter-change-left-price');
const rightPrice = document.getElementById('filter-change-right-price');

let currentMin = 10;
let currentMax = 45;

function updatePriceDisplay() {
    leftPrice.textContent = currentMin;
    rightPrice.textContent = currentMax;
}

function updateSliderRange() {
    const totalWidth = slider.offsetWidth;
    const leftPercent = (currentMin / maxPrice) * 100;
    const rightPercent = (currentMax / maxPrice) * 100;
    leftHandle.style.left = `${leftPercent}%`;
    rightHandle.style.left = `${rightPercent}%`;
    range.style.left = `${leftPercent}%`;
    range.style.width = `${rightPercent - leftPercent}%`;
}

function handleMouseMove(e, handle, minLimit, maxLimit, updateValueCallback) {
    const totalWidth = slider.offsetWidth;
    const mouseX = e.clientX - slider.offsetLeft;
    const percent = (mouseX / totalWidth) * 100;
    const value = Math.round((percent / 100) * maxPrice);

    if (value >= minLimit && value <= maxLimit) {
      updateValueCallback(value);
      updateSliderRange();
      updatePriceDisplay();
    }
}

// Xử lý sự kiện di chuyển tay cầm trái
leftHandle.addEventListener('mousedown', () => {
    const onMouseMove = (e) => handleMouseMove(e, leftHandle, minPrice, currentMax, (value) => currentMin = value);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
    });
});

// Xử lý sự kiện di chuyển tay cầm phải
rightHandle.addEventListener('mousedown', () => {
    const onMouseMove = (e) => handleMouseMove(e, rightHandle, currentMin, maxPrice, (value) => currentMax = value);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
    });
});

// Xử lý khi người dùng click vào filter-container
slider.addEventListener('click', (e) => {
    const totalWidth = slider.offsetWidth;
    const mouseX = e.clientX - slider.offsetLeft;
    const percent = (mouseX / totalWidth) * 100;
    const value = Math.round((percent / 100) * maxPrice);

    // Kiểm tra vị trí click và quyết định di chuyển tay cầm nào
    const middlePoint = (currentMin + currentMax) / 2;
    if (value < middlePoint) {
        // Di chuyển tay cầm trái nếu click bên trái
        currentMin = Math.max(minPrice, Math.min(value, currentMax));
    } else {
        // Di chuyển tay cầm phải nếu click bên phải
        currentMax = Math.min(maxPrice, Math.max(value, currentMin));
    }

    updateSliderRange();
    updatePriceDisplay();
});

// Khởi tạo ban đầu
updateSliderRange();
updatePriceDisplay();

// Price Filter Js start

// Select2 js
$(document).ready(function() {
    $('.shop-select').select2({
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

// Shop grid js

const shopGtidButtons = document.querySelectorAll('[id^="shop-grid-bt"]');
const shopGridContent = document.getElementById('shop-grid');

const gridConfigs = {
    'shop-grid-bt-1': { columns: '1fr', rows: 'repeat(9, 1fr)' },
    'shop-grid-bt-2': { columns: 'repeat(2, 1fr)', rows: 'repeat(5, 1fr)' },
    'shop-grid-bt-3': { columns: 'repeat(3, 1fr)', rows: 'repeat(3, 1fr)' },
    'shop-grid-bt-4': { columns: 'repeat(4, 1fr)', rows: 'repeat(3, 1fr)' }
};

shopGtidButtons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;
        shopGridContent.style.gridTemplateColumns = gridConfigs[id].columns;
        shopGridContent.style.gridTemplateRows = gridConfigs[id].rows;

        shopGtidButtons.forEach(btn => btn.classList.remove('netflix'));
        button.classList.add('netflix');
    });
});
