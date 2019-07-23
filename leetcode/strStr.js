// https://www.yuque.com/db/zn6g8d/leetcode-20190723
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return needle.length===0 ? 0 : haystack.search(needle)
};

var haystack = 'sjdflkasd'
var needle = 'as'

console.log(strStr(haystack, needle))
