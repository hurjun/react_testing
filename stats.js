function maxNum(numbers) {
    let result = numbers[0]
    numbers.forEach(n => {
        if (n > result) {
            result = n
        }
    })
    return result;
}

function minNum(numbers) {
    let result = numbers[0]
    numbers.forEach(n => {
        if (n < result) {
            result = n
        }
    })
    return result;
}

exports.maxNum = maxNum;
exports.minNum = minNum;

exports.avg = numbers => {
    const sum = numbers.reduce((acc,current)=>acc+current,0);
    return sum/numbers.length;
}