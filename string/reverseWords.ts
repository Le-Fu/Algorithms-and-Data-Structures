
// export default function reverseWords(s: string) {
//   let tempStrArr = s.split(' ')
//   let rs = tempStrArr.map((item: string) => {
//     return item.split('').reverse().join('')
//   })
//   return rs.join(' ')
// }


// function reverseWord(s: string) {
//   let rs = ''
//   for (let i = s.length; i > 0; i--) {
//     rs += s[i]
//   }
//   return rs 
// }

export default function reverseWords(s: string) {
  return s.match(/[\w']+/g).map((item: string) => {
    return item.split('').reverse().join('')
  }).join(' ')
}