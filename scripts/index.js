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

button.addEventListener("#click", math)

function math(event){
    console.log("math-funktionen körs")
}     
