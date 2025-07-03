let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_temperature = document.querySelector(".weather_temperature");
let w_icon = document.querySelector(".weather_icon");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");

let w_feelslike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

let citySearch = document.querySelector(".weather_search");

let city = "kalimpong";
citySearch.addEventListener("submit", (e) => {
  e.preventDefault();

  let cityName = document.querySelector("#city_name");
  city = cityName.value;
  getWeatherData();
  cityName.value = "";
  console.log(cityName.value);
});

// function to get country name
const getCountryName = (code) => {
  return new Intl.DisplayNames([code], { type: "region" }).of(code);
};
// end

//function to get date and time

const getDateTime = (dt) => {
  const curDate = new Date(dt * 1000);
  const options = {
    year: "numeric",
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  return formatter.format(curDate);
};

// end

const getWeatherData = async (e) => {
  const apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=65cb21fb18a191d330f6216df668f5f5`;
  try {
    const res = await fetch(apiKey);
    const data = await res.json();

    console.log(data);

    const { main, name, weather, wind, sys, dt } = data;
    cityName.innerHTML = `${name} , ${getCountryName(sys.country)}`;
    dateTime.innerHTML = getDateTime(dt);

    w_forecast.innerHTML = weather[0].main; // gives the weather
    w_icon.innerHTML = `<img src = "http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`; // gives the weather image

    w_temperature.innerHTML = `${main.temp}&#176`;
    w_minTem.innerHTML = `Min : ${Math.floor(main.temp_min)}&#176`;
    w_maxTem.innerHTML = `Max : ${Math.floor(main.temp_max)}&#176`;

    w_feelslike.innerHTML = `${main.feels_like}&#176`;
    w_humidity.innerHTML = `${main.humidity}&#176`;
    w_wind.innerHTML = `${wind.speed}`;
    w_pressure.innerHTML = `${main.pressure}&#176`;
  } catch (err) {
    console.log(err);
  }
};
getWeatherData();
document.querySelector("body").addEventListener("unload", getWeatherData);
