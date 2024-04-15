const emoji = document.querySelector('.emoji');
const emojiUnicode= document.querySelector('.unicodename');
let rand;

const API_URL = 'https://emoji-api.com/emojis';
const access_key = '52ffcb07c8837c08216dd50183dd6640aecfa98b';

let emojis = [];
getEmojis();

emoji.addEventListener('click', () => {
    rand = Math.floor(Math.random() * emojis.length);
    emoji.innerText = emojis[rand].emoji;
    emojiUnicode.innerText = emojis[rand].unicode;
});


async function getEmojis(){
    const response = await fetch(`${API_URL}?
                                &access_key=${access_key}`);
    const emojiOBs = await response.json();
    for (let i = 0; i < emojiOBs.length; i++){
        emojis.push({
            emoji: emojiOBs[i].character,
            unicode: emojiOBs[i].unicodeName,
        });
    }
}
