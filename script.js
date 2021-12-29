let video = document.querySelector('#video');
let source = document.createElement('source');
let width = window.innerWidth;

function setDskVideo() {
    source.setAttribute('src', 'videos/home-dsk.mp4');
};
function setTabVideo() {
    source.setAttribute('src', 'videos/home-tab.mp4');
};
function setMobVideo() {
    source.setAttribute('src', 'videos/home-mob.mp4');
};

if (width <= 768) {
    setMobVideo()
} else if (width <= 1024) {
    setTabVideo()
} else {
    setDskVideo()
}

source.setAttribute('type', 'video/mp4');
video.appendChild(source);