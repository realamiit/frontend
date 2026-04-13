let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGameButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO= true; //playerX,playerO

let gameActive = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true
        }
        box.disabled =true;
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (Winner) =>{
    msg.innerText = `Congratulations! Player has won!  ${Winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
             pos1Val = boxes[pattern[0]].innerText,
            pos2Val = boxes[pattern[1]].innerText,
            pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val !="") {
                if(pos1Val === pos2Val && pos2Val === pos3Val) {
                    showWinner(pos1Val);

                }

            }
        }

};

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);