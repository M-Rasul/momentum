const greeting = document.querySelector('.greeting');
const greetingsTranslation = {
    'ru': getTimeOfDay() === 'morning' ? 'Доброе утро' : (getTimeOfDay() === 'afternoon' ? 'Добрый день' : (getTimeOfDay() === 'evening' 
    ? 'Добрый вечер' : (getTimeOfDay() === 'night' ? 'Доброй ночи' : null))),
    'en': `Good ${getTimeOfDay()}`
}
function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if(hours >= 6 && hours < 12) {
        return 'morning';
    } else if(hours >= 12 && hours < 18) {
        return 'afternoon';
    } else if(hours >= 18 && hours <= 23) {
        return 'evening';
    } else if(hours >= 0 && hours < 6) {
        return 'night';
    }
}
const showGreeting = function(lang = 'en') {
    greeting.textContent = greetingsTranslation[lang];
}
showGreeting();