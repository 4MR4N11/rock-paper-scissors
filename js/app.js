const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
var maxScore;
var playerScore = 0;
var computerScore = 0;
var checkreset = 0;

function toggleRoundContent() {
	var originalContent = document.getElementById('initial-buttons');
	var newContent = document.getElementById('initial-rounds');
	
	originalContent.classList.toggle('hidden');
	newContent.classList.toggle('hidden');
}

function toggleGameContent() {
	var originalContent = document.getElementById('initial-content');
	var newContent = document.getElementById('game-content');
	var inputElement = document.getElementById('max-score');
	maxScore = parseInt(inputElement.value, 10);
	
	originalContent.classList.toggle('hidden');
	newContent.classList.toggle('hidden');
}

function playerChoice(choice) {
	var choiceElement = document.getElementById(choice);
    var allChoiceElements = document.getElementsByClassName('choice');
	
	
    for (var i = 0; i < allChoiceElements.length; i++) {
		allChoiceElements[i].classList.remove('highlight');
    }
    
    if (choiceElement) {
		choiceElement.classList.add('highlight');
    }
	const computer = Math.floor(Math.random() * 3) + 1;
	computerChoice(computer);
	compare(choice, computer);
	checkScore();
}

function checkScore() {
	var originalContent = document.getElementById('game-content');
	var win = document.getElementById('win');
	var lose = document.getElementById('lose');

	if (playerScore === maxScore) {
		setTimeout(function() {
			originalContent.classList.toggle('hidden');
			win.classList.toggle('hidden');
			checkreset = 1;
		}, 1000);
	}
	else if (computerScore === maxScore) {
		setTimeout(function() {
			originalContent.classList.toggle('hidden');
			win.classList.toggle('hidden');
			checkreset = 2;
		}, 1000);
	}
	else {
		return;
	}
}

function resetGame() {
	var originalContent = document.getElementById('initial-content');
	var win = document.getElementById('win');
	var lose = document.getElementById('lose');
	var computerScoreId = document.getElementById('computer-score');
	var playerScoreId = document.getElementById('player-score');
	var inputElement = document.getElementById('max-score');
	
	var allChoiceElements = document.getElementsByClassName('choice');
	var allCompChoiceElements = document.getElementsByClassName('comChoice');

	for (var i = 0; i < allCompChoiceElements.length; i++) {
		allCompChoiceElements[i].classList.remove('highlight');
	}
	for (var i = 0; i < allChoiceElements.length; i++) {
		allChoiceElements[i].classList.remove('highlight');
	}
	if (checkreset === 1) {
		win.classList.toggle('hidden');
	}
	else if (checkreset === 2) {
		lose.classList.toggle('hidden');
	}
	originalContent.classList.toggle('hidden');
	computerScoreId.textContent = computerScore = 0;
	playerScoreId.textContent = playerScore = 0;
	inputElement.value = maxScore = 1;
}

async function compare(choice, computer) {
	var computerScoreId = document.getElementById('computer-score');
	var playerScoreId = document.getElementById('player-score');

	if (choice === 'rock' && computer === 2) {
		computerScoreId.textContent = computerScore += 1;
		return;
	}
	else if (choice === 'rock' && computer === 3) {
		playerScoreId.textContent = playerScore += 1;
		return;
	}
	else if (choice === 'paper' && computer === 1) {
		playerScoreId.textContent = playerScore += 1;
		return;
	}
	else if (choice === 'paper' && computer === 3) {
		computerScoreId.textContent = computerScore += 1;
		return;
	}
	else if (choice === 'scissors' && computer === 1) {
		computerScoreId.textContent = computerScore += 1;
		return;
	}
	else if (choice === 'scissors' && computer === 2) {
		playerScoreId.textContent = playerScore += 1;
		return;
	}
	else {
		return;
	}
}

async function computerChoice(computer) {
	await sleep(1000);
	var computerChoices = { 'rock': 1, 'paper': 2, 'scissors': 3}
	var computerChoice1 = document.getElementById('choice1');
	var computerChoice2 = document.getElementById('choice2');
	var computerChoice3 = document.getElementById('choice3');
	var allChoiceElements = document.getElementsByClassName('comChoice');

	if (computer === computerChoices.rock) {
		for (var i = 0; i < allChoiceElements.length; i++) {
			allChoiceElements[i].classList.remove('highlight');
		}
		
		if (computerChoice1) {
			computerChoice1.classList.add('highlight');
		}
	}
	else if (computer === computerChoices.paper) {
		for (var i = 0; i < allChoiceElements.length; i++) {
			allChoiceElements[i].classList.remove('highlight');
		}
		
		if (computerChoice2) {
			computerChoice2.classList.add('highlight');
		}
	}
	else {
		for (var i = 0; i < allChoiceElements.length; i++) {
			allChoiceElements[i].classList.remove('highlight');
		}
		
		if (computerChoice3) {
			computerChoice3.classList.add('highlight');
		}
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}