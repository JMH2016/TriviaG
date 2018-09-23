var triviaQuestions = [{
	question: "In RoboCop (1987), what is the name of the officer who becomes RoboCop?",
	answerList: ["Warren Reed", "Leon Nash", "Alex Murphy", "Adam Lewis"],
	answer: 2
},{
	question: "What cyberpunk movie did Keanu Reeves film beside The Matrix?",
	answerList: ["Total Recall", "Hardware", "Tron", "Johnny Mnemonic"],
	answer: 3
},{
	question: "What does a 'Red Ball' in Minority Report indicate",
	answerList: ["That someone was killed", "That someone is pre-meditating a homicide", "That someone is about to murder someone without pre-meditation", "That someone has committed a thought crime"],
	answer: 2
},{
	question: "In Blade Runner, what is the name of the machine used to determine if a person is a replicant or human?",
	answerList: ["Voight-Kampff machine", "Polygraph & Eye Dilation machine", "Replicant 9000", "Rude Goldberg device"],
	answer: 0
},{
	question: "In Tron: Legacy, Kevin Flynn created _________ to oversee the development of the Grid and is the main antagonist of the film.",
	answerList: ["Vector", "Tron", "CLU", "A.C.E"],
	answer: 2
},{
	question: "In Total Recall (1990), what was Douglas Quaid's day job?",
	answerList: ["Construction Worker", "Machine Welder", "Computer Programmer", "Miner"],
	answer: 0
},{
	question: "In The Matrix, how do people leave the Matrix and return to the real world?",
	answerList: ["Through a computer", "Through a landline telephone", "Through a pager", "Through a special electronic device"],
	answer: 1
},{
	question: "In Looper, when the the mob wants to 'close the loop' by sending back Joe's future self for assassination, what reward is given?",
	answerList: ["Money", "Gold Bars", "Jewels", "A Red Rose"],
	answer: 1
},{
	question: "In The Fifth Element, what happens when the 4 stones are united with the supreme being (the fifth element)?",
	answerList: ["They grant one wish", "They neutralize the power of the great evil that threatens Earth", "They let the user control the elements", "They do nothing, and are only symbolic of humanity itself"],
	answer: 1
},{
	question: "In Gattaca, how does Vincent Freeman primarily escape detection of his inferior genetics?",
	answerList: ["He bribes security", "He has genetically superior blood pumped into his system to mimic superior genetics", "He uses synthetic blood to fake tests", "He uses samples of someone else's blood who has superior genetics"],
	answer: 3
},{
	question: "Abre los ojos (Open Your Eyes) is a Spanish cyberpunk film that was remade in the US under what title?",
	answerList: ["New Rose Hotel", "Vanilla Sky", "Nemesis", "Strange Days"],
	answer: 1
},{
	question: "What is the premise of the movie Logan's Run?",
	answerList: ["A talented programmer is trapped into his own digital world and must try to escape", "A data courier who has a secret stash of information implanted into his mind must attempt to deliver it before it kills him", "All lives are terminated at the age of 30", "Thought police oppress citizens and closely monitor daily activities"],
	answer: 2
},{
	question: "In Ex Machina, what was the test used to prove that the robot was intelligent?",
	answerList: ["Turing test", "To see if a human could be so convinced that the robot is intelligient, that he or she would help it escape", "Through creative challenges that only a human could produce", "A test to measure if the robot could act outside of its core programming"],
	answer: 1
},{
	question: "Which of the below cyberpunk film(s) were added to the National Film Registry for preservation and safeguarding for future generations?",
	answerList: ["Terminator", "The Matrix", "Blade Runner", "All of the above"],
	answer: 3
},{
	question: "'How many official live-action RoboCop movies have been released?",
	answerList: ["1", "2", "3", "4"],
	answer: 3
},{
	question: "This cyberpunk movie takes place after WWIII in a reconstructed Neo-Tokyo in 2019 and is considered by many critics to be one of the greatest animated sci-fi films of all time.",
	answerList: ["Ghost in the Shell", "Genocyber", "Neo Tokyo", "Akira"],
	answer: 3
},{
	question: "In WarGames, how was the War Operation Plan Response supercomputer defeated?",
	answerList: ["By making it defeat itself in an endless loop of tic-tac-toe", "By infecting it with a computer virus", "By having it infinitely calculate the value of Pi", "By feeding it an infinite algorithmic puzzle"],
	answer: 0
},{
	question: "Released in 1937, this cyberpunk film takes place in a futuristic urban dystopian city in 2027 and is considered a classic.",
	answerList: ["Futureworld", "Schismatrix", "Metropolis", "Noir"],
	answer: 2
},{
	question: "Which cyberpunk movie feature a place where nobody seems to realize it is always night, and was picked by Roger Ebert as the film of the year in 1998.",
	answerList: ["Noir", "Dark City", "Andromedia", "Avalon"],
	answer: 1
},{
	question: "Where did the movie eXistenZ get its name from?",
	answerList: ["It is a reference to the aliens in the movie who are from the planet XZ", "It is the name of a video game in the movie", "It was most voted for in a fan contest", "It was a name given by the original writer's daughter"],
	answer: 1
},{
	question: "Who played Judge Dredd in the Dredd 2012 reboot film?",
	answerList: ["Karl Urban", "Tom Hardy", "Gerard Butler", "Thomas Jane"],
	answer: 0
}
];

var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13','question14','question15','question16','question17','question18','question19','question20','question21'];
var currentQuestion; 
var correctAnswer; 
var incorrectAnswer; 
var unanswered; 
var seconds; 
var time; 
var answered; 
var userSelect;
var messages = {
	correct: "Yap, you got it!",
	incorrect: "Nuh, that's not it.",
	endTime: "Time!",
	finished: "Alright! Let's see how well you know the stuff."
}

$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;
	
	//sets up new questions & answerList
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}

function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();

	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	$('#gif').html('<img src = "assets/images/'+ gifArray[currentQuestion] +'.gif" width = "400px">');
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('Actually: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('No Idea? It\'s not that hard: ' + rightAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}	
}

function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();

	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Right: " + correctAnswer);
	$('#incorrectAnswers').html("Wrong: " + incorrectAnswer);
	$('#unanswered').html("Chill: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Come on, again?');
}