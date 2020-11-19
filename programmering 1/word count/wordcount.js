let textArea = document.querySelector("#textArea")
let countWordBtn = document.querySelector("#countWordBtn")
let p_displayWords = document.querySelector("#displayWords")

countWordBtn.addEventListener("click", countWords)

function countWords(){
    console.log("Kör funktionen countWords")
    let text = textArea.nodeValue
    console.log(text)
    let words = text.split(" ")
    console.log(words)
}
