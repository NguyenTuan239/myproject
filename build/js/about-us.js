document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('.number-plus-2000');
    const targetNumber = parseInt(element.textContent, 10);
    let currentNumber = 0;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const timer = setInterval(() => {
                    currentNumber += 5;
                    element.textContent = currentNumber;
                    if (currentNumber >= targetNumber) {
                        clearInterval(timer);
                    }
                }, 1);

                // Sau khi bắt đầu animation, không cần tiếp tục theo dõi phần tử nữa
                observer.unobserve(element);
            }
        });
    });

    observer.observe(element);
});
document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('.number-plus-500');
    const targetNumber = parseInt(element.textContent, 10);
    let currentNumber = 0;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const timer = setInterval(() => {
                    currentNumber += 2;
                    element.textContent = currentNumber;
                    if (currentNumber >= targetNumber) {
                        clearInterval(timer);
                    }
                }, 1);

                // Sau khi bắt đầu animation, không cần tiếp tục theo dõi phần tử nữa
                observer.unobserve(element);
            }
        });
    });

    observer.observe(element);
});

