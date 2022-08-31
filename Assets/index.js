const timeDetails = document.getElementById('time');
const dateDetails = document.getElementById('date');
const currentWeatherItems = document.getElementById('current-weather-items');
const timeZone = document.getElementById('time-zone');
const countryDetails = document.getElementById('country');
const weatherForecastDetails = document.getElementById('weather-forecast');
const currentTemp = document.getElementById('current-temp');


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
//setInterval method which calls a function after specific intervals(in milliseconds)
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();

    //convert from 24-hour clock to 12-hour clock
    const hoursIn12HourFormat = hour >= 13 ? hour % 12 : hour
    const minutes = time.getMinutes();
    const amPm = hour >= 12 ? 'PM' : 'AM'

    timeDetails.innerHTML = hoursIn12HourFormat + ':' + minutes + ' ' + `<span id="am-pm">${amPm}</span>`

    dateDetails.innerHTML = days[day] + ',' + date + ' ' + months[month]
}, 1000);