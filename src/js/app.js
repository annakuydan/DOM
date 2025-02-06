import image from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");
    const board = [];
    const goblin = document.createElement("img");
    goblin.src = image;

    for (let i = 0; i < 16; i++) {
        let div = document.createElement("div");
        box.append(div);
        board.push(div);
    }

    let currentBox = 0;

    function moveGoblin() {
        board[currentBox].innerHTML = '';

        let newBox;
        
        do {
            newBox = Math.floor(Math.random() * board.length);
        } while (newBox === currentBox);
        currentBox = newBox;
        board[currentBox].append(goblin);
    }

    setInterval(moveGoblin, 1000);
});