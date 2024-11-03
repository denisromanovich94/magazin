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
