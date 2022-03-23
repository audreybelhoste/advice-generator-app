window.onload = getAdvice();

function getAdvice(){
	fetch("https://api.adviceslip.com/advice")
	.then(
		res => res.json())
	.then(data => displayAdvice(data))
}

function displayAdvice(data){
	elAdvice.innerHTML = data.slip.advice;
	elAdviceId.innerHTML = data.slip.id;
}
	