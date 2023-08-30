const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elWrapper = document.querySelector(".wearher");

const weatherRender = (data) => {
  const html = `
 <h2 class="wearher__name text-white">${data.name}</h2>
 <p class="weather__country text-white fs-4">Country:${data.sys.country} </p>
 <p class="weather__temper text-white fs-4">${data.main.temp}°C</p>
 <p class="weather__speed text-white fs-4">Speed:${data.wind.speed}</p>
 `;

  elWrapper.innerHTML = null;
  elWrapper.insertAdjacentHTML("beforeend", html);
};

const getApiData = (location) => {
  const request = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`
  )
    .then((response) => response.json())
    .then((data) => weatherRender(data));
};

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let inputValue = elInput.value;
  elInput.value = null;
  getApiData(inputValue);
});