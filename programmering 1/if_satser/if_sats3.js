let weight = prompt("Hur mycket väger ditt bagage?")


let length = prompt("Hur långt är ditt bagage?")


let width = prompt("Hur brett är ditt bagage?")



let height = prompt("Hur högt är ditt bagage?")



if (weight <= 8 && length <= 55 && width <= 40 && height <= 23){
    console.log("Du får åka med.")
} else {
    console.log("Du får inte åka med.")
}