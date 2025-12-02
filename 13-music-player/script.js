const play = document.querySelector('.play-pause');
const audio = document.querySelector('.audio');
const playIcon = document.querySelector('.fa.fa-play')
const startTime = document.querySelector('.start-time');
const endTime = document.querySelector('.end-time');
const progressFill = document.querySelector('.progression-fill');
const audioImage = document.getElementById('audio-image');
const audioArtist = document.getElementById('artist');
const audioTitle = document.getElementById('title');

const forwardBtn = document.querySelector('.forward-backward.forward');
const backwardBtn = document.querySelector('.forward-backward.backward');

class AudioFiles {
    constructor(name, artist,imageSrc,audioSrc) {
        this.name = name;
        this.artist = artist;
        this.imageSrc = imageSrc;
        this.audioSrc = audioSrc;
    }
}

let audioList = [
    new AudioFiles(
        'Love Me Like You Do',
        'Georgekutty',
        'img/jacinto-1.jpg',
        'music/jacinto-1.mp3'),
    new AudioFiles(
        'I Am Iron Man ',
        'Shilpa Joseph',
        'img/jacinto-2.jpg',
        'music/jacinto-2.mp3'),
    new AudioFiles(
        'Do It We are Not Good',
        'Dean Ambros',
        'img/jacinto-3.jpg',
        'music/jacinto-3.mp3'),
    new AudioFiles(
        'Enna Mone Da Mone',
        'Kutty',
        'img/metric-1.jpg',
        'music/metric-1.mp3'),
];

let audioLength = audioList.length;
let audioStartCount = 1;

play.addEventListener('click', () => {
    playAudio()
})
audio.addEventListener('timeupdate', (e) => {
    timeInMInSec()
})

// --- NEW: Async function to wait for audio metadata ---
async function loadAudio(src) {
    return new Promise(resolve => {
        audio.src = src;
        audio.addEventListener('loadedmetadata', () => resolve(), { once: true });
    });
}

async function changeAudio() {
    let audioObj = audioList[audioStartCount % audioLength];

    await loadAudio(audioObj.audioSrc);

    audioImage.src = audioObj.imageSrc;
    audioArtist.innerHTML = audioObj.artist;
    audioTitle.innerHTML = audioObj.name;

    play.classList.remove('audio-playing');
    playIcon.classList.add('fa-play');
    playIcon.classList.remove('fa-pause');

    playAudio();
}

// --- Updated forward button with async/await ---
forwardBtn.addEventListener('click', async (e) => {
    audioStartCount = audioStartCount + 1;
    await changeAudio()

})

backwardBtn.addEventListener('click', async (e) => {
    audioStartCount = audioStartCount - 1;
    await changeAudio()

})

function timeInMInSec () {
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime % 60)
        .toString()
        .padStart(2, '0');

    startTime.innerHTML = `${minutes}:${seconds}`
    progressFill.style.width = (audio.currentTime * 100) / audio.duration + '%'
}

function playAudio () {
    if (play.classList.contains('audio-playing')) {
        audio.pause();
        play.classList.remove('audio-playing');
        playIcon.classList.add('fa-play');
        playIcon.classList.remove('fa-pause');

    } else {
        audio.play();
        play.classList.add('audio-playing');
        playIcon.classList.add('fa-pause');
        playIcon.classList.remove('fa-play');
        let minutes = Math.floor(audio.duration / 60);
        let seconds = Math.floor(audio.duration % 60)
            .toString()
            .padStart(2, '0');

        endTime.innerHTML = `${minutes}:${seconds}`
    }
}
