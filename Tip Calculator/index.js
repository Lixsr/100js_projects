const btn = document.getElementById('btn');
const amount = document.getElementById('amount');
const percentage = document.getElementById('percentage');
const totalEl = document.getElementById('total');

btn.addEventListener('click', calculate);
function calculate(){
    let total = amount.value * (1 + percentage.value / 100);
    totalEl.innerHTML = `Total: ${total}`;
}
