let slumptal = Math.random()

console.log(slumptal)

let coinflip = Math.round(slumptal)

console.log(`Coin flip: ${coinflip}`)

if (coinflip == 0) {
    console.log("Tails")
} else if (coinflip == 1) {
    console.log("Head")
} 

