const Spaces = (space1,space2,space3,space4,space5,space6,space7,space8,space9) => {
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

}

if (space1 == space2 && space2 == space3 && space1 != " "){
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

Spaces