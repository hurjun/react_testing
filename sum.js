function sum(a, b) {
    return a + b;
}
function sumOf(array){
    let result=0;
    array.forEach(n=>{
        result+=n;
    });
    return result;
}

exports.sum = sum;
exports.sumOf = sumOf;