let field = Array(9).fill(null)
let userTurn = 1
const winningCombo = [
    //Lines
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //Columns
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //Diagonals
    [0,4,8],
    [2,4,6]
]
function clicked(This, index) {
    if(field[index] !== null){
        alert("Square is Taken!")
        return
    }
    const currentPlayer = userTurn === 1 ? "X" : "O" //If userTurn === 1, then currentPlayer's Value is "X" else its "O"
    This.textContent = currentPlayer //From the line above, it takes which Value it is "X" or "O" and assigns its value to the DIV in the HTML
    field[index] = currentPlayer // We want to generally implement this in the Field outside of the View

    userTurn = 1 - userTurn //1. UserTurn = 1 - 1; Its User "O" Turn since the value is 0, 2. UserTurn = 1 - 0; Its User "X" Turn since the Value is 1
    console.log(field)
    if(determineWinner()) {
        alert(`The Winner is: ${currentPlayer}`)
    } else if (isDraw()){
        alert("It's a Draw!")
        resetGame()
    }
    
}
function determineWinner() {
    for(let combos of winningCombo){
        const [a,b,c] = combos //Placeholds the winning combos above in a,b,c. If the value of a is equal to b and c. We have a winner and the game gets reseted with the function accordingly
        if(field[a] && field[a] === field[b] && field[a] === field[c]){
            console.log(`The Winner is:` + field[a])
            resetGame()
            return true
        }
    } return false && console.log("Draw") && resetGame()
}
function isDraw() {
    // Check if the board is full and there is no winner
    if (field.every(cell => cell !== null)) {
        return !determineWinner(); //Return true if no winner and the board is full
    }
    return false;
}
function resetGame() {
    field = Array(9).fill(null)
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.textContent = ""
    });
    userTurn = 1
    console.log("Game Reset")
}