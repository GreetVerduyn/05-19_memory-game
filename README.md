# Title: Memory game
https://greetverduyn.github.io/05-19_memory-game/

## Learning Objectives
- Change things in the DOM (Aka canvas = cheating)
- Array manipulation

## MY CODE
- [x] 20 cards, 10 different images + back
- [x] text: explanation game
- [x] array with all cards (needs to be mapped) , 
- [x] lay out game: difficult, I tried to use display flex
- [x] add function to play button
  - [x] display cards dynamically in the game (template: code was very long so I created a template (I had to search a lot for this)
    // loop over array of cards
    // for each card in array: display the card in allCards based on template 'templateCards' + change some 'personal' information)
- [] random ordering of the cards: 
- [] choice (click): turn card 1 <-> turn card 2: 
  - same => ok
  - different card: turn back  
  - TIMER NODIG OM KAARTEN OM TE DRAAIEN
- [] create a flexbox to do the positioning of the card
- [] template HTML to make content dynamic



## The Mission
We want to recreate the game `memory`. It is a game where  you have a bunch of cards. Each card contains an image. 
Of each image there are exactly two cards. The cards are placed in a random order. You get to turn them around. 
If you turned around two cards they either turn back so you can't see their image if they did not match. 
And if they did match they stay image face visible.

### Nice-to-have features
- Make it playable by keyboard
- Let a user define custom image urls
- Make it pleasing to look at
- Multiplayer (local)

### Tips (You might want to only read this if you are stuck)

Here is a good way to split up the work. You might want to try to split it up even further:

- Have a bunch of square images (hard code their order, use html)
- Make them turn on click
- Make their order random using javascript
- Turn them back around if you clicked two
- Then implement the logic to only turn back if they don't match

![You've got this!](http://78.media.tumblr.com/f9247799ae2fe6613f643957020101c6/tumblr_inline_n80n8u8pSz1sbdww6.gif)
5-19_memory-game