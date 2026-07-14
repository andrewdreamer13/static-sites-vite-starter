import "../scss/main.scss";
import "virtual:svg-icons-register";

import gsap from "gsap";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { optionsData } from "./data/selectOptions.js";
import { phoneMasks } from "./data/phoneMasks.js";

import { initPreloader } from "./components/preloader.js";
import { initBurger } from "./components/burger.js";
import { initAppearance } from "./animations/appearance.js";
import { initChangeTheme } from "./services/changeTheme.js";
import { initModal } from "./components/modalManager.js";
import { initLazySvg } from "./services/lazySvgLoader.js";
import { initAccordion } from "./components/accordion.js";
import { initFocusManager } from "./services/focusManager.js";
// import {initUpButton} from "./components/upButton/js";
import { initSliders } from "./components/sliders.js";
import { initTabs } from "./components/tabs.js";
import { initCookieBanner } from "./components/cookieBanner.js";
import { initCustomSelect } from "./components/customSelect.js";
import { initFormHandler } from "./forms/formHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("The project works");
  initPreloader();
  initBurger("#burger", ".nav", ".nav__list");
  initSliders();
  initChangeTheme("#theme");
  initModal();
  initAppearance();
  initLazySvg();
  initAccordion("#faq");
  initFocusManager();
  initTabs("#tabs-1");
  initCookieBanner();
  initCustomSelect("#cities", optionsData.cities);
  initCustomSelect("#countries", optionsData.countries);
  initFormHandler("#form1");
  // initUpButton(".footer__up-button");
});
