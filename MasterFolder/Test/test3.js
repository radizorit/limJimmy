const numbers = [4, 2, 5, 1, 3]


numbers.sort((a, b) => {
    // return b - a //descending
    return a - b //ascending
})

console.log(numbers)
/*
------------------------------------------------------------------------
*/

function patterns(pattern, word) {
    let patternArray = pattern.split('')
    let wordArray = word.split(' ')
    let compareString = ''
    let index_map = new Map()
    let set = new Set();
    for (let i = 0; i < patternArray.length; i++) {
        if (!index_map.has(patternArray[i])) {
            index_map.set(patternArray[i], wordArray[i])
        } else if (index_map.get(patternArray[i]) !== wordArray[i]) {
            return false
        }
        set.add(wordArray[i])
    }

    if (index_map.size !== set.size) {
        return false
    } else {
        return true
    }
};


console.log(patterns('abba', 'dog cat cat dog'))


/*
------------------------------------------------------------------------
*/
const input = [0, 1, 2, 3, 4] //[3, 5, 7, 4, 1]
//[7, 5, 3, 1, 4]

// function addThree(input, k) {
//     let code2 = [...input, ...input]
//     let input2 = []
//     for (let i = 0; i < input.length + 1; i++) {
//         let sum = 0
//         if (k > 0) {
//             for (let j = i; j < i + k; j++) {
//                 sum += code2[j]
//             }
//             input2[i] = sum
//         } else if (k < 0) {
//             for (let j = i; j < i + k; j--) {
//                 sum += code2[j]
//             }
//             input2[i] = sum
//         } else if (k == 0) {
//             input[i] = 0
//         }

//     }
//     return input2.slice(1)
// }

function addThree(input, k) {
    let code2 = [...input, ...input]
    let input2 = []
    for (let i = 0; i < input.length + 1; i++) {
        let sum = 0

        for (let j = i; j < i + k; j++) {
            sum += code2[j]
        }
        input2[i] = sum
    }
    return input2.slice(1)
}

// console.log(addThree(input, 2))

// let k = 3
// let n = 11
// let fill = 'x'
// let filler1 = new Array(k - (n % k)).fill(fill)
// // console.log(filler)
// let filler2 = new Array(2).fill(fill)
// console.log('Filler1:', filler1, 'FIller2:', filler2, 10 % 3)
// // console.log(10 % 3)

let n = '00000000000000000000000000001011'
let count = 0
function hammingWeight(n) {
    for (let i = 0; i < n.length; i++) {
        if (n[i] == 1) {
            count++
        } else {
            continue
        }
    }
    return count
}

// console.log(hammingWeight(n))

// let arr = [64, 12, 25, 22, 11]
let arr = [64, 12, 25, 22, 11, 100, 200, 3052452, 12421452, 11, 1, 0, -1, -5]
let nLength = arr.length

function checker(arr) {
    for (let i = 0; i < nLength - 1; i++) {
        let min_dx = i
        for (let j = i + 1; j < nLength; j++) {
            if (arr[j] < arr[min_dx]) {
                temp = arr[min_dx]
                arr[min_dx] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}


console.log(checker(arr))



/*
------------------------------------------------------------------------
*/

//create function called groupBy
function groupBy(array, callback) {
    //accepts an array and a callback
    let newMap = {}
    //returns an object, so we need to create a map
    for (let i = 0; i < array.length; i++) {
        //iterate through the array
        let emptyArray = []
        //perform the callback on each element
        if (!newMap[callback(array[i])]) {
            //put it into map
            newMap[callback(array[i])] = [array[i]]

            // console.log(array[i])
        } else {
            newMap[callback(array[i])] = newMap[callback(array[i])].concat(array[i])
            // console.log(array[i])
        }
    }
    return newMap
}
// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


/*
------------------------------------------------------------------------
*/