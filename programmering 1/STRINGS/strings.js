console.log ("strings")

let fornamn = "Edwin"
let efternamn = "Bryfors"
let namn = fornamn + " " + efternamn
let adress = "Kronhusgatan 9"
let telefon = 911
let alder = 17

console.log(namn +"\n" + adress +"\n" + telefon +"\n" + alder)  

let p_uppgifter = document.querySelector("#personuppgifter")
p_uppgifter.innerHTML = "Namn: " + namn + "<br>" + "Adress: " + adress + "<br>"+"Ålder: " + alder


let alfabet = "abcdefghijklmnopqrstuvwyxzåäö"
let bokstav1 = alfabet[0]
let bokstav5 = alfabet[4]

console.log(`Bokstav på index 0 är: ${bokstav1}`)
console.log(`Bokstav på index 4 är: ${bokstav5}`)

let antal_bokstaver = alfabetet.lenght
console.log(`Antal bostäver i alfabetet är ${antal_bokstaver}`)

