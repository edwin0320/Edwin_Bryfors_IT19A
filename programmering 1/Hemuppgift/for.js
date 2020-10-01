let p_udda = document.querySelector("#udda")
let p_jamna = document.querySelector("#jamna")


p_jamna.innerHTML = "Jämna tal från 0 till 100: "
p_udda.innerHTML = "Udda tal från 0 till 100: "
for (let i=0; i<=100; i++){
    p_jamna.innerHTML += `${i} `
    i++
}

for (let i=1; i<=100; i++){
    p_udda.innerHTML += `${i} `
    i++
}


let p_lektion = document.querySelector("#Lektioner")





let lektioner = ["Svenska", "Engelska", "Programmering", "Idrott"]

p_lektion.innerHTML = " Mina lektioner är: <br/>"

console.log(lektioner.length)

for (let l = 0; l < lektioner.length; l++){
    p_lektion.innerHTML += `${l+1}. ${lektioner[l]} <br/>`

}
