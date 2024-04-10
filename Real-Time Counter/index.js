const total = document.getElementById('total');
const remaining = document.getElementById('remaining');
const text = document.getElementById('text');
const max = 25;
text.setAttribute('maxlength', max)
text.addEventListener('keyup', update);
function update(){
    Tchars = text.value.length;
    if(Tchars <= max){
        console.log(Tchars);
        total.innerHTML = `Total Characters: ${Tchars}`;
        remaining.innerText = `Remaining: ${max - Tchars}`;
    }
}