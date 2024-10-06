// Đặt thời gian đếm ngược (thời gian mục tiêu)
const countdownDate = new Date("may 31, 2025 23:59:59").getTime();

// Hàm cập nhật bộ đếm ngược mỗi giây
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Tính toán ngày, giờ, phút, giây
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Cập nhật các phần tử HTML với giá trị tương ứng
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Kiểm tra nếu đếm ngược kết thúc
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("days").innerText = "0";
        document.getElementById("hours").innerText = "0";
        document.getElementById("minutes").innerText = "0";
        document.getElementById("seconds").innerText = "0";
    }
}, 1000);