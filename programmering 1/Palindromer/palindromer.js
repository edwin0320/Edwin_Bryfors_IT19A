let knapp = document.querySelector("#knapp")

let p_rattordning = document.getElementById("rattordning")

let p_omvand = document.getElementById("omvand")

let p_resultat = document.getElementById("resultat")

knapp.addEventListener("click", Palindrom)

 function Palindrom() {

    let string = document.querySelector("#input").value
    let ratt = string.split("");

    console.log(ratt)

    p_rattordning.innerHTML = string
    let omv = string.split("").reverse()
    console.log(omv)

    p_omvand.innerHTML = omv.join("")

    if (ratt.join("") === omv.join("")){
        console.log("Palindrom")
        p_resultat.innerHTML = "Det är ett palindrom"
      
    } else {
        console.log("Inte ett palindrom")
        p_resultat.innerHTML = "Det är inte ett palindrom"
   
    }


}