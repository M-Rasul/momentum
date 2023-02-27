const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const showTime = function(lang = 'en') {
    const dayOfTheWeek = {
        0 : lang === 'en' ? 'Sunday' : 'Воскресенье',
        1 : lang === 'en' ? 'Monday' : 'Понедельник',
        2 : lang === 'en' ? 'Tuesday' : 'Вторник',
        3 : lang === 'en' ? 'Wednesday' : 'Среда',
        4 : lang === 'en' ? 'Thursday' : 'Четверг',
        5 : lang === 'en' ? 'Friday' : 'Пятница',
        6 : lang === 'en' ? 'Saturday' : 'Суббота'
    }
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    const day = date.getDay();
    const options = {month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString(lang === 'en' ? 'en-US' : 'ru-RU', options);
    timeEl.textContent = currentTime;
    dateEl.textContent = `${dayOfTheWeek[day]}, ${currentDate}`;
    showGreeting();
}
showTime();
setInterval(showTime, 1000);