let space1 = " "
let space2 = " "
let space3 = " "
let space4 = "0"
let space5 = " "
let space6 = " "
let space7 = "X"
let space8 = "X"
let space9 = "0"

console.log ("   |   |   ")
console.log(` ${space1} | ${space2} | ${space3}`)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space4} | ${space5} | ${space6}`)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space7} | ${space8} | ${space9}`)
console.log("   |   |   ")

if(space1 == space2 && space2 == space3 && space1 != " "){
    console.log(" ")
}
else if(space4 == space5 && space5 == space6 && space4 != " "){
    console.log("you win")
}
else if(space7 == space8 && space8 == space9 && space7 != " "){
    console.log("you win")
}
else
{console.log("no winner yet")
}

