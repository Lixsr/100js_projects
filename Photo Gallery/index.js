
api_url = 'https://api.unsplash.com/photos';
const access_key = 'SRQ6HuhOcvKWUCkqA5cojfUynlhh2PnS5j0HD8-yOlY';
const errorEl = document.getElementById('errorMS');
const getPhotosBtn = document.querySelector('.getPhotos');
const numberEl = document.getElementById('num');
const imagesContainer = document.querySelector('.photos-container');


getPhotosBtn.addEventListener('click', () => {
    const count = numberEl.value;
    const min = Number(numberEl.getAttribute('min'));
    const max = Number(numberEl.getAttribute('max'));

    if (count < min || count > max){
        errorEl.innerHTML = 'Number should be between 0 and 11';
        errorEl.classList.remove('hidden');
    }
    else {
        errorEl.classList.add('hidden');
        getPhotos(count);
    }
});

async function getPhotos(count){
    let newImg;
    getPhotosBtn.style.display = 'none';
    errorEl.classList.add('hidden');
    try{
        imagesContainer.innerHTML = '<img src="spinner.svg" />';
        const response = await fetch(`${api_url}?client_id=${access_key}&count=${count}&page=${Math.floor(Math.random() * 1000)}`);
        const data = await response.json();
        imagesContainer.innerHTML = '';
        for(let i = 0; i< count; i++){
            newImg = document.createElement('img');
            newImg.classList.add('image');
            newImg.src = data[i].urls.small;
            newImg.alt = data[i].current_user_collections.title;
            
            imagesContainer.append(newImg);
        }
    }catch (error) {
        console.error();
        errorEl.innerHTML = 'An error occured, try again later';
        errorEl.classList.remove('hidden');
    }
    getPhotosBtn.style.display = 'block';

}