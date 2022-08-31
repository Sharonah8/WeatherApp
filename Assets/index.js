const timeDetails = document.getElementById('time');
const dateDetails = document.getElementById('date');
const currentWeatherItems = document.getElementById('current-weather-items');
const timeZone = document.getElementById('time-zone');
const countryDetails = document.getElementById('country');
const weatherForecastDetails = document.getElementById('weather-forecast');
const currentTemp = document.getElementById('current-temp');

//setInterval function, a function that's called after specific intervals
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HourFormat = hour >= 13 ? hour % 12 : hour
    const minutes = time.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM'
}, 1000);