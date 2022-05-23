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
        picture: 'media/elephant.png',
        order: 1,
        turned: false,
    },
    {
        name: 'flamingo',
        picture: 'media/flamingo.png',
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
let playCards = [...cards, ...cards].map((card, index) => {
    return {
        ...card,
        id: index
    }
});
let card1;
let card1Index;
let card2;
let card2Index;


console.log(playCards);

const allCards = document.getElementById("allCards");
const templateCards = document.getElementById("templateCards")

play();

function play() {
    allCards.innerHTML = '';
    renderCards();
}


function renderCards() {
    allCards.innerHTML = '';
    for (let i = 0; i < playCards.length; i++) {
        const item = templateCards.content.cloneNode(true);
        item.querySelector('.front').src = playCards[i].picture;
        item.querySelector('.front').alt = playCards[i].name;
        item.querySelector('.front').style.display = playCards[i].turned ? 'inline' : 'none';
        item.querySelector('.back').style.display = playCards[i].turned ? 'none' : 'inline';
        item.querySelector('.card').addEventListener("click", function ($event) {
            toggleCard(i, playCards[i].name);
            renderCards();
        })
        allCards.append(item);
    }

function toggleCard(id, name) {

    if (card1 === undefined) {
        card1 = name;
        card1Index = id;
        console.log(card1, card2, name);
    } else if (card2 === undefined) {
        card2 = name;
        card2Index = id;
        if (card1 == card2) {

        } else {
            playCards[card1Index].turned = false;
            playCards[card2Index].turned = false;
        }
        console.log(card1, card2, name);
        console.log('verify cards');

    }
    playCards[id].turned = !playCards[id].turned
}


/*

for (let i = 0; i < playCards.length; i++) {
    if (playCards[i].turned == true) {

    }
}

function shuffle (){
   shuffle(cards)
    cards.order = cards.index
}

 */



















/*



let cardOne
let cardTwo
let isLocked= false;
let isTurned= false

function checkForMatch() {
    if (cardOne === cardTwo) {
        disableCards();
        return;
    }
    unFlipCards();
}

function disableCards() {
    cardOne.removeEventListener('click', flipCard);
    cardTwo.removeEventListener('click', flipCard);

    restart();
}

function flipCard() {
    if (isLocked || this === cardOne) return;

    this.classList.add('flip');

    if (!isTurned) {
        isTurned = true;
        cardOne = this;
        return;
    }
    cardTwo = this;

    checkForMatch();
}
function unFlipCards() {
    isLocked = true;

    setTimeout(() => {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');

        restart();
    }, 1000)
}
function restart() {
    isTurned = false;
    isLocked = false;
    cardOne = null;
    cardTwo = null;
}

 */
