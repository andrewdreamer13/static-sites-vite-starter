import { initCustomPlayer } from "./customVideoPlayer.js"; 

export const initVideoLoader = () => {
  const containers = document.querySelectorAll("[data-video-receiver]");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setupContainer(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "200px" },
  );

  containers.forEach((container) => observer.observe(container));
};

const setupContainer = (container) => {
  const { videoType, videoSrc, videoPoster } = container.dataset;

  container.innerHTML = `
    <img src="${videoPoster}" class="video-poster" alt="Video preview">
    <button class="play-btn" aria-label="Play video"></button>
  `;

  container.addEventListener(
    "click",
    () => {
      
      initCustomPlayer(container, { type: videoType, src: videoSrc });
      container.classList.add("_is-active");
    },
    { once: true },
  );
};
