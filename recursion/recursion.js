function pasicaTriangle(n) {
    let result = [[1]];
    for (let i = 1; i <= n; i++) {
        let row = [1];
        for (let j = 1; j < i; j++) {
            let next = result[i - 1][j-1] + result[i - 1][j];
            row.push(next)
        }
        row.push(1)
        result.push(row)
    }
    return result
}

const triangle = pasicaTriangle(10)
console.log(triangle);
