// This toggles the rules image
function showRules() {
    let rules = document.getElementById("rules");
    if (rules.style.display === "none") {
        rules.style.display = "block";
    } else {
        rules.style.display = "none";
    }
}

let score = 0;

class Player {
    constructor(pNumber, addScore, display, score){
        this.pNumber = pNumber;
        this.score = score;
    }
}

function addScore(display, score) {
    if(!gameOver){
        score++;
    } return score;
}
