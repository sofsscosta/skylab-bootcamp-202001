"use strict"

var RANDOM_NUMBER = { RANGE_MIN: 1, RANGE_MAX: 100, COLUMNS: 5, ROWS: 3 }
var INTERNAL_RANDOM_NUMBER_SEQUENCE = [];
var EXTERNAL_RANDOM_NUMBER_SEQUENCE = []; //for modifying and outputing values to UI
var PLAYERS_GENERATED_NUMBERS = [];
var DETERMINED_NUMBER_SYMBOL = "X";
var BINGO_CHECKMATE = false;

var PLAYER_STARTING_POINTS = 100;
var CORRECT_GUESS_POINT = 2;
var INCORRECT_GUESS_POINT = 1;
var BINGO_POINTS = RANDOM_NUMBER.ROWS;
var CURRENT_POINT_SUMMARY = { POINTS_WON: 0, POINTS_LOST: 0, TOTAL_POINTS: 0, TOTAL_GUESSES: 0 };
var USER = { NAME: "", POINTS: PLAYER_STARTING_POINTS, POINTS_SUMMARY: [] };
var PLAYERS_RANKING = [
    { name: "Osas", points: 97 },
    { name: "Steve", points: 19 },
    { name: "Eric Aig", points: -13 },
    { name: "Aida", points: 86 },
    { name: "Sabina", points: 91 },
    { name: "Maria", points: 78 },
    { name: "Alfred", points: 41 },
];

