//gloval variables
//created an object to hold the name and value of the crystals
var crystal = {
    one:
    {
        name: "one",
        value: 0
    },
    two:
    {
        name: "two",
        value: 0
    },
    three:
    {
        name: "three",
        value: 0
    },
    four:
    {
        name: "four",
        value: 0
    }
}

var crystalScore = 0;
var targetScore = 0;


var wins = 1;
var losses = 1;
// ==========================================================
//this function to return a value between the min  and the max so we do ot need to do the math.floor. random for each of the crystals or the target number. 
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startgame = function () {
    crystalScore = 0;

    //set the new target score between 
   targetScore = getRandom(19, 120)

    //set diffent values for the crystals
    crystal.one.value = getRandom(1, 12);
    crystal.two.value = getRandom(1, 12);
    crystal.three.value = getRandom(1, 12);
    crystal.four.value = getRandom(1, 12);

    console.log("============")
    console.log("target score: " + targetScore)
    console.log("1" + crystal.one.value + "\n" + "2" + crystal.two.value + "\n" + "3" + crystal.three.value + "\n" + "4" + crystal.four.value)
    console.log("==============")

    //change html to reflect the target score and the changes in the current score
    $("#yourScore").html("Your total score is: " + crystalScore);
    $("#targetScore").html("Target score: " + targetScore);

}



//a function that passes the crystals so that the value of the crystals is added
var addValue = function (crystal) {
    crystalScore = crystalScore + crystal.value;

    
    //change html to reflext current score
    $("#yourScore").html("Your total score is: " + crystalScore);

    console.log("your score" + crystalScore)

    checkScore();
  
}

var checkScore = function(){
    console.log("targetScore" + targetScore + "\n" + "crystalScore" + crystalScore)

    if (targetScore === crystalScore) {
        $("#wins").html("Wins: " + wins)
        alert("Congratulations! You won!");
        wins++;
        startgame();
    }
    else if (crystalScore > targetScore) {
        $("#losses").html("Loss count: " + losses);
        alert("You lost. Please try again");
        losses++;
        startgame();

    }
}
// // main process===============================================
//on chick events for each of the crystals so that the value of each of the crysstals is added depending on whitch crystal clicked.


//invokin the function startgame to start the game
startgame();

$("#one").on("click", function () {
    addValue(crystal.one);

});

$("#two").on("click", function () {
    addValue(crystal.two);
});

$("#three").on("click", function () {
    addValue(crystal.three);
});

$("#four").on("click", function () {
    addValue(crystal.four);
});

