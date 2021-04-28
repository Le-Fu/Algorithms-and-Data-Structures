
// num * 10^time
function safePow10(num, time) {
    if (isNaN(num) || isNaN(parseFloat(num))) {
        throw new Error('Invalid number')
    }

    let isNav = parseFloat(num) < 0

    num = Math.abs(num)

    num = parseInt(num) === parseFloat(num) ? num + '.0' : num

    let numArr = `${num}`.split('')
    let needReverse = time < 0

    if (needReverse) {
        numArr = numArr.reverse()
    }

    let dotIndex = numArr.indexOf('.')

    if (dotIndex < 0) {
        return num * Math.pow(10, time)
    }

    let i = dotIndex
    time = Math.abs(time)
    for (; time > 0; i++, time--) {
        let cur = numArr[i]
        let temp = typeof numArr[i + 1] === 'string' ? numArr[i + 1] : '0'
        numArr[i + 1] = cur
        numArr[i] = temp
    }

    if (needReverse) {
        return isNav ? parseFloat(numArr.reverse().join('')) * -1 : parseFloat(numArr.reverse().join(''));
    } else {
        return isNav ? parseFloat(numArr.join('')) * -1 : parseFloat(numArr.join(''));
    }
}

// console.log(safePow10('-110111.000090', -5) === -1.1011100009);
// console.log(safePow10('-0', 1));
// console.log(safePow10('-1.00009', 3));
// console.log(safePow10('0.00009000001', 10));
// debugger
// console.log(safePow10(-10, -4));
// console.log(safePow10('0.3', -4));
console.log(safePow10('-110111.000090', -4));



