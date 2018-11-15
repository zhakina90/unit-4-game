
// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.
//first I need to start the document//
    var wins= 0;
    var losses = 0;
    var randResult = 0;
    var compChoice = [];
    var previous= 0;
    // var userTotalScore =[];
    // $(".crystals").attr("class", "red");
    
   var game = function (){
    $(".crystals").empty ();
   randomNum = Math.floor(Math.random() * 101) + 19;
    
   $("#number-to-guess").html("Number to guess:" + randomNum);
    
//    console.log(randomNum);
    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) +1;
        // console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random 
        });
        $(".crystals").append(crystal);
    }
    }
    game();

    $(document).on("click", ".crystals", function (){
      
        var num = parsenInt($(this).attr("data-random"));
        
        previous += num;
        if (previous > randomNum){
            lossses--;
            alert("You Lost!");
            $("#loss-counter").html(losses);
            previous = 0;
            game();
        } else if (previous === randomNum);
        wins++;
        alert("You Won!");
        $("#win-counter").html(wins);
        previous = 0;
        game();


    });

//     var Crystal = {
//         "Color": "blue", 
//         "Color": "green", 
//         "Color": "red", 
//         "Color": "yellow",
//         "pointsvalue ": 0,
    
//     };
// $(document).ready(function() {
//     $("#number-to-guess").text(compChoice);
//    randomNum(19, 120); 
//     compChoice = randomNum([Math.floor(Math.random() * (max - min + 1)) + min]);
     
//     $("#win-counter").html(wins);
//     $("#loss-counter").html(losses);
    
//     $("#total-score").text(userTotalScore);
    
   
//     // var counter= 0;
//     $("#total-score").text(userTotalScore);

//     Crystal.poinstvalue = randomNum(1, 12);
//     alert("Your total score is" + Crystal.poinstvalue;
 
//     $("#blue").on("click", function (){
//      Crystal.poinstvalue += Crystal.pointsvalue;

//     });
//     $("##green").on("click", function (){
//      Crystal.poinstvalue += Crystal.pointsvalue;
//     });
//     $("#red").on("click", function (){
//     Crystal.poinstvalue += Crystal.pointsvalue;
//     });
//      $("#yellow").on("click", function (){
//      Crystal.poinstvalue += Crystal.pointsvalue;
//      });

                      




//       if (counter === compChoice) {
//         alert("You win!");
//     } else if(counter >= compChoice) {
//         alert("You lost!");
//     }
//     })
//     })
    

// Math Random function between 19-120


// UserChoice = Sum of the Crystal Values

// Crystal Values = Random Number 
// Math Random function between **
    

//     $('#randomNumber').text(Random);
//     // Appending random number to the randomNumber id in the html doc
//     //
//     var num1= Math.floor(Math.random()*11+1)
//     var num2= Math.floor(Math.random()*11+1)
//     var num3= Math.floor(Math.random()*11+1)
//     var num4= Math.floor(Math.random()*11+1)
//     // Setting up random numbers for each jewel
//     // Random number has to be between 1 - 12
//     // 
//     var userTotal= 0; 
//     var wins= 0;
//     var losses = 0;
//     //  Decaring variables for tallies
//   $('#numberWins').text(wins);
//   $('#numberLosses').text(losses);
//   //resets the game
//   function reset(){
//         Random=Math.floor(Math.random()*101+19);
//         console.log(Random)
//         $('#randomNumber').text(Random);
//         num1= Math.floor(Math.random()*11+1);
//         num2= Math.floor(Math.random()*11+1);
//         num3= Math.floor(Math.random()*11+1);
//         num4= Math.floor(Math.random()*11+1);
//         userTotal= 0;
//         $('#finalTotal').text(userTotal);
//         } 
//   //adds the wins to the userTotal
//   function yay(){
//   alert("You won!");
//     wins++; 
//     $('#numberWins').text(wins);
//     reset();
//   }
//   //addes the losses to the userTotal
//   function loser(){
//   alert ("You lose!");
//     losses++;
//     $('#numberLosses').text(losses);
//     reset()
//   }
//   //sets up click for jewels
//     $('#one').on ('click', function(){
//       userTotal = userTotal + num1;
//       console.log("New userTotal= " + userTotal);
//       $('#finalTotal').text(userTotal); 
//             //sets win/lose conditions
//           if (userTotal == Random){
//             yay();
//           }
//           else if ( userTotal > Random){
//             loser();
//           }   
//     })  
//     $('#two').on ('click', function(){
//       userTotal = userTotal + num2;
//       console.log("New userTotal= " + userTotal);
//       $('#finalTotal').text(userTotal); 
//           if (userTotal == Random){
//             yay();
//           }
//           else if ( userTotal > Random){
//             loser();
//           } 
//     })  
//     $('#three').on ('click', function(){
//       userTotal = userTotal + num3;
//       console.log("New userTotal= " + userTotal);
//       $('#finalTotal').text(userTotal);
//   //sets win/lose conditions
//             if (userTotal == Random){
//             yay();
//           }
//           else if ( userTotal > Random){
//             loser();
//           } 
//     })  
//     $('#four').on ('click', function(){
//       userTotal = userTotal + num4;
//       console.log("New userTotal= " + userTotal);
//       $('#finalTotal').text(userTotal); 
        
//             if (userTotal == Random){
//             yay();
//           }
//           else if ( userTotal > Random){
//             loser();
//           }
//     });   
//   }); 
  







// var targetNumber = 53;

//   $("#number-to-guess").text(targetNumber);

//   var counter = 0;

//   // Now for the hard part. Creating multiple crystals each with their own unique number value.

//   // We begin by expanding our array to include four options.
//   var numberOptions = [10, 5, 3, 7];

//   // Next we create a for loop to create crystals for every numberOption.
//   for (var i = 0; i < numberOptions.length; i++) {

//     // For each iteration, we will create an imageCrystal
//     var imageCrystal = $("<img>");

//     // First each crystal will be given the class ".crystal-image".
//     // This will allow the CSS to take effect.
//     imageCrystal.addClass("crystal-image");

//     // Each imageCrystal will be given a src link to the crystal image
//     imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

//     // Each imageCrystal will be given a data attribute called data-crystalValue.
//     // This data attribute will be set equal to the array value.
//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//     $("#crystals").append(imageCrystal);
//   }

//   // This time, our click event applies to every single crystal on the page. Not just one.
//   $(".crystal-image").on("click", function() {

//     // Determining the crystal's value requires us to extract the value from the data attribute.
//     // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//     // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//     // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     // We then add the crystalValue to the user's "counter" which is a global variable.
//     // Every click, from every crystal adds to the global counter.
//     counter += crystalValue;

//     // All of the same game win-lose logic applies. So the rest remains unchanged.
//     alert("New score: " + counter);

//     if (counter === targetNumber) {
//       alert("You win!");
//     }

//     else if (counter >= targetNumber) {
//       alert("You lose!!");
//     }

//   });
