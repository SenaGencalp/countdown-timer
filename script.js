const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
//birthday
const newYears = "20 Jan 2025";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSecond = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSecond / 3600 / 24);
  const hours = Math.floor(totalSecond / 3600) % 24;
  const mins = Math.floor(totalSecond / 60) % 60;
  const seconds = Math.floor(totalSecond) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}
//Bu fonksiyon, tek haneli zaman değerlerini çift haneli olarak döndürür. Örneğin, 5'i "05" olarak döndürür.
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
//countdown(): Geri sayım fonksiyonunu hemen çalıştırır.
//setInterval(countdown, 1000): Geri sayım fonksiyonunu her saniyede bir çalıştırarak ekranı günceller.
countdown();
setInterval(countdown, 1000);
