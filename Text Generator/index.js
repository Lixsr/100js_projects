const text = document.getElementById('text');
const author = document.getElementById('author');
const btn = document.getElementById('generateBtn');
const api = 'https://api.quotable.io/random';

getQuote();
for(i=0; i< 200; i++)
    getQuote();
async function getQuote(){
    btn.disabled = true;
    btn.style.color = 'black';
    text.innerHTML = "Loading";
    author.innerHTML = "Loading";
    btn.innerText = "Loading";
    const response = await fetch(api);
    const quote = await response.json();
    if(response.ok){
        text.innerHTML = quote.content;
        author.innerHTML = `~ ${quote.author}`;
        btn.innerText = "Generate" ;
        btn.disabled = false;
    }else{
        text.innerHTML = 'Too manyu requests, Try again in a minute.';
        author.innerHTML = ``;
        btn.innerText = "Try Again" ;
        btn.disabled = false;
        btn.style.color = 'red';
    }
    
}

btn.addEventListener('click', getQuote)