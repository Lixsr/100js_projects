const P1 = document.getElementById('P1');
const P2 = document.getElementById('P2');
const P3 = document.getElementById('P3');
const Ps = document.getElementsByClassName('content');
Ps[0].classList.add('view');

P1.addEventListener('click', () => {
    P1.classList.add("live");
    Ps[0].classList.add('view');

    P2.classList.remove("live");
    Ps[1].classList.remove('view');

    P3.classList.remove("live");
    Ps[2].classList.remove('view');

});
P2.addEventListener('click', () => {
    P2.classList.add("live");
    Ps[1].classList.add('view');

    P1.classList.remove("live");
    Ps[0].classList.remove('view');

    P3.classList.remove("live");
    Ps[2].classList.remove('view');

});

P3.addEventListener('click', () => {
    P3.classList.add("live");
    Ps[2].classList.add('view');

    P1.classList.remove("live");
    Ps[0].classList.remove('view');

    P2.classList.remove("live");
    Ps[1].classList.remove('view');
});

