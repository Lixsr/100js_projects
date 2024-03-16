const rollbtn = document.getElementById('rollBtn');
const rollsList = document.getElementById('rolls');
const dice = document.getElementById('dice');
let rolls = 0;

rollbtn.addEventListener('click', () => {

  dice.classList.add('rolling');

  rolls++;
  const rand = Math.ceil(Math.random() * 6);
  const face = getDiceFace(rand);
  
  setTimeout(() => {
    dice.innerHTML = face;
  },650)
  setTimeout( () => {
    dice.classList.remove('rolling');
    roll(face);
  },1200);
  


});


function roll(face){

  const liEl = document.createElement("li");
  liEl.innerHTML = `Roll ${rolls}:`;

  const divEl = document.createElement('div');
  divEl.innerHTML = face;
  liEl.appendChild(divEl);
  rollsList.appendChild(liEl);
}

function getDiceFace(rollResult) {
    switch (rollResult) {
      case 1:
        return "&#9856;";
      case 2:
        return "&#9857;";
      case 3:
        return "&#9858;";
      case 4:
        return "&#9859;";
      case 5:
        return "&#9860;";
      case 6:
        return "&#9861;";
      default:
        return "";
    }
  }