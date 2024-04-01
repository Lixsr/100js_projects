const steps = document.getElementsByClassName('step');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const checked = '<i class="fa-regular fa-circle-check fa-2xl" style="color: green;"></i>';
const unchecked = '<i class="fa-regular fa-circle-xmark fa-2xl" style="color: gray;"></i>';
let step;
let index = 1;

next.addEventListener('click', () => {
    arrSize = steps.length - 1
    if(index == arrSize){
        step = 'Final';
    }
    else step = 'Step ' + index;
    
    if(index <= arrSize && steps[index].classList.contains('unchecked')){
        steps[index].classList.remove('unchecked');
        steps[index].classList.add('checked');
        steps[index].innerHTML = checked + `<small>${step}</small>`;
        index++;
    }
});
prev.addEventListener('click', () => {
    arrSize = steps.length - 1;
    index--;
    if(index == arrSize){
        step = 'Final';
    }
    else step = 'Step ' + index;
    
    if(index > 0 && steps[index].classList.contains('checked')){
        steps[index].classList.remove('checked');
        steps[index].classList.add('unchecked');
        steps[index].innerHTML = unchecked + `<small>${step}</small>`;   
    }
    else index++;
});