$(document).ready(function() {

    var players = [

        obiWan = {
            name: "Obi-Wan",
            hp: 150,
            initialAttack: 10,
            attack: 5,
            counterAttack: 12,
            isPlayerOne : false,
            isPlayerTwo : false,
            
        },

        luke = {
            name: "Luke Skywalker",
            hp: 130,
            initialAttack: 10,
            attack: 8,
            counterAttack: 10,
            isPlayerOne : false,
            isPlayerTwo : false,
        },

        darthVader = {
            name: "Darth Vader",
            hp: 170,
            initialAttack: 3,
            attack: 3,
            counterAttack: 20,
            isPlayerOne : false,
            isPlayerTwo : false,
        },

        yoda = {
            name: "Yoda",
            hp: 120,
            initialAttack: 5,
            attack: 12,
            counterAttack: 25,
            isPlayerOne : false,
            isPlayerTwo : false,
        }]
    
    var player;
    var opponent;
    playerOneSelected = false;
    playerTwoSelected = false;
    gameStart = false;
    var enemiesLeft = players.length -1;

    // Character Sounds (I wanted to add more sounds, but had to prioritize getting the game to work
    // correctly first as it was taking longer than expected. Will add more sounds later for portfolio.)
    var lightsaberSound = new Audio ("assets/audio/lightsaber_clash.mp3");
    var obiWanSelect = new Audio ("assets/audio/#");
    var lukeSelect = new Audio ("assets/audio/#");
    var vaderSelect = new Audio ("assets/audio/#");
    var yodaSelect = new Audio ("assets/audio/#");
    var playButton = new Audio ("assets/audio/play_Button.mp3");
    var victory = new Audio ("assets/audio/victory.mp3");
    var defeat = new Audio ("assets/audio/defeat.mp3")
    choosePlayer();
    startBattle();

    function choosePlayer(){
        $("#Obi-Wan").on("click", function() {
            if (playerOneSelected === false){
                    console.log("Obi-Wan is player one");
                playButton.play();
                $("#Obi-Wan").appendTo("#player-fight-area");
                $("#player-name").text(obiWan.name);
                $("#player-hp").text("Force Remaining");
                $("#player-total-hp").text(obiWan.hp);
                playerOneSelected = true;
                obiWan.isPlayerOne = true;
                player = obiWan;
                $("#Obi-Wan").addClass("flipped");
                //play sound
                    console.log("player one is " + playerOneSelected);
                setTimeout(enemySelect, 1000 *2);
                }

        });

        $("#Luke").on("click", function() {
            if (playerOneSelected === false){
                    console.log("Luke Skywalker is player one");
                playButton.play();
                $("#Luke").appendTo("#player-fight-area");
                $("#player-name").text(luke.name);
                $("#player-hp").text("Force Remaining");
                $("#player-total-hp").text(luke.hp);
                playerOneSelected = true;
                luke.isPlayerOne = true;
                player = luke;
                $("#Luke").addClass("flipped");
                //play sound
                setTimeout(enemySelect, 1000 *2);
                    console.log("player one is " + playerOneSelected)
                }

        });

        $("#Yoda").on("click", function() {
            if (playerOneSelected === false){
                    console.log("Yoda is player one");
                playButton.play();
                $("#Yoda").appendTo("#player-fight-area");
                $("#player-name").text(yoda.name);
                $("#player-hp").text("Force Remaining");
                $("#player-total-hp").text(yoda.hp);
                playerOneSelected = true;
                yoda.isPlayerOne = true;
                player = yoda;
                $("#Yoda").addClass("flipped");
                //play sound
                setTimeout(enemySelect, 1000 *2);
                    console.log("player one is " + playerOneSelected)
                }

        });

        $("#Darth-Vader").on("click", function() {
            if (playerOneSelected === false){
                    console.log("Darth Vader is player one");
                playButton.play();
                $("#Darth-Vader").appendTo("#player-fight-area");
                $("#player-name").text(darthVader.name);
                $("#player-hp").text("Force Remaining");
                $("#player-total-hp").text(darthVader.hp);
                playerOneSelected = true;
                darthVader.isPlayerOne = true;
                player = darthVader;
                $("#Darth-Vader").addClass("flipped");
                //play sound
                setTimeout(enemySelect, 1000 *2);
                    console.log("player one is " + playerOneSelected)
                }

        });
    }

    function enemySelect(){
        $("#select-text").text("Choose Your Enemy!")
        $("#Obi-Wan").on("click", function() {
            if (playerTwoSelected === false && obiWan.isPlayerOne === false){
                    console.log("Obi-Wan is player two");
                playButton.play();
                $("#Obi-Wan").appendTo("#opponent-fight-area");
                $("#oppenent-name").text(obiWan.name);
                $("#opponent-hp").text("Force Remaining");
                $("#opponent-total-hp").text(obiWan.hp);
                playerTwoSelected = true;
                isPlayerTwo = true;
                gameStart = true;
                opponent = obiWan;
                $("#select-text").text("")
                // play sound
                    console.log("Player two is " + playerTwoSelected)
                }
        });

        $("#select-text").text("Choose Your Enemy!")
        $("#Luke").on("click", function() {
            if (playerTwoSelected === false && luke.isPlayerOne === false){
                    console.log("Luke Skywalker is player two");
                playButton.play();
                $("#Luke").appendTo("#opponent-fight-area");
                $("#oppenent-name").text(luke.name);
                $("#opponent-hp").text("Force Remaining");
                $("#opponent-total-hp").text(luke.hp);
                playerTwoSelected = true;
                isPlayerTwo = true;
                gameStart = true;
                opponent = luke;
                $("#select-text").text("")
                // play sound
                    console.log("Player two is " + playerTwoSelected)
                }
        });

        $("#select-text").text("Choose Your Enemy!")
        $("#Yoda").on("click", function() {
            if (playerTwoSelected === false && yoda.isPlayerOne === false){
                    console.log("Yoda is player two");
                playButton.play();
                $("#Yoda").appendTo("#opponent-fight-area");
                $("#oppenent-name").text(yoda.name);
                $("#opponent-hp").text("Force Remaining");
                $("#opponent-total-hp").text(yoda.hp);
                playerTwoSelected = true;
                isPlayerTwo = true;
                gameStart = true;
                opponent = yoda;
                $("#select-text").text("")
                // play sound
                    console.log("Player two is " + playerTwoSelected)
                }
        });

        $("#select-text").text("Choose Your Enemy!")
        $("#Darth-Vader").on("click", function() {
            if (playerTwoSelected === false && darthVader.isPlayerOne === false){
                    console.log("Darth Vader is player two");
                playButton.play();
                $("#Darth-Vader").appendTo("#opponent-fight-area");
                $("#oppenent-name").text(darthVader.name);
                $("#opponent-hp").text("Force Remaining");
                $("#opponent-total-hp").text(darthVader.hp);
                playerTwoSelected = true;
                isPlayerTwo = true;
                gameStart = true;
                opponent = darthVader;
                $("#select-text").text("")
                // play sound
                    console.log("Player two is " + playerTwoSelected)
                }
        });
    }    

    //Check Game Status
    function checkStatus(){
        if (enemiesLeft === 0){
            gameWin();
        }
        else {
            gameStart = false;
                if (enemiesLeft === 2){
                //play sound
                }
                else if (enemiesLeft === 1){
                //play other sound
        }
            $("#opponent-fight-area").empty();
            $("#opponent-name").text("")
            $("#opponent-total-hp").text("")
            setTimeout (function(){
                playerTwoSelected = false}, 1000 *2.8);
            setTimeout (function(){
                $("#select-text").text("Choose Your Enemy!")}, 1000 * 2.8);
                    console.log("Player Two Slected is " + playerTwoSelected);
        }
    }

    function attack(){
        opponent.hp = opponent.hp - player.attack;
        $("#opponent-total-hp").text(opponent.hp);
            console.log("Player one HP is " + player.hp);
            console.log("Player two counter attack power is: " + opponent.counterAttack);
        if (player.hp <= 0){
            gameLose();
        }
    }

    function counterAttack(){
		player.hp = player.hp - opponent.counterAttack;
		$("#player-total-hp").text(player.hp);
			console.log("player HP is " + player.hp);
			console.log("opponent counter attack power is " + opponent.counterAttack)
		if (player.hp <= 0){
			gameLose();	
		}
	}

    function increaseAttack(){
        player.attack = player.attack + player.initialAttack;
            console.log("player one attack power is:" + player.attack);    
    }

    function gameReset(){
        [obiWan = {
            name: "Obi-Wan",
            hp: 150,
            initialAttack: 10,
            attack: 5,
            counterAttack: 12,
            isPlayerOne: false,
            isPlayerTwo: false,
            
        },

        luke = {
            name: "Luke Skywalker",
            hp: 130,
            initialAttack: 10,
            attack: 8,
            counterAttack: 10,
            isPlayerOne : false,
            isPlayerTwo : false,
        },

        darthVader = {
            name: "Darth Vader",
            hp: 170,
            initialAttack: 3,
            attack: 3,
            counterAttack: 20,
            isPlayerOne : false,
            isPlayerTwo : false,
        },

        yoda = {
            name: "Yoda",
            hp: 120,
            initialAttack: 5,
            attack: 12,
            counterAttack: 25,
            isPlayerOne : false,
            isPlayerTwo : false,
        }]
    
    playerOneSelected = false;
    playerTwoSelected = false;
    enemiesLeft = players.length - 1;
    $("#select-text").text("Select your Character")
    $("#game-end-container",).html("");
    $("#game-end-text-container").html("");
    $("#opponent-name").text("");
    $("#opponent-hp").text("");
    $("#player-name").text("");
    $("#player-hp").text("");
    $("#player-total-hp").text("");
    $("#opponent-total-hp").text("");
    $("#player-fight-area").html("");
    $("#opponent-fight-area").html("");
    $(".character-selection").html("");
    $("<img class ='character' id='Obi-Wan' src = 'assets/images/ObiWan.jpg'/>").appendTo(".character-selection");
    $("<img class ='character' id='Luke' src = 'assets/images/Luke.jpg'/>").appendTo(".character-selection");
    $("<img class ='character' id='Yoda' src = 'assets/images/Yoda.jpg'/>").appendTo(".character-selection");
    $("<img class ='character' id='DarthVader' src = 'assets/images/DarthVader.jpg' />").appendTo(".character-selection");
    console.log("Game has reset");
    choosePlayer();
    }

    function gameWin() {
        // theme?
        $("#opponent-total-hp").text(0);
        console.log("Congratulations, you win!")
        gameStart = false;
        victory.play();
        setTimeout(gameReset, 1000 * 8);     
    }

    function gameLose() {
        $("#player-total-hp").text(0);
        gameStart = false;
        console.log("You lose :(");
        defeat.play();
        setTimeout(gameReset, 1000 * 8);
    }

    function startBattle() {
        $("#attack-button").on("click", function() {
            console.log("attack button pressed");
            if (gameStart === true){
                attack();
                increaseAttack();
                if (opponent.hp <= 0){
                    enemiesLeft --;
                    console.log(enemiesLeft + " Enemies Remaining");
                    checkStatus();
                }
                else {
                    counterAttack();
                    lightsaberSound.play();
                }
            }
        });
    }
});