function Bingo(startPromptMessage) {
    var promptBox = function (promptMessage, message) {
        message = !!message ? message : "";
        return prompt(promptMessage, message)
    }

    var confirmBox = function (confirmMessage) {
        return confirm(confirmMessage);
    }

    var welcomeUser = function (name) {
        console.log("%cHello " + name + "! You're about to play the most addictive game in the world, BINGO!", "font-size: 14px; color: threeddarkshadow")
        console.log("Game components loading... 100% Loaded!")
    }

    var getRandomNumber = function () {
        //https://stackoverflow.com/a/1527820
        /* MIN-MAX (inclusive) */
        return Math.floor(Math.random() * (RANDOM_NUMBER.RANGE_MAX - RANDOM_NUMBER.RANGE_MIN + 1)) + RANDOM_NUMBER.RANGE_MIN;
        //return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var resetSession = function () {
        INTERNAL_RANDOM_NUMBER_SEQUENCE = [];
        EXTERNAL_RANDOM_NUMBER_SEQUENCE = [];
        PLAYERS_GENERATED_NUMBERS = [];
        BINGO_CHECKMATE = false;
    }

    var resetPoints = function () {
        //USER.POINTS_SUMMARY = [];
        CURRENT_POINT_SUMMARY = { POINTS_WON: 0, POINTS_LOST: 0, TOTAL_GUESSES: 0 };
        USER.POINTS = PLAYER_STARTING_POINTS;
    }

    var resetAll = function () {
        resetSession()
        resetPoints()
        USER.POINTS_SUMMARY = [];
        USER.NAME = "";
    }

    var goodByeMessage = function () {
        resetAll();
        alert("Thank you for playing. Until next time :)")
    }

    function randomNumberExist(number, numbers) {
        return numbers.indexOf(number) !== -1;
    }

    var generateScoreBoard = function () {
        resetSession()
        var random_uniq_numbers = [];

        for (var row = 0; row < (RANDOM_NUMBER.ROWS * RANDOM_NUMBER.COLUMNS); row++) {
            var randomNumber = 0;
            do {
                //randomNumber = getRandomNumber(RANDOM_NUMBER.RANGE_MIN, RANDOM_NUMBER.RANGE_MAX);
                randomNumber = getRandomNumber();
            } while (randomNumberExist(randomNumber, random_uniq_numbers))
            random_uniq_numbers.push(randomNumber)
        }

        if (random_uniq_numbers.length) {
            for (var row = 0; row < RANDOM_NUMBER.ROWS; row++) {
                INTERNAL_RANDOM_NUMBER_SEQUENCE[row] = [];
                for (var column = 0; column < RANDOM_NUMBER.COLUMNS; column++) {

                    var randomNumber = random_uniq_numbers[0];
                    INTERNAL_RANDOM_NUMBER_SEQUENCE[row].push(randomNumber)
                    random_uniq_numbers.shift();
                }
            }
        }

        EXTERNAL_RANDOM_NUMBER_SEQUENCE = INTERNAL_RANDOM_NUMBER_SEQUENCE;

        /*console.log("random_uniq_numbers", random_uniq_numbers)
        console.log("INTERNAL_RANDOM_NUMBER_SEQUENCE", INTERNAL_RANDOM_NUMBER_SEQUENCE)*/
    }

    var addToPlayersGeneratedNumbers = function (n) {
        PLAYERS_GENERATED_NUMBERS.push(n);
        CURRENT_POINT_SUMMARY.TOTAL_GUESSES++
    }

    var getNumberFromBingoSpinner = function () {
        var randomNumber = 0;
        do {
            //randomNumber = getRandomNumber(1, 100);
            randomNumber = getRandomNumber();
        } while (randomNumberExist(randomNumber, PLAYERS_GENERATED_NUMBERS))

        addToPlayersGeneratedNumbers(randomNumber)

        //console.log(randomNumber, PLAYERS_GENERATED_NUMBERS)
        return randomNumber;
    }

    var presentPointSystem = function () {
        var output = "Key informations about the point system:\n"
        output += "- Every player starts with " + PLAYER_STARTING_POINTS + " point(s)\n";
        output += "- For every correct guess, you get " + CORRECT_GUESS_POINT + " point(s)\n";
        output += "- For every incorrect guess, " + INCORRECT_GUESS_POINT + " point(s) will be deducted from your total accumulated points\n";
        output += "- After correctly guessing all numbers, you will be awarded an extra " + BINGO_POINTS + " points\n";
        output += "- Player's ranking will be updated after every round. If a player accumulates more points than previous round, their current point will be used as total accumulated point.\n\n";
        output += "Good luck champ!";
        alert(output);
    }

    var showPlayersRanking = function () {
        //let's sort players according to points accumulated...
        var playersRanking = PLAYERS_RANKING.sort(function (a, b) { return b.points - a.points })

        //pretty print
        playersRanking = playersRanking.map(function (player, index) {
            return (index + 1) + ".     " + player.name + "     |     " + player.points
        })

        playersRanking = playersRanking.join("\n")

        console.group("Players ranking");
        console.log(playersRanking);
        console.groupEnd();

        alert("Players ranking\n\n" + playersRanking)
    }

    var updateCurrentPlayerRanking = function () {
        var updated = false;

        PLAYERS_RANKING.forEach(function (player, index) {
            if (player.name.toLowerCase() === USER.NAME.toLowerCase()) {
                updated = true;
                if (USER.POINTS > player.points) {
                    //only update point if player did better than last time...??????
                    PLAYERS_RANKING[index].points = USER.POINTS;
                }
            }
        })

        if (!updated) {
            PLAYERS_RANKING.push({ name: USER.NAME, points: USER.POINTS })
        }
    }

    var currentScoreBoardSummary = function () {
        var output = [];
        var totalLinesWithSymbol = 0;

        for (var x = 0; x < EXTERNAL_RANDOM_NUMBER_SEQUENCE.length; x++) {
            var items = EXTERNAL_RANDOM_NUMBER_SEQUENCE[x];

            var everyLineHasSymbol = items.every(function (val) {
                return val === DETERMINED_NUMBER_SYMBOL
            })

            var joinedItems = items.join("               ");//5spaces * 5
            if (everyLineHasSymbol) {
                totalLinesWithSymbol++;
                //joinedItems += "     --> L\u00CDNEA!";
            }

            output.push(joinedItems)
        }

        if (totalLinesWithSymbol === EXTERNAL_RANDOM_NUMBER_SEQUENCE.length) {
            BINGO_CHECKMATE = true;
        }

        return output.join("\n")
    }

    var consolePointsSummary = function () {
        console.group("Points summary");
        var pointsSummary = USER.POINTS_SUMMARY.map(function (ps, index) {
            return "- Round " + (index + 1) + ": Won " + ps.POINTS_WON + " points / Lost " + ps.POINTS_LOST + " points / Total Points " + ps.TOTAL_POINTS
        })
        console.log(pointsSummary.join("\n\n"));
        console.groupEnd();
    }

    var updatePlayerScore = function (type) {
        if (type === 1) {
            CURRENT_POINT_SUMMARY.POINTS_WON += CORRECT_GUESS_POINT;
            USER.POINTS += CORRECT_GUESS_POINT;
        } else if (type === 2) {
            CURRENT_POINT_SUMMARY.POINTS_WON += BINGO_POINTS;
            USER.POINTS += BINGO_POINTS;
            CURRENT_POINT_SUMMARY.TOTAL_POINTS = USER.POINTS;

            USER.POINTS_SUMMARY.push(CURRENT_POINT_SUMMARY)

            consolePointsSummary();
        } else if (type === 3) {
            CURRENT_POINT_SUMMARY.POINTS_LOST += INCORRECT_GUESS_POINT;
            USER.POINTS -= INCORRECT_GUESS_POINT;
        }

        //console.log("USER", USER)
        //console.log("CURRENT_POINT_SUMMARY", CURRENT_POINT_SUMMARY)
    }

    var updateCurrentScoreBoard = function (newNumber) {
        var updatedValue = false;
        var showLineAlertShown = false;

        for (var x = 0; x < EXTERNAL_RANDOM_NUMBER_SEQUENCE.length; x++) {
            var items = EXTERNAL_RANDOM_NUMBER_SEQUENCE[x];
            var showLineAlert = false;

            for (var y = 0; y < items.length; y++) {
                var value = items[y]

                if (value === newNumber) {
                    if (!updatedValue) {
                        updatePlayerScore(1)
                    }

                    updatedValue = true;
                    EXTERNAL_RANDOM_NUMBER_SEQUENCE[x][y] = DETERMINED_NUMBER_SYMBOL;
                }

                if (updatedValue && (y + 1) === items.length) {
                    showLineAlert = items.every(function (val) {
                        return val === DETERMINED_NUMBER_SYMBOL
                    })

                    if (showLineAlert && !showLineAlertShown) {
                        showLineAlertShown = true;
                        alert("L\u00CDNEA!");
                    }
                }

                if (!updatedValue && (x + 1) === EXTERNAL_RANDOM_NUMBER_SEQUENCE.length && (y + 1) === items.length) {
                    //end of loops
                    updatePlayerScore(3)
                }
            }
        }
    }

    var generateConfirmMessage = function (msg) {
        var currentScoreBoard = currentScoreBoardSummary();
        return "                    " + USER.NAME.toUpperCase() + ", THIS IS YOUR CURRENT SCOREBOARD\n\n" + currentScoreBoard + "\n\n" + msg;
    }

    var initializeGame = function (alertMsg) {
        var generatePointsMessage = function () {
            return "\nPoints won: " + CURRENT_POINT_SUMMARY.POINTS_WON + " / Points lost: " + CURRENT_POINT_SUMMARY.POINTS_LOST + " / Total points: " + USER.POINTS + " / Total guesses: " + CURRENT_POINT_SUMMARY.TOTAL_GUESSES;
        };

        if (!!alertMsg) alert(alertMsg)

        if (!BINGO_CHECKMATE) {
            var newNumber = getNumberFromBingoSpinner();
            alert("The number from the BINGO SPINNER is\n\n " + newNumber);

            //addToPlayersGeneratedNumbers(newNumber)
            updateCurrentScoreBoard(newNumber)
            var confirmMessage = generateConfirmMessage("Click 'Cancel' if you want to end game." + generatePointsMessage());

            if (BINGO_CHECKMATE) {
                initializeGame();
                return;
            }

            var continuePlaying = confirmBox(confirmMessage);

            if (continuePlaying) {
                continuePlaying = confirmBox("Do you want to continue playing?");
                if (continuePlaying) {
                    initializeGame()
                    return;
                }
            }
        } else {
            updatePlayerScore(2);

            /* IN THIS LAST ROUND, you won ** points and losts ** you have ** points in total */
            var action = confirmBox("BINGO!\n" + generatePointsMessage() + "\n\nWould you like to play again?");
            if (action) {
                updateCurrentPlayerRanking()
                resetPoints()
                showPlayersRanking();
                generateScoreBoard();
                confirmScoreBoard()
                return;
            } else {
                updateCurrentPlayerRanking()
                resetPoints()
                showPlayersRanking();
            }
        }

        goodByeMessage()
    }

    var confirmScoreBoard = function () {
        var action = "";
        var validAction = false;
        var msg = "Do you like this scoreboard?\nType:\n-'Yes' to continue\n-'No' to generate a new scoreboard";

        do {
            action = promptBox(generateConfirmMessage(msg));
            if (action !== null) {
                if (typeof action === "string") {
                    action = action.trim().toLowerCase();

                    if (action === "yes") {
                        validAction = true;
                        initializeGame("The game is about to start.\n\nGoodluck champ!")
                    } else if (action === "no") {
                        generateScoreBoard();
                    }
                }
            } else {
                validAction = true;
            }
        } while (!validAction)

        if (action === null) goodByeMessage();
    }

    var init = function (promptMessage) {
        if (RANDOM_NUMBER.RANGE_MAX < (RANDOM_NUMBER.COLUMNS * RANDOM_NUMBER.ROWS)) {
            alert("Game configuration is incorrect. Please review it and try again.");
            return;
        }

        let name = promptBox(promptMessage, "");
        name = name !== null ? name.trim() : name;

        if (typeof name === "string" && name.length) {
            USER.NAME = name;
            welcomeUser(name);
            presentPointSystem();
            showPlayersRanking();
            generateScoreBoard();
            confirmScoreBoard();
        } else if ((typeof name !== "string" || !name.length) && name !== null) {
            init("Hello\n\nPlease enter a valid name")
        } else if (name === null) {
            console.log("Thank you for playing bingo. See you next time...")
        }
    }

    init(startPromptMessage);
}

Bingo("Hello\n\nPlease enter your name")