
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const initSlider = () => {
const swiper = new Swiper(".slider", {
  loop: true,
  speed: 500,
  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

}
