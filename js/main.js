// СЛАЙДЕР ПРОДУКТ 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 16,
    slidesPerView: 1,

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
    breakpoints: {
        601: {
            slidesPerView: 3,
            spaceBetween: 24,
        },

    }
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



document.addEventListener('DOMContentLoaded', function() {
    const wmn = document.querySelector('.wmn');
    const wmnMore = document.querySelector('.wmn-more');

    if (wmn && wmnMore) {  // Проверьте, что оба элемента найдены
        wmn.addEventListener('mouseenter', () => {
            wmnMore.style.display = 'block'; // Показываем элемент при наведении
        });

        wmn.addEventListener('mouseleave', () => {
            wmnMore.style.display = 'none'; // Скрываем элемент при выходе курсора
        });

        wmn.addEventListener('mousemove', (e) => {
            const rect = wmn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            wmnMore.style.left = x + 'px';
            wmnMore.style.top = y + 'px';
        });
    }
});






// Скроллинг изменение цвета текста
window.addEventListener('scroll', () => {
    const textElement = document.querySelector('.testimonials__active-text');
    const rect = textElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Проверяем, виден ли текстовый элемент на экране
    const isElementInView = rect.top >= 0 && rect.bottom <= windowHeight;

    if (isElementInView) {
        const scrollPosition = window.scrollY; // текущая позиция прокрутки
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        
        // Рассчитываем процент прокрутки
        const scrollPercentage = scrollPosition / maxScroll;

        // Рассчитываем количество букв, которое нужно закрасить
        const letterCount = Math.floor(scrollPercentage * textElement.textContent.length * 1.2);

        // Если прокрутка больше 70%, закрашиваем весь текст
        const totalLetterCount = textElement.textContent.length;
        const lettersToPaint = scrollPercentage >= 0.67 ? totalLetterCount : letterCount;

        // Применяем класс text-color-change к соответствующему количеству букв
        textElement.innerHTML = textElement.textContent.split('').map((char, index) => {
            return index < lettersToPaint ? `<span class="text-color-change">${char}</span>` : char;
        }).join('');
    }
});