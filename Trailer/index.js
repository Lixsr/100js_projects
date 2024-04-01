const watchbt = document.getElementById('watchbt');
const exit = document.getElementById('exit');
const movieInfo = document.getElementsByClassName('movie');
const pic = document.getElementsByClassName('pic');
const vid = document.getElementsByClassName('vid');
const video = document.querySelector("video");

watchbt.addEventListener('click', () => {
    movieInfo[0].classList.add('hidden');
    pic[0].classList.add('hidden');
    vid[0].classList.remove('hidden');
});
exit.addEventListener('click', () => {
    movieInfo[0].classList.remove('hidden');
    pic[0].classList.remove('hidden');
    vid[0].classList.add('hidden');
    video.pause();
    video.currentTime = 0;
    
});