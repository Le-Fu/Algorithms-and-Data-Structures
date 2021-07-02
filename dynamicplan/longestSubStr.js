function findTheLongestSubStr(str) {
    let longestStr = ''
    let tempStr = ''
    let l = str.length;
    for (let i = 0; i < l; i++) {
        let cur = str[i]
        if (!isNumStr(cur)) {
            continue
        }
        tempStr = cur
        for (let j = i + 1; j <= l; j++) {
            const next = str[j]
            if (!isNumStr(next)) {
                break
            }
            if (Number(next) === Number(cur) + 1) {
                tempStr += next
            } else {
                break
            }
            cur = next
        }

        if (tempStr.length >= longestStr.length) {
            longestStr = tempStr
        }
    }

    return longestStr
}

function isNumStr(str) {
    return typeof Number(str) === 'number'
}

const l = findTheLongestSubStr('12345234d56abc4561s23d34567')
console.log(l);