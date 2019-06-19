        var wins = 0
        var losses = 0
        var playerScore;
        var imgArr = [];

        //need to generate random number between 19 and 120
        var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log(randomNumber)
        //insert that random number into the html file
        $("#randomNumber").text(randomNumber);


        for (i = 0; i < 4; i++) {
            imgArr.push(Math.floor(Math.random() * 12 + 1));
            console.log(imgArr[i])
        }
        var imgbtn = $("#totalScore");
        imgbtn.attr("data-crystals", imgArr[i]);
        $("#totalScore").append(imgArr);
        console.log(imgbtn)

        $("#shapeImage").on("click", function () {
            var imageValue = $("<img>");
            $("#totalScore").text(attr("data-crystals"));
            playerScore += imageValue;

        });


        //wins +1 if player score equals to the random number
        //computer generates another random number and the value of the images changes
        if (playerScore === randomNumber) {
            wins++
            var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            var imageValue = Math.floor(Math.random() * 12);
        }
        // if the player score is higher than the random number losses +1
        // computer generates another random number and the value of the images changes
        if (playerScore > randomNumber) {
            losses++
            var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            var imageValue = Math.floor(Math.random() * 12);
        }

