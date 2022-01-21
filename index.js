const USD = 95

function convertUSDtoCAD (amountUSD){
     return amountUSD * 1.26
}

// console.log(convertUSDtoCAD(USD))

console.log(`${USD} USD is equivalent to ${convertUSDtoCAD(USD)} CAD`)

const tips = [5, 8, 13, 2, 14, 27, 9, 18]

function calcTips (arr){
    let sum = 0
    for (let i=0; i < arr.length; i++ ){
        sum = sum + arr[i]
    }
    return sum
}

console.log(calcTips(tips))