// СЛАЙДЕР ПРОДУКТ 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 24,
    slidesPerView: 3,

    // Enable loop
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.product__next',
        prevEl: '.product__prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.product__scrollbar',
        draggable: true,
    },
});
document.querySelector('.product__next').addEventListener('click', (e) => {
    const scrollThumb = document.querySelector('.product__scroll-thumb');
    const scrollbar = document.querySelector('.product__scrollbar');

    // Смещение ползунка (пример на 100px)
    let newPosition = scrollThumb.offsetLeft + 335;

    // Ограничиваем смещение шириной скроллбара
    newPosition = Math.min(newPosition, scrollbar.clientWidth - scrollThumb.clientWidth);

    scrollThumb.style.left = `${newPosition}px`;
});

document.querySelector('.product__prev').addEventListener('click', (e) => {
    const scrollThumb = document.querySelector('.product__scroll-thumb');

    // Смещение ползунка (пример на 100px)
    let newPosition = scrollThumb.offsetLeft - 335;

    // Ограничиваем смещение чтобы не выходить за границы
    newPosition = Math.max(newPosition, 0);

    scrollThumb.style.left = `${newPosition}px`;
});



// СЛАЙДЕР ОТЗЫВЫ
const swiper1 = new Swiper('.swiper1', {
    direction: 'horizontal',
    spaceBetween: 24,
    slidesPerView: 'auto',
    centeredSlides: true,
    // loop: true, // Отключаем стандартный loop
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 800,
    on: {
        slideChange: function () {
            // Количество всех слайдов
            const totalSlides = this.slides.length;
            // Индекс активного слайда
            const currentIndex = this.realIndex;

            // Проверяем, если предпоследний слайд активен
            if (currentIndex === totalSlides - 2) {
                // Останавливаем autoplay, чтобы избежать лишних действий
                this.autoplay.stop();
                // Перемещаемся ко второму слайду с задержкой
                setTimeout(() => {
                    this.slideTo(1, 800); // Переход ко второму слайду
                    // Включаем autoplay заново
                    this.autoplay.start();
                }, 2000); // Задержка в 2 секунды
            }
        }
    }
});


