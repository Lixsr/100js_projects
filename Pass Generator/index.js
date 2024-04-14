const generateBtn = document.getElementById('generate');
const passwordEl = document.getElementById('password');
const alertEl = document.querySelector('.alert-container');
const copyEl = document.querySelector('.fa-copy');


const chars = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const passSize = 12;

generateBtn.addEventListener('click', generate);
copyEl.addEventListener('click', copy);

function generate() {
    let newPass = '';
    for (i = 0; i < passSize; i++){
        newPass += chars[Math.floor(Math.random() * chars.length)];
    }
    passwordEl.value = newPass;
}

function copy(){
    passwordEl.select();
    passwordEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(passwordEl.value);
    alertEl.classList.remove('active');
    setTimeout(() =>{
        alertEl.classList.add('active');
    }, 1400);
    
}
