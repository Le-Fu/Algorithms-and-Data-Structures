function curry(fn) {
    let len = fn.length
    let argArr = []
    return function inner(...args) {
        argArr = argArr.concat(args)
        if (argArr.length >= len) {
            return fn.apply(this, argArr)
        } else {
            return inner
        }
    }
}

function add(a, b) {
    return a + b;
}



let curryAdd = curry(add)
console.log(curryAdd(1)(2)(3))

