const USD = 95

function convertUSDtoCAD (amountUSD){
     return amountUSD * 1.26
}

// console.log(convertUSDtoCAD(USD))

console.log(`${USD} USD is equivalent to ${convertUSDtoCAD(USD)} CAD`)