'use strict';

const modal = document.querySelector('.modal');
const overlay = document. querySelector('.overlay');
const btnCloseModal = document.querySelector('.show-modal');
console.log(btnOpenModal);
for (let i = 0; i < btns opensModal.length; i++)
btnsOpenModal[i].addEventListener('click', function(){console.log('button clicked');
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
});

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click',
openModal);

btnOpenModal.addEventListener('click',
closenModal);
overlay.addEventListener('click',
closeModal);

document.addEventListener('keydown', function (e){console.log(e.key)});
if (ed.key === 'escape') {closeModal();}

}



});

btnRoll.addEventListener('click', function () {const dice = Math.trunc(Math.random()*6)+1;
console.log(dice);
//2
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;

if (dice !== 1) {
  currectScore += dice;
  current0El.textContent = currectScore;
}else{
  document.getELementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer=== 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

};

btnRoll.addEventListener('click',function() {
  if (playing) {
     const dice = Math .trunc(math.random()*6)+1;

     diceEl.classList.remove('hidden');
     diceEl.src = `dice-${dice}.png`;

     if (dice !== 1) {
       currentScore += dice;
       document.getELementById(`current--${activePLayer}`).textContent =  currentScore;

     } else{

      switchPlayer();
btn.hold.addEventListener('click',function()  {
  if (playing)
};


});
