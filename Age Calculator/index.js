
const btn = document.getElementById("btn");
const bDateEl = document.getElementById("bDate");
const age = document.getElementById("age");

btn.addEventListener('click', displayAge);

function displayAge(){
    if(bDateEl.value != ""){
        age.innerHTML = `You are ${calculateAge(bDateEl)} years old`;
    }
    else window.alert("Enter your Birthdate")
    
}


function calculateAge(bDateEl){
    const now = new Date();
    const birthdate = new Date(bDateEl.value);
    let age = now.getFullYear() - birthdate.getFullYear();
    
    if (now.getMonth() < birthdate.getMonth() ||
        now.getMonth() == birthdate.getMonth() && 
        now.getDate() < birthdate.getDate()){
        age--;
    }
    
    return age > 0 ? age: 0;

}
