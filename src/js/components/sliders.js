import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const initSliders = () => {
  initMainSlider();
};

const initMainSlider = () => {
  const swiper = new Swiper(".main-slider", {
    loop: true,
    speed: 500,
    centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
};
