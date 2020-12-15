//spelare 1 slår tärning
//spelare 2 slår tärning
//högsta numret vinner

let diceNumber1 = 0
let diceNumber2 = 0
let dice1_btn = document.querySelector("#dice_p1")
let dice2_btn = document.querySelector("#dice_p2")
let buttonCheck = document.querySelector("#buttonCheck")
let p1_result = document.querySelector("#p1_result")
let p2_result = document.querySelector("#p2_result")



dice1_btn.addEventListener("click", diceRoll1)
dice2_btn.addEventListener("click", diceRoll2)
buttonCheck.addEventListener("click", checkWin)

function diceRoll1(){
    diceNumber1 = 1+Math.floor(Math.random()*6)
    p1_result.innerHTML = diceNumber1
    console.log(diceNumber1)
}

function diceRoll2(){
    diceNumber2 = Math.floor(Math.random()*6)+1
    p2_result.innerHTML = diceNumber2
}

function checkWin(){
    if (diceNumber1 > diceNumber2){
        console.log("Spelare 1 vinner")
    } else if (diceNumber1 < diceNumber2){
        console.log("Spelare 2 vinner")
    } else {
        console.log("Lika")
    }
}