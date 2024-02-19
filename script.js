
function predict() {
    document.getElementById("info").innerText = "2 - 3";
}

function guess() {
    let whscore = Math.floor(Math.random()*10);
    let Ascore = Math.floor(Math.random()*10);

    document.getElementById("info").innerHTML = whscore + " - " + Ascore;

    if (whscore > Ascore) {
    // west ham win
        document.getElementById("info").innerHTML += "<br>West ham win!";

        // document.body.style.backgroundColor = "purple";

    } else if (whscore == Ascore) {
    // draw
        document.getElementById("info").innerHTML += "<br>Draw!";
    } else {
    // arsenal win
        document.getElementById("info").innerHTML += "<br>West ham lose!";

        // document.body.style.backgroundColor = "red";

    }
}

function previousResults() {

    let results_string = "";

    for (let i=0; i<5 ; i++) {

        let whscore=Math.floor(Math.random()*10);
        let Ascore=Math.floor(Math.random()*10);

        // <p style="border: 3px solid red;" id="score_5">2 - 3</p>
        results_string += "<p id=\"score_" + i + "\">" + whscore + " - " + Ascore + "</p>";
        
        // add button <button type="button" onclick="winner("score_ 1 ")">winner</button>
        results_string += "<button type=\"button\" onclick=\"winner(&quot score_" + i + "&quot)\">winner</button>";
        
        // add newline
        results_string += "<br>";
    }

    document.getElementById("info").innerHTML = results_string;
}

function winner(scoreid) {

    // get rid of whitespace around the start and end
    let scoreid_trimmed = scoreid.trim();

    // pulls the score from the html element with the give id. 
    let scores = document.getElementById(scoreid_trimmed).innerText;

    // converts to string with the scores into and array with two separate scores.
    const scoreArr = scores.split("-");

    // converts the scores from strings to numbers
    let WHscore = parseInt(scoreArr[0]);
    let Ascore = parseInt(scoreArr[1]);

    if (WHscore > Ascore) {
    // west ham win
        document.getElementById(scoreid_trimmed).innerHTML += "<br>West ham win!";

    } else if (WHscore == Ascore) {
    // draw 
        document.getElementById(scoreid_trimmed).innerHTML += "<br>Draw!";
    } else {
    // arsenal win
        document.getElementById(scoreid_trimmed).innerHTML += "<br>West ham lose!";
    }
}

