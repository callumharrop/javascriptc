let teaMadeCount = 0;

const makeTea = (suger, strength) => {
    console.log(`Tea with ${suger} sugers and ${strength}`);
    teaMadeCount++;
}

makeTea("2")
makeTea('6')
makeTea(5,"strong")
console.log(teaMadeCount)