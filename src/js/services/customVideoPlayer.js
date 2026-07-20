import Plyr from "plyr";

export const initCustomPlayer = (container, { type, src }) => {
  let mediaElement;

  if (type === "youtube") {
    mediaElement = document.createElement("div");
    mediaElement.setAttribute("data-plyr-provider", "youtube");
    mediaElement.setAttribute("data-plyr-embed-id", src);
  } else {
    mediaElement = document.createElement("video");
    mediaElement.src = src;
    mediaElement.setAttribute("playsinline", "");
    mediaElement.setAttribute("controls", "");
  }

  container.innerHTML = "";
  container.appendChild(mediaElement);

  return new Plyr(mediaElement, {
    autoplay: true,
  });
};
