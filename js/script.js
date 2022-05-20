let cards = [
    {
        name: 'butterfly',
        picture: 'media/butterfly.png',
        order: 1
    },
    {
        name: 'dog',
        picture: 'media/dog.png',
        order: 1
    },
    {
        name: 'dolphin',
        picture: '',
        order: 1
    },
    {
        name: 'elephant',
        picture: '',
        order: 1
    },
    {
        name: 'flamingo',
        picture: '',
        order: 1
    },
    {
        name: 'frog',
        picture: '',
        order: 1
    },
    {
        name: 'giraffe',
        picture: '',
        order: 1
    },
    {
        name: 'lion',
        picture: '',
        order: 1
    },
    {
        name: 'pig',
        picture: '',
        order: 1
    },
    {
        name: 'squirrel',
        picture: '',
        order: 1
    },
]
const allCards= document.getElementById("allCards");
const templateCards= document.getElementById("templateCards")

play();

function play() {
    allCards.innerHTML = '';
    for (let i = 0; i < cards.length; i++) {
        const item = templateCards.content.cloneNode(true);
        item.querySelector('.front').src=cards[i].picture;
        allCards.append(item);
        console.log(cards[i]);
    }
    // loop over array of cards
        // for each card in array: display the card in allCards based on template 'templateCards'
    console.log("play");
}