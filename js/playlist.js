const playList = document.querySelector('.play-list');
const playBtn = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
let songNum = 0;
let isPlay = false;
const playListItems = [];
const sounds = ['../assets/sounds/Би-2 - Ангелы.mp3', '../assets/sounds/Би-2 - Личное Пространство.mp3', 
'../assets/sounds/Би-2 - Того Что Нет.mp3', '../assets/sounds/Би-2 & Чичерина - Мой рок-н-ролл.mp3'
];
const audio = new Audio();
sounds.forEach(sound => {
    const list = document.createElement('li');
    list.classList.add('play-item');
    list.textContent = sound.slice(17).replace('.mp3', '');
    playListItems.push(list);
    playList.append(list);
})
const playSound = function() {
    audio.src = sounds[songNum];
    playListItems[songNum].classList.add('item-active');
    audio.play();
}
const startSound = function() {
    if(!isPlay) {
        playBtn.classList.add('pause');
        playSound();
        isPlay = true;       
    } else {
        playBtn.classList.remove('pause');
        audio.pause();
        isPlay = false;
    }
}
const prevSong = function() {
    if(songNum === 0) {
        songNum = 3;
        playBtn.classList.add('pause');
        playListItems.forEach(item => item.classList.remove('item-active'));
        playSound();
        isPlay = true;
    } else {
        songNum--;
        playBtn.classList.add('pause');
        playListItems.forEach(item => item.classList.remove('item-active'));
        playSound();
        isPlay = true;
    }
}
const nextSong = function() {
    if(songNum === 3) {
        songNum = 0;
        playBtn.classList.add('pause');
        playListItems.forEach(item => item.classList.remove('item-active'));
        playSound();
        isPlay = true;
    } else {
        songNum++;
        playBtn.classList.add('pause');
        playListItems.forEach(item => item.classList.remove('item-active'));
        playSound();
        isPlay = true;
    }
}
playBtn.addEventListener('click', startSound);
playPrevBtn.addEventListener('click', prevSong);
playNextBtn.addEventListener('click', nextSong);