module.exports = function reverse (n) {
    let num = Math.abs(n);
    let array = (""+num).split("").map(Number).reverse();
    let reverseNum = '';
    array.forEach(el => reverseNum += `${el}`);

    return Number(reverseNum);
}
