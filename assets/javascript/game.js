var compRun =0;
var losses = 0;
var wins = 0;
var totalScore = 0;



var startGame = function () {

	$(".cryst").empty();

	var images = ["./assets/images/yellow.png", "./assets/images/green.png", "./assets/images/blue.png","./assets/images/red.png"];
		
	compRun = Math.floor(Math.random() * 101 ) + 19; 


	$("#comp-choice").html('Random Result: ' + compRun);

	for(var i = 0; i < images.length; i++){

		var random = Math.floor(Math.random() * 11) + 1;

		var crystNum = $("<div>");
			crystNum.attr({
				"class": 'cryst',
				"data-random": random
			});
			
		$(".cryst").append(crystNum);

	}

	$("#totalScore").html("Total Score: " + totalScore);

}

startGame();

$(document).on('click', ".cryst", function () {

	var num = parseInt($(this).attr('data-random'));

	totalScore += num;


	$("#totalScore").html("Total score: " + totalScore);


	if(totalScore > compRun){

		lost++;

		$("#loss-counter").html("You lost: " + losses);

		totalScore = 0;

		startGame();

	} 
	else if(totalScore === compRun){

		win++;

		$("#win-counter").html("You win: " + wins);

		totalScore= 0;

		startGame();

	}

});















// // * The random number shown at the start of the game should be between 19 - 120.

// // * Each crystal should have a random hidden value between 1 - 12.
// //first I need to start the document//
//     var wins= 0;
//     var losses = 0;
//     // var randResult = 0;
//     var result = 0;
//     var randomNum ="";
//     var images = ["./assests/images/yellow.png", "./assests/images/grren.png", "./assests/images/blue.png","./assests/images/red.png"];
   
    
//     var beginGame = function (){
//     $(".crystals").empty ();
  
//    randomNum = Math.floor(Math.random() * 101) + 19;
    
//    $("#number-to-guess").html("Number to guess:" + randomNum);
    
//    console.log(randomNum);
//    //tried to add images.length instead of 4, but somehow it didn't work
//     for (var i = 0; i < 4; i++) {
//         var userRandom = Math.floor(Math.random() * 11) +1;
        
//         console.log(userRandom);
//         var crystal = $("<div>");
        
      
//         $(".crystals").append(crystal);
//     };
//    $("#previous").html("Total Score: " + result);
//     }
    
//     beginGame();

//     $(document).on("click", ".crystals", function (){
      
//         var num = parseInt($(this).attr("data-random"));
        
//         result += num;
//         $("#previous").html("Total Score: " + result);
 
//         if (result > randomNum){
//             lossses++;
           
//             $("#loss-counter").html(losses);
//             // result = 0;
//             game();
//         } else if (result === randomNum);{
//         wins++;
//         $("#win-counter").html(wins);
//         // result = 0;
//         beginGame();
        
//     }

//     });


