let balance = 1000
let pin = 0000

 const enterWithdraw = (pin, balance) => {
     if (pin == 0000 && balance <= 1000)(
        console.log("your pin is correct here is your cash")
     )
     else (
        console.log("your pin is incorrect")
    )
    }
 

enterWithdraw(0000, 500)