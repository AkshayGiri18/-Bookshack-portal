document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".slider-container", {
        slidesPerView: 2,
        spaceBetween: 25,
        loop: true,
        centerSlide: true,
        fade: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-button-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2000, 
            disableOnInteraction: false, // Set to false if you want autoplay to continue even when user interacts with the slider
        },
    });
});
