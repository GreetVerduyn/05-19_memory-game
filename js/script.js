let cards = [
    {
        name: 'butterfly',
        picture: 'media/butterfly.png',
        order: 1,
        turned: false,
    },
    {
        name: 'dog',
        picture: 'media/dog.png',
        order: 1,
        turned: false,
    },
    {
        name: 'dolphin',
        picture: 'media/dolphin.png',
        order: 1,
        turned: false,
    },
    {
        name: 'elephant',
        picture:  'media/elephant.png',
        order: 1,
        turned: false,
    },
    {
        name: 'flamingo',
        picture:  'media/flamingo.png',
        order: 1,
        turned: false,
    },
    {
        name: 'frog',
        picture: 'media/frog.png',
        order: 1,
        turned: false,
    },
    {
        name: 'giraffe',
        picture: 'media/giraffe.png',
        order: 1,
        turned: false,
    },
    {
        name: 'lion',
        picture: 'media/lion.png',
        order: 1,
        turned: false,
    },
    {
        name: 'pig',
        picture: 'media/pig.png',
        order: 1,
        turned: false,
    },
    {
        name: 'squirrel',
        picture: 'media/squirrel.png',
        order: 1,
        turned: false,
    },
];
let playCards = [...cards, ...cards];
const allCards= document.getElementById("allCards");
const templateCards= document.getElementById("templateCards")

play();

function play() {
    allCards.innerHTML = '';
    for (let i = 0; i < playCards.length; i++) {
        const item = templateCards.content.cloneNode(true);
        item.querySelector('.front').src=playCards[i].picture;
        item.querySelector('.front').alt=playCards[i].name;
        item.querySelector('.front').style.display = playCards[i].turned ? 'inline' :'none';
        item.querySelector('.back').style.display = playCards[i].turned ? 'none' :'inline';
        item.querySelector('.card').addEventListener("click", function ($event) {
            //console.log('test', playCards[i].name);
            playCards[i].turned = !playCards[i].turned;
        })
        allCards.append(item);

    }


}