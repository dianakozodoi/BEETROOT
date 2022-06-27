var playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }

];
const list = document.getElementById('songlist');
playList.map((item) => {
    const li = document.createElement('li');
    list.appendChild(li);
    li.innerHTML = `Author - ${item.author} Song - ${item.song}`
})

//Traffic light
const button = document.getElementById('btn');
const circleRed = document.getElementById('red');
const circleYellow = document.getElementById('yellow');
const circleGreen = document.getElementById('green');
let light = 0;
button.addEventListener('click', () => {
        if (light === 1) {
            circleRed.style.backgroundColor = 'red';
        } else if (light === 2) {
            circleRed.style.backgroundColor = '#666';
            circleYellow.style.backgroundColor = 'yellow';
        } else if (light === 3) {
            circleYellow.style.backgroundColor = '#666';
            circleGreen.style.backgroundColor = 'green';

        } else if (light === 4) {
            circleGreen.style.backgroundColor = '#666';
            circleRed.style.backgroundColor = 'red';
            light = 0;
        }
        light++
    })
    //Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". 
    //Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.
const openBtn = document.getElementById('open_btn');
const closeBtn = document.getElementById('close_btn');
const modalWindow = document.getElementById('window');
openBtn.addEventListener('click', () => {
    modalWindow.style.display = 'block'
});
closeBtn.addEventListener('click', () => {
    modalWindow.style.display = 'none'
})