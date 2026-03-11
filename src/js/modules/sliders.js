

//  Swiper
import Swiper from "swiper";

export const initSliders = () => {
  if (document.querySelector(".main-slider")) {
    new Swiper(".main-slider", {
      /* ... */
    });
  }
};
