const selection = document.getElementById('selection');
const options = document.getElementById('options');
const show = document.getElementById('showbtn');
const li_items = Array.from(document.getElementsByTagName('li'));



options.classList.add('hidden');
show.classList.add('turn');

selection.addEventListener('click', () => {
    if(options.classList.contains('hidden')){
        options.classList.remove('hidden');
        show.classList.remove('turn');
        show.classList.add('turnBack');
    }
    else {
        options.classList.add('hidden');
        show.classList.add('turn');
        show.classList.remove('turnBack');
    }
});
li_items.forEach((el) => {
    el.addEventListener('click', () => {
        selection.firstElementChild.innerHTML = el.innerHTML;
    })
});
