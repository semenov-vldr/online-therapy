new Swiper('.books__slider', {

    navigation: {
        prevEl: '.swiper-prev',
        nextEl: '.swiper-next',
    },

    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    loop: true,

    // Стартовый слайд
    initialSlide: 0,

    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        370: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    }

});