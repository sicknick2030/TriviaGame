// var buildingAnswers = ["Emire State", "Crystler", "Sears Tower", "Freedom Tower"]
// var questions = ["what is the tallest building in NYC?", 
// "How many boroughs are in NYC?", 
// "what did New York used to be called?", 
// "what is the state tree?",
// "what basketball team plays in brooklyn?",
// "what river seperates NYC from New jersey?",
// "what year did New York become a state?",
// "who was the architect of the Crystlar building?"]

var questions = [{
		
		question:"How many boroughs are in NYC?",
		answer:"5",
		options:["2", "3", "5", "6"],
		img:"<img class='images' src='../TriviaGame/assests/images/5.webp'>",
		right:"YES!!!!!",
		wrong:"Nope, it is 5.",
	
	},

	{
		question:"what is the tallest building in NYC?", 
		answer:"Freedom Tower",
		options:["Empire State", "Chrystler", "Sears Tower", "Freedom Tower"],
		img:"<img class='images' src='../TriviaGame/assests/images/giphy.gif'>",
		right:"YES!!!!!",
		wrong:"Nope, it is the Freedom Tower.",


	},

	{
		question:"what did New York used to be called?",
		answer:"New Amsterdam",
		options: ["New Amsterdam", "New Brittan", "New London", "New Dover"],
		img:"<img class='images' id='amsterdam' src='../TriviaGame/assests/images/amsterdam.jpg'>",
		right:"YES!!!!!",
		wrong:"Nope, it is New Amsterdam.",
	},

	{
		question:"what is the state tree?",
		answer:"Sugar Maple",
		options: ["Longleaf pine", "Sitka spruce", "Sugar Maple","Palo Verde"],
		img:"<img class='images' src='../TriviaGame/assests/images/maple.webp'>",
		right:"YES!!!!!",
		wrong:"Nope, it is the Sugar Maple.",
	},

	{
		question:"what basketball team plays in brooklyn?",
		answer:"Nets",
		options: ["Knicks", "Nets", "Lakers", "Spures"],
		img:"<img class='images' src='../TriviaGame/assests/images/nets.webp'>",
		right:"YES!!!!!",
		wrong:"Nope, it is the Nets.",
	},

	{
		question:"what river seperates NYC from New jersey?",
		answer:"Hudson",
		options: ["Mississippi", "East", "Nile","Hudson"],
		img:"<img class='images' src='../TriviaGame/assests/images/hudson.webp'>",
		right:"YES!!!!!",
		wrong:"Nope, it is Hudson.",
	},

	{
		question:"what year did New York become a state?",
		answer:"1788",
		options: ["1788", "1690", "1704","1822"],
		img:"<img class='images' src='../TriviaGame/assests/images/gangs.gif'>",
		right:"YES!!!!!",
		wrong:"Nope, it is 1788.",
	},

	{
		question: "who was the architect of the Chrystler building?",
		answer:"William Van Alen",
		options: ["Walter Chrysler", "William Van Alen", "Raymond Hood","Frank Lloyd Wright"],
		img:"<img class='images' src='../TriviaGame/assests/images/chrystler.webp'>",
		right:"YES!!!!!",
		wrong:"Nope, it is William Van Alen.",
	},

	{
		question:"0",
		answer:"0",
		options:"0",
	},


]
	var timeleft =20;
	var answerIndex = 0;
	var questionsIndex = 0;
	var notanswered = 0;
	var correct = 0;
	var wrong = 0;
	var imgIndex =0;
	var rightIndex = -1;
	var wrongIndex = -1;

window.onload = function() {
    

    
    var countDown =function (){
    	timeleft--;
	    $("#time").text(timeleft);

	    if(timeleft <= 0){
	    	timeleft = 20;
	        setInterval(downloadTimer);
	    	console.log(notanswered);
	    	notanswered+= 1;
	    	questionsIndex++;
	    	answerIndex++;
	    	imgIndex++;
	    	rightIndex++;
	    	wrongIndex++;
	    	render();
	    }
    
    }
	var downloadTimer = setInterval(countDown ,1000);


	function wait() {
   		 setTimeout(function() {
		 	countDown();
   		 	render();
		 	timeleft = 20; 
		 }, 5000);
	}

	$("#question").on("click", ".buttons", function() {
	 $("#question").empty();  
     $("#question").append(questions[imgIndex].img)
	  	if ($(this).val() == (questions[answerIndex].answer)) {
		    
		    imgIndex++;
		    questionsIndex++;
			answerIndex++;
		    correct++;
		    rightIndex++;
	    	wrongIndex++;
		    $("#question").prepend(questions[rightIndex].right);
		    wait();
		  //   clearInterval(downloadTimer);
		 	// countDown();
		 	// timeleft = 15;
		    
	  	} else {
	  		imgIndex++;
		  	questionsIndex++;
			answerIndex++;
		    wrong++;
		    rightIndex++;
	    	wrongIndex++;
		    $("#question").prepend(questions[wrongIndex].wrong);
		    wait();
		    // render();
		    // timeleft = 15;
		    // setInterval(downloadTimer);
	  	}
	});

	$("#question").on("click", "#reset", function() {
		console.log(),
		setInterval(countDown ,1000);
		imgIndex = 0;
	 	answerIndex = 0;
		questionsIndex = 0;
		notanswered = 0;
		correct = 0;
		wrong = 0;
		rightIndex = -1;
	    wrongIndex = -1;
		timeleft = 20;
		render();
	});

	function render(){
		$("#question").empty();
		setInterval(downloadTimer);
		var i = questionsIndex;
		$("#question").append(questions[i].question+'<br>');
		console.log(questions[i].question)

		for	(var j=0; j<questions[i].options.length; j++){
			$("#question").append('<button class="buttons" id="button' + '-' + j + '" value="' + questions[i].options[j] + '">' + questions[i].options[j]);
			console.log(question)
		}

		function lastQuestion(){
			if (questionsIndex > 7){
				clearInterval(downloadTimer);
			}

		}
		
		if (i > 7) {
			clearInterval(downloadTimer);
			// $('#question').remove();
		    $('#question').html('All Done!');
		    $("#question").append('<h3>Correct Answers: ' + this.correct + '</h3>');
		    $('#question').append('<h3>Incorrect Answers: ' + this.wrong + '</h3>');
		    $('#question').append('<h3>Unanswered: ' + this.notanswered + '</h3>');
			$('#question').append('<button id="reset">Reset</button>');
		}
	}
	render();
		
}







// // window.onload = function(){

// $("#question").html(questions[0]);
// $("#button1").html(buildingAnswers[0]);
// $("#button2").html(buildingAnswers[1]);
// $("#button3").html(buildingAnswers[2]);
// $("#button4").html(buildingAnswers[3]);

// $("#button4").on("click",function() {
// 	$("#answers").html("you are correct");
// 		})
// 	$("#button1, #button2, #button3 ").on("click", function(){
// 	$("#answers").html("you are wrong");
// 		})
// }
	

	

