/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 方法一：
// string -> array ->| sort |-> string ->& compare &=>Boolean

var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')  
};


var s = "anagram", t = "nagara";
console.log(isAnagram(s, t))