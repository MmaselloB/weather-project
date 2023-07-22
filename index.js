//In your project, display the current date and time using JavaScript: Tuesday 16:00
let now = new Date();
console.log(now);
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[now.getDay()];
  let currentHours = now.getHours();
  let currentMinutes = now.getMinutes();

  let currentDate = document.querySelector(".weekday");
  currentDate.innerHTML = `${currentDay} , ${currentHours}:${currentMinutes}`;
}
formatDate(now);

//Add a search engine, when searching for a city (i.e. Paris),
//display the city name on the page after the user submits the form.
function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = temp + "°C";
}

function city(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city-input").value;
  let apiKey = "a867e25f2d83db579421a57fd8e937ec";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", city);

//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to
//Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. /
//When clicking on Celsius, it should convert it back to Celsius.
function changeFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  temp.innerHTML = 66;
}
function changeCelcius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 19;
}
let fahrenheitLink = document.querySelector("#f-link");
fahrenheitLink.addEventListener("click", changeFahrenheit);

let celciusLink = document.querySelector("#c-link");
celciusLink.addEventListener("click", changeCelcius);

function showLocation(position) {
  let apiKey = "a867e25f2d83db579421a57fd8e937ec";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}}&units=metric`;

  axios.get(apiUrl).then(showTemp);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}
let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", getCurrentLocation);
