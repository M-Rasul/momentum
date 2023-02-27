const cityName = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const weatherError = document.querySelector('.weather-error');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
async function getWeather(city = 'Minsk', lang = 'en') {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=cfe3d2d1159bb1bfbaf130269d44d005&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if(!data.message) {
        weatherError.innerHTML = '';
        cityName.value = data.name;
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);  
        temperature.textContent = `${Math.floor(data.main.temp)}°C`; 
        description.textContent = data.weather[0].description;
        wind.innerHTML = lang === 'en' ? `Wind speed: ${Math.floor(data.wind.speed)} m/s` : `Скорость ветра: ${Math.floor(data.wind.speed)} м/с`;
        humidity.innerHTML = lang === 'en' ? `Humidity: ${Math.floor(data.main.humidity)}%` : `Влажность: ${Math.floor(data.main.humidity)}%`;
    } else {
        weatherError.innerHTML = data.message; 
        temperature.textContent = ''; 
        description.textContent = '';
        wind.innerHTML = '';
        humidity.innerHTML = '';
    }
}
cityName.addEventListener('change', function() {
    getWeather(cityName.value);
})