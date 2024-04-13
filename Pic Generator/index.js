const api = 'https://picsum.photos/150';
const container = document.querySelector('.container');
const load = document.getElementById('load');
let seed = 3;
const imgNum = 5;

function generate(){
    let newImg;
    for(i = 0; i < imgNum; i++){
        seed++;
        newImg = document.createElement('img');
        newImg.src = `${api}?random=${seed}`;
        container.appendChild(newImg);
    }
    
    
}
load.addEventListener('click', generate);