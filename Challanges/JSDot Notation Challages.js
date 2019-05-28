let string = "is a load of words put together to create and example also iphone";
let thing = "ut";
console.log(string.search(thing));
//The .search finds the varible and tells me about of letters that come before it counting the first letter as 0//

let examplewords = "This is and example sentense that I have put togetherr I really need to use SHIFT more not using CAPS_LOCK on and off all the time";
console.log (examplewords.lastIndexOf("SHIFT"));
//The last index of searchs the string for a fraze in the string and tells you where in the string the fraze is//

let moreExamples = "I'm going to slice this string up"
let moreExamplesSliced = moreExamples.slice(0,6) //this cuts up a part of the string making it say I'm go .substing does the same thing but not changed the string out right//
console.log(moreExamplesSliced)

let me = "callum"
console.log(me.substring(5, 6)); //takes a part//
console.log(me.substring(2)); //takes the first 2 away//

let example3 = "add more in to this"
let example4 = example3.replace("more","less") //this command changes a part of the string and adds a new bit of string//
console.log(example4)

let example5 = "I'am the law"
let example6 = " no you are not"
let example7 = example5.concat(example6) //this one adds to things together
console.log(example7)

let me2 = me.charAt(0) //this one selects a character depending on what number you have 0 is c and 1 is 1 etc//
console.log(me2)