let cardOne;





function flipCard(id, name) {
    if (!cardOne) {
        document.getElementById(id).src = 'media/' + name + '.png';
        cardOne = name;
    } else {
        if (cardOne == name) {
            document.getElementById(id).src = 'media/' + name + '.png';
        } else {
            let arrCards = document.getElementsByClassName(cardOne);
            for (let i = 0; i < arrCards.length; i++) {
                arrCards[i].src = 'media/back_psyduck.png';
            }
        }
        cardOne = null;
    }

}