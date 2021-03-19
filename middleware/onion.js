const m1 = async (data, next) => {
    console.log(1);
    data.a++;
    await next();
    console.log(5);
    console.log(data);
}
const m2 = async (data, next) => {
    console.log(2);
    data.a++;
    await next();
    console.log(4);
}
const m3 = async (data, next) => {
    console.log(3);
    data.a++;
    await next();
}

// function onion(items) {
//     return function (data) {
//         return run(0)
//         function run(i) {
//             let next = items[i]
//             if (!next) return Promise.resolve()
//             return next(data, run.bind(null, i + 1));
//         }
//     }
// }

// m1(data, m2(data, m3(data, Promise.resolve())))
function onion(items) {
    return function (data) {
        function run(next) {
            if (!next) return Promise.resolve()
            return next(data, run.bind(null, items.shift()));
        }
        return run(items.shift())
    }
}
// onion([m1, m2, m3])({ a: 0 })
onion([m1, m2, m3])({a:0}).then(() => onion([m3, m2, m1])({a:0}));

// => 1
// => 2
// => 3
// => 4
// => 5
// => {a: 3}

// => 3
// => 2
// => 1
// => 5
// => {a: 3}
// => 4




