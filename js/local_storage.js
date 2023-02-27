const nameInput = document.querySelector('.name');
const cityInput = document.querySelector('.city');
function setLocalStorage() {
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('city', cityInput.value);
}
window.addEventListener('beforeunload', setLocalStorage);
function getLocalStorage() {
    if(localStorage.getItem('name')) {
      nameInput.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
        getWeather(localStorage.getItem('city'));
    } else {
        getWeather();
    }
}
window.addEventListener('load', getLocalStorage);