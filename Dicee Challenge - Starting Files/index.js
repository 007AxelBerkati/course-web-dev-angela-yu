let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
let randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

let dice1 = './images/dice' + randomNumber1 + '.png';
let dice2 = './images/dice' + randomNumber2 + '.png';

document.querySelector('.dice img').setAttribute('src', dice1);
document.querySelectorAll('.dice img')[1].setAttribute('src', dice2);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 1 WINS!';
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 2 WINS!';
} else if (randomNumber1 === randomNumber2) {
  document.querySelector('h1').innerHTML = 'DRAW!';
}
