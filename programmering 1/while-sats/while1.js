console.log ("hej")
let h1_titel = document.querySelector("#titel"); 
let p_talserie1 = document.querySelector("#talserie1")
let p_talserie2 = document.querySelector("#talserie2")

// skriv while-sats ititel

h1_titel.innerHTML = "while-sats"

let n = 0

while (n <= 10){
    p_talserie1.innerHTML += `${n} `
    n++
}

let m = 10

while (m >= 0){
    p_talserie2.innerHTML += `${m} `
    m--
}

let k = 10

while (k >= -10){
    p_talserie2.innerHTML += `${k} `
    k--
}

