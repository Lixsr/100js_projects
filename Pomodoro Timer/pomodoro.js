const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const timer = document.getElementById('timer');
let overlap = false; //To prevent the user from spamming the start button.//

let update;

startBtn.addEventListener('click', start);

stopBtn.addEventListener('click', stop);

resetBtn.addEventListener('click', reset);

function start(){
    if(!overlap){
        overlap = true;
        update = setInterval( () => {
            timer.innerHTML = decrement(timer.innerHTML);
        } ,1000);
    }
}

function stop(){
    clearInterval(update);
    overlap = false;
}

function reset(){
    stop();
    timer.innerHTML = '25:00';
}




function decrement(time){
    let minutes = Number(time.substring(0, 2));
    let seconds = Number(time.substring(3, 5));

    if (seconds != 0){
        seconds--;
    }
    else {
        if (minutes != 0){
            minutes--;
            seconds = 59;
        }
        else stop();
    }
    

    return `${pad(minutes)}:${pad(seconds)}`;
}

function pad(num){
    if (num < 10){
        return '0' + num;
    }
    return num;
}