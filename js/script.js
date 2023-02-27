'use strict';
const body = document.querySelector('body');
const slidePrevBtn = document.querySelector('.slide-prev');
const slideNextBtn = document.querySelector('.slide-next');
let randomNum;
const getRandNum = function() {
    randomNum = Math.floor(Math.random() * 20) + 1;
}
getRandNum();
const setBg = function() {
    const time = getTimeOfDay();
    const img = new Image();
    randomNum = randomNum.toString().length === 2 ? randomNum : `0${randomNum}`;
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${time}/${randomNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('${img.src}')`;
    }
}
const getSlideNext = function() {
    if(randomNum === 20) {
        randomNum = 1;
    } else {
        randomNum++;
    }
    setBg();
}
const getSlidePrev = function() {
    if(randomNum === '01') {
        randomNum = 20;
    } else {
        randomNum--;
    }
    setBg();
}
slideNextBtn.addEventListener('click', getSlideNext);
slidePrevBtn.addEventListener('click', getSlidePrev);
setBg();

