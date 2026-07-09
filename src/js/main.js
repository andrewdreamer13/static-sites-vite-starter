import "../scss/main.scss";
import "virtual:svg-icons-register";

import gsap from "gsap";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {initPreloader} from "./components/preloader.js"
import { initBurger } from "./components/burger.js";
// import { initSlider } from "./components/slider.js";
import { initAppearance } from "./animations/appearance.js";
import { initChangeTheme } from "./services/changeTheme.js";
import { initModal } from "./components/modal.js";
import { initLazySvg } from "./services/lazySvgLoader.js";
import { initAccordion } from "./components/accordion.js";
import { initFocusManager } from "./services/focusManager.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("The project works");
  initPreloader();
  initBurger("#burger", ".nav", ".nav__list");
  // initSlider();
  initChangeTheme('#theme');
  initModal();
  initAppearance();
  initLazySvg();
  initAccordion("#faq");
  initFocusManager();
});
