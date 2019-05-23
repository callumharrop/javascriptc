let films = [
    "blues brothers",
    "star trek",
    "James bond gold finger",
    "starwars"
]

for(let i = 0 ; i < films.length; i++){
    console.log(films[i])
}

const filmCheck = (thirdfilm) => {
    if(thirdfilm == films[2])
    console.log("jackanory")
    else{
     console.log("stop getting bond wrong")
    }
}

filmCheck("James bond gold finger")
