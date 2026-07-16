import "../scss/pages/_404.scss";

const countdownElement = document.getElementById("countdown");
let timeLeft = 5; // Время ожидания в секундах

if (countdownElement) {
  const interval = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(interval);
      // Умный редирект: учитывает базовый путь проекта в Vite
      window.location.href = import.meta.env.BASE_URL;
    }
  }, 1000);
}
