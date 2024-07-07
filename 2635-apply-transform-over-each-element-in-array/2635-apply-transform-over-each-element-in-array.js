/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = [];
    // 반복문을 돌리면서 fn 함수의 내용을 적용시켜야함
    arr.forEach((el, i) => {
        newArr.push(fn(el, i));
    })
    return newArr;
};