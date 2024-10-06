// Loading Gif
window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.getElementById('gif-loader');
        loader.style.display = 'none';
    }, 100);
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
    settingBar.classList.remove('right-0','reactive');
    settingBar.classList.add('left-0');
    settingIcon.classList.remove('right-0');
    settingIcon.classList.add('left-0');
    this.classList.add('bg-black', 'text-white');
    this.classList.remove('text-zinc-700');
    ltr.classList.remove('bg-black', 'text-white');
    ltr.classList.add('text-zinc-700');
    // Lưu chế độ RTL
    localStorage.setItem('direction', 'rtl');
});

// Chuyển sang chế độ LTR
ltr.addEventListener('click', function() {
    settingBar.classList.remove('left-0');
    settingBar.classList.add('right-0','reactive');
    settingIcon.classList.remove('left-0');
    settingIcon.classList.add('right-0');
    this.classList.add('bg-black', 'text-white');
    this.classList.remove('text-zinc-700');
    rlt.classList.remove('bg-black', 'text-white');
    rlt.classList.add('text-zinc-700');
    // Lưu chế độ LTR
    localStorage.setItem('direction', 'ltr');
});
// Khi trang được load, kiểm tra và áp dụng chế độ
window.addEventListener('load', function() {
    const direction = localStorage.getItem('direction');
    if (direction === 'rtl') {
        rlt.click();
        settingBarEx.click();
    } else if (direction === 'ltr') {
        ltr.click();
    }
});

// Lấy màu từ localStorage và áp dụng nếu có
window.addEventListener('load', () => {
    const savedColor = localStorage.getItem('themeColor');
    const savedBGColor = localStorage.getItem('themeBGColor');
    const savedLogoColor = localStorage.getItem('logoColor');
    const activeButtonIndex = localStorage.getItem('activeButtonIndex');

    document.querySelectorAll(':root').forEach(color => {
        color.style.setProperty('--main-color', savedColor);
        color.style.setProperty('--hover-backgournd-color', savedBGColor);
    });
    if(savedLogoColor){
        document.querySelectorAll('.logo').forEach(logo => {
            logo.src = savedLogoColor;
        })
    }

    if (activeButtonIndex) {
        document.querySelectorAll('.theme-buttons').forEach((button, index) => {
            if (index == activeButtonIndex) {
                button.classList.add('bg-black', 'text-white');
                button.classList.remove('text-zinc-700');
            } else {
                button.classList.remove('bg-black', 'text-white');
                button.classList.add('text-zinc-700');
            }
        });
    }
});

// Cài đặt màu chủ đề
let themeButtons = document.querySelectorAll(".theme-buttons");
themeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let dataColor = button.getAttribute('data-color');
        let BgColor = button.getAttribute('hover-bg-color');
        let logoColor = button.getAttribute('logo-color')

        // Đặt màu chủ đề
        document.querySelectorAll(':root').forEach(color => {
            color.style.setProperty('--main-color', dataColor);
            color.style.setProperty('--hover-backgournd-color', BgColor);
        });
        document.querySelectorAll('.logo').forEach(logo => {
            logo.src = logoColor;
        })

        // Đặt nền đen cho nút được chọn và xóa khỏi các nút khác
        themeButtons.forEach(btn => {
            btn.classList.remove('bg-black', 'text-white');
            btn.classList.add('text-zinc-700');
        });
        button.classList.add('bg-black', 'text-white');
        button.classList.remove('text-zinc-700');

        // Lưu màu đã chọn và nút đã chọn vào localStorage
        localStorage.setItem('themeColor', dataColor);
        localStorage.setItem('themeBGColor', BgColor);
        localStorage.setItem('logoColor', logoColor);
        localStorage.setItem('activeButtonIndex', index);
    });
});

// Show the reset confirmation dialog
const resetButton = document.getElementById('reset');
const resetDialog = document.getElementById('reset-dialog');

resetButton.addEventListener('click', function() {
    resetDialog.style.display = 'block'; // Show dialog
});

// Handle confirm reset
const confirmResetButton = document.getElementById('confirm-reset');
confirmResetButton.addEventListener('click', function() {
    // Clear localStorage
    localStorage.removeItem('direction');
    localStorage.removeItem('themeColor');
    localStorage.removeItem('themeBGColor');
    localStorage.removeItem('logoColor');
    localStorage.removeItem('activeButtonIndex');

    // Hide the reset dialog
    resetDialog.style.display = 'none';
    location.reload();
});

// Handle cancel reset
const cancelResetButton = document.getElementById('cancel-reset');
cancelResetButton.addEventListener('click', function() {
    resetDialog.style.display = 'none'; // Hide dialog
});
// Close dialog if user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === resetDialog) {
        resetDialog.style.display = 'none';
    }
});