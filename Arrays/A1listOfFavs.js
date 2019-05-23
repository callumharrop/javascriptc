let webs = [
    "google.com",
    "youtube.com",
    "facebook.com"
];
console.log(webs)
webs.push("digyourowngraves.com");

webs.push("runescape.com")//added to webs//
console.log(webs);

webs.pop()//removes the last one from the list//
console.log(webs);

webs.shift()//removes the first one from the list//
console.log(webs);

webs.unshift("bing.com")//adds another on to the top of the array//
console.log(webs);

console.log(webs.slice(1,3))//shows a selected about of the array the end of the slice is not included//

webs.splice(1,0, "twitter.com") //adds another one can replace one depending on the order of the nums (0,1) would replace the first one and add this new one//
console.log(webs)

let websr = webs.reverse() //reversed the order of the list//
console.log(websr) 

const result = webs.filter(webs =>webs.length > 15) //filter can filter out results in this example I have searched for webs that have more then a certain length 
console.log(result)

let webs2 = [
    "whattimeisitrightnow.com",
    "superfuntime.com",
    "staysafeonline.com",
    "examplewebsite.com"
]

console.log(webs.concat(webs2)); //this one merges the to arrays together//
