const elDice = document.getElementById('dice');
const elRoll = document.getElementById('roll');

const elAdvice = document.getElementById('advice');
const elAdviceId = document.getElementById('adviceId');

elRoll.onclick = function(){
	rollDice();
	elAdvice.classList.add('fade');
	elAdviceId.classList.add('fade');
	setTimeout(getAdvice, 950);
	setTimeout(function(){
		elAdvice.classList.remove('fade');
		elAdviceId.classList.remove('fade');
	}, 960)
};

function rollDice() {
	let dice = Math.floor((Math.random() * 6) + 1);

	for (let i = 1; i <= 6; i++) {
		elDice.classList.remove('show-' + i);
		if (dice === i) {
		elDice.classList.add('show-' + i);
		}
	}
}