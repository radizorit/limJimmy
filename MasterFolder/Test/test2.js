const e = require("cors")

const list = [3, -4, 5, 2, -1, 10, -2, 1]
//should be [2,5]
//10 total
//ideal is [4,9] or [5,9]
let left = 0
let right = 0

let globalMax = list[0]
let localMax = list[0]
let spread = 0
let priorValue = 0
let result = []
//https://www.youtube.com/watch?v=AkGbjc6-wnA&ab_channel=CodingOptimized
for (let i = 0; i < list.slice(0, 5).length; i++) {
    console.log(list[i])
}
let value = 0
for (let i = 0; i < list.length; i++) {
    //If negative consecutive times, you have to handle it
    if (i == 0) {
        right++
        // value = list[0]
    }

    if (list[left + 1] + list[right + 1] > list[left] + list[right]) {
        // value = list[right + 1] - list[left-1]
        left++
        right++
    } else if (list[left - 1] + list[right - 1] > list[left] + list[right]) {
        left--
        right--
    } else if (list[right + 1] > 0) {
        right++
    } else if (list[left - 1] > 0) {
        left--
    } else if (list[right + 1] + list[right + 2] > 0) {
        right++
    } else if (list[left - 1] + list[left - 2] > 0) {
        left--
    }
    // } else if (list[left - 1] > 0) {
    //     left--
    // } else if (list[left - 1] < list[left - 2]) {
    //     left = left - 2
    // } else if (list[right + 1] > 0) {
    //     right++
    // } else if (list[right + 1] < list[right + 2]) {
    //     right = right + 2
    // }
}
console.log(left, right)
//If left++ AND right++ then make sure it is a net positive move
//If left-- AND right-- then make sure it is a net positive move
//Best to check if a right++ is net positive as well
//Best to check if a right-- is a net positive as well
//Best to check if a left++ is net positive as well
//Best to check if a left-- is a net positive as well


// for (let j = 0; j < list.length; j++) {
//     localMax = Math.max(localMax, localMax + list[j])

    // if (list[j] < list[j + 1] && list[left] < 0) {
    //     left++
    //     right++
    // } else if (list[j] <= list[j + 1]) {
    //     right++
    // } else if (list[j] >= list[j - 1]) {
    //     left++
    // } else if (list[j + 2] >= list[j + 1]) {
    //     right = right + 2
    // } else if (list[j - 2] >= list[j - 1]) {
    //     left = left - 2
    // }

    // result = [left, right]
// }