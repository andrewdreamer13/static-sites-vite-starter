import "../scss/main.scss";
import "virtual:svg-icons-register";

import gsap from "gsap";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { initBurger } from "./components/burger.js";
// import { initSlider } from "./components/slider.js";
import { initAppearance } from "./animations/appearance.js";
import { initThemeSwitcher } from "./components/themeSwitcher.js";
import { openModalWindow } from "./components/modal.js";
import { initLazySvg } from "./services/lazySvgLoader.js";
import { initAccordion } from "./components/accordion.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("The project works");

  initBurger();
  // initSlider();
  initThemeSwitcher();
  openModalWindow();
  initAppearance();
  initLazySvg();
  initAccordion("#faq");
});
