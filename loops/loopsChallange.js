//Challenge 1//

let sum = 0;
for(let i = 0; i <1000; i++)
{
    if (i % 3 === 0 || i % 5 === 0)
    {
        sum += i;
    }
}
console.log(sum)

//Challange 2//

let string = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"

for (f = 0; f <string.length; f++){
    if(f == "h" && f + 1 == "i"){
        console.log(string.search("hi"))
    }
    else(f == "h" && f + 1 == "i")
        console.log(string.lastIndexOf("hi"))
    }



//string.search(thing)