let cards = [
    "c",
    "a",
    "l",
    "l",
    "u",
    "m"
]
let cc = "c";

while(cc != "m"){
    console.log(cc);
    cc = cards[Math.floor(Math.random()*6)] ;
}

console.log(cc)