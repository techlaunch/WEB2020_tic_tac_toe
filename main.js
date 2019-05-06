var player = "O";

//
// call this function to move the target
// 
function move(cell) {
    // do not overwrite empty cells
    if(cell.innerHTML != "") return false;

    // add colors
    var color = "pink";
    if(player == "X") color = "brown";
    cell.style.color = color;

    // make a move
    cell.innerHTML = player;

    // check if this is a winning match 
    if(checkGameOver()) return true;

    // switch players
    if(player == "O") player = "X";
    else player = "O";

    // play against a CPU
    // uncomment the line below to play against the computer
    // random algorithm
    // if (player == "X") playComputer();
}

//
// call this function to check if the game is over 
// 
function checkGameOver() {
    var winner = "N";

    // get the value of each cell
    var topLeft = document.getElementById('topLeft').innerHTML;
    var topCenter = document.getElementById('topCenter').innerHTML;
    var topRight = document.getElementById('topRight').innerHTML;
    var mediumLeft = document.getElementById('mediumLeft').innerHTML;
    var mediumCenter = document.getElementById('mediumCenter').innerHTML;
    var mediumRight = document.getElementById('mediumRight').innerHTML;
    var bottomLeft = document.getElementById('bottomLeft').innerHTML;
    var bottomCenter = document.getElementById('bottomCenter').innerHTML;
    var bottomRight = document.getElementById('bottomRight').innerHTML;

    // check if there is no more space to play
    if (topLeft != "" && topCenter != "" && topRight != "" && mediumLeft != "" && mediumCenter != "" && mediumRight != "" && bottomLeft != "" && bottomCenter != "" && bottomRight != "") winner = "E";

    // check the first row
    if (topLeft != "" && topLeft == topCenter && topCenter == topRight) winner = player;

    // check the second row
    if (mediumLeft != "" && mediumLeft == mediumCenter && mediumCenter == mediumRight) winner = player;

    // check the last row
    if (bottomLeft != "" && bottomLeft == bottomCenter && bottomCenter == bottomRight) winner = player;

    // check the first column
    if (topLeft != "" && topLeft == mediumLeft && mediumLeft == bottomLeft) winner = player;

    // check the second column
    if (topCenter != "" && topCenter == mediumCenter && mediumCenter == bottomCenter) winner = player;

    // check the third column
    if (topRight != "" && topRight == mediumRight && mediumRight == bottomRight) winner = player;

    // check the first diagonal
    if (topLeft != "" && topLeft == mediumCenter && mediumCenter == bottomRight) winner = player;

    // check the second diagonal
    if (topRight != "" && topRight == mediumCenter && mediumCenter == bottomLeft) winner = player;

    // display game over message
    if(winner != "N") {
        if (winner == "E") var msg = "The game is even. Play again.";
        else var msg = "The "+ winner+" win the game. Play again.";
        alert(msg);
        location.reload();
        return true;
    }
}

//
// call this function to make a move as pc
//
function playComputer() {
    // get a random position to play
    max = 8; min = 0;
    var pos = Math.floor(Math.random() * (max - min + 1) + min);

    // make a move as computer
    if (pos === 0) var cell = document.getElementById('topLeft');
    if (pos === 1) var cell = document.getElementById('topCenter');
    if (pos === 2) var cell = document.getElementById('topRight');
    if (pos === 3) var cell = document.getElementById('mediumLeft');
    if (pos === 4) var cell = document.getElementById('mediumCenter');
    if (pos === 5) var cell = document.getElementById('mediumRight');
    if (pos === 6) var cell = document.getElementById('bottomLeft');
    if (pos === 7) var cell = document.getElementById('bottomCenter');
    if (pos === 8) var cell = document.getElementById('bottomRight');

    // check the position is not used
    if (cell.innerHTML != "") {
        playComputer();
        return false;
    }

    // make a move in that position
    move(cell);
}
