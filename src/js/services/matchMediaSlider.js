import Swiper from "swiper/bundle";

const createResizableSwiper = (breakpointString,selector,settings,callback) => {
  const mediaQuery = window.matchMedia(breakpointString);
  let swiperInstance;

  const checker = () => {
    const elementExists = document.querySelector(selector);

    if (mediaQuery.matches) {
      if (swiperInstance === undefined && elementExists) {
        swiperInstance = new Swiper(selector, settings);
        if (callback) callback(swiperInstance);
      }
    } else {
      if (swiperInstance !== undefined) {
        swiperInstance.destroy(true, true);
        swiperInstance = undefined;
      }
    }
  };

  mediaQuery.addEventListener("change", checker);
  checker();
};

export const initResizableSwiper = () => {
  createResizableSwiper("(max-width: 950px)", ".installation__card-slider", {
    spaceBetween: 20,
    slidesPerView: "auto",
    speed: 500,
    grid: {
      rows: 2,
    },
  });
};
