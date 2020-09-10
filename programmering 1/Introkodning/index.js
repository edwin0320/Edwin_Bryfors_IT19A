console.log("hej")

// skapar en variabel som heter name och tilldelar det värdet "Edwin"
let name = "Edwin"
let age = 17 // heltal, int 

//if-sats - att göra val
if (age >=18){
    console.log("Du är vuxen")
} else {
    console.log("Du är barn")
}




console.log(`Hej ${name} du är ${age} år gammal`)

//DOM - document object module

let text = document.querySelector("#text")
text.innerHTML = (`${name} är ${age} är gammal`)


let mult = document.querySelector("#multiplikation")
let div = document.querySelector("#division")
let add = document.querySelector("#addition")
let sub = document.querySelector("#subtraktion")


mult.innerHTML = `multiplikation`
div.innerHTML = `division`
add.innerHTML = `addition`
sub.innerHTML = `subtraktion`


let button = document.querySelector("#knapp")

button.addEventListener("click", math)

function math(event){
    console.log("math-funktionen körs")
    
    let num1 = parseFloat(document.querySelector("#number1").value)
    let num2 = parseFloat(document.querySelector("#number2").value)

    add.innerHTML = `${num1}+${num2}=${num1+num2}`
    sub.innerHTML = `${num1}-${num2}=${num1-num2}`
    div.innerHTML = `${num1}/${num2}=${num1/num2}`
    mult.innerHTML = `${num1}*${num2}=${num1*num2}`
}     
