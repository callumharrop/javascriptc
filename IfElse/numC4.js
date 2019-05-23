let num1 = "101029"
let num2 = num1.split("")
let num3 = num2.reverse()
let num4 = num3.join("")
if (num1 == num4){
    console.log ("Yes")
}
else{
    console.log ("no")
}
console.log (num4)
//first I made my number a string by using the "" but I could have also used .toString() then converted it out of string using .valueOf()//
// .split takes the string apart turning it in to a array then .reverse reverses the array then .join to put the array back in a string//
