//Challange 2//
const convert = (number) =>{
    console.log(number.toString())
}
convert(456)
//Challange 3//
const add1to = (number1) =>{
    console.log(number1 + 1)
}
add1to(1)

//Challange 4//
const take1to = (number2) =>{
    console.log(number2 - 1)
}
take1to(6)

//Challange 5//
const addthese = (number3,number4) =>{
    return(number3 + number4)
}
console.log(addthese(6,8))

//Challange 6// 
const takethese = (number5,number6) =>{
    return(number5 - number6)
}
console.log(takethese(67,90))

//Challange 7//
const timesthese = (number7,number8) =>{
    return(number7 * number8)
}
console.log(timesthese(6,9))

//Challange 8//
const dividethese = (number10,number11) =>{
    return(number10 / number11)
}
console.log(dividethese(2,4))
//Challange 9//
const itsSelf = (number12) =>{
    return(number12 * number12)
}
console.log(itsSelf(12))
//Challange 10//
const calc = (num1,op,num2) =>{
    if (op == "+" ){
        console.log(`${num1} + ${num2} = ${num1 + num2}`)
    }
    else if (op == "-" ){
        console.log(`${num1} - ${num2} = ${num1 - num2}`)
    }
    else if (op == "x"){
        console.log(`${num1} x ${num2} = ${num1 * num2} `)
    }
    else if (op == "/"){
        console.log(`${num1} divide by ${num2} = ${num1 / num2}`)
    }
}
calc(4,"+",4)
calc(5,"-",6)
calc(6,"/",7)
calc(10,"x",11)


//Challage 11//
const whichOne = (number13, number14) =>{
    if(number13 > number14){
        console.log("the first one is bigger")
    }
    else{
        console.log("the second one is bigger")
    }
}
whichOne(88,87)

//Challange 12//
const whichOne2 = (number15, number16) =>{
    if(number16 < number15){
        console.log("the first one is bigger")
    }
    else{
        console.log("the second one is bigger")
    }
}
whichOne2(20,19)

//Challange 13//
const whichOne3 = (number17,number18) =>{
    if(number17 - number18 == 0){
        console.log("equal af")
    }
    else{
        console.log("not equal af")
    }
}
whichOne3(22,22)

//Challange 14//
const whichOne4 = (number19,number20) =>{
    if(number19 > number20){
        console.log(number19)
    }
    else
        console.log(number20)
    }


whichOne4(21,20)

//Challange 15//
const whichOne5 = (number21,number22) =>{
    if(number21 < number22){
        console.log(number21)
    }
    else
        console.log(number22)
    }

whichOne5(16,20)

//Challanges 16 and 17//
const isiteven = (number23) =>{
    return(number23 & 1) ? "odd" : "even";
    }
console.log(isiteven(5687))

//Challanges 18//
const gradeCheck = (number24) =>{
    if(number24 >= 90){
        console.log("Its and A")
    }
    else if(number24 >= 80){
        console.log("Its a B")
    }
    else if(number24 >= 70){
        console.log("Its a C")
    }
    else if(number24 >= 60)
        console.log("Its a D")
    }
    {
        console.log("press F to pay respect")
}


gradeCheck(50)

//Challange 19//
const com = (string1,string2) => {
    console.log(string1.concat(string2))
}

com("put me together"," please don't")