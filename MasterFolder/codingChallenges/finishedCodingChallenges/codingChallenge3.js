let [, , str] = process.argv

let splittedArr = str.split('_')
// console.log(splittedArr)
let index_map = {}
//Setting up index_map
for (let i = 0; i < splittedArr.length; i++) {
    let splitStr = splittedArr[i].split('')
    index_map[splitStr[0]] = +splitStr[1]
}

//getting keys
let sortedKeys = Object.keys(index_map).sort()
console.log('Sorted keys:', sortedKeys, 'Index_map:', index_map)

//Iterate through sortedKeys
let finalResult = ''
for (let i = 0; i < sortedKeys.length; i++) {
    let key = sortedKeys[i]
    let count = index_map[key]
    for (let j = 0; j < count; j++) {
        finalResult += key
    }
}

/*
//Pseudo
//Proper planning / thinking
//Implementation

//Why does this code go here?
//Why do I need this? Why do I need to do this
*/


let objectValues = Object.values(index_map)
console.log('Object values:', objectValues)

let finalResult2 = ''
// for (let i = 0; i < sortedKeys.length; i++) {
//     //Loop through each key (multiple times)
//     //If the current count is less than total sum then add next letter
//     while (index_map[sortedKeys[i]] > 0) {
//         for (let j = 0; j < index_map[sortedKeys[i]]; j++) {
//             finalResult2 += sortedKeys[i]
//             index_map[sortedKeys[i]] = index_map[sortedKeys[i]] - 1

//         }
//     }
//     // for (let j = 0; j < index_map[sortedKeys[i]]; j++) {

//     // }

// }

let currentMax = 0
for (let i = 0; i < objectValues.length; i++) {
    currentMax = Math.max(objectValues[i], currentMax)
}
console.log('currentmax', currentMax)
for (let i = 0; i <= currentMax; i++) {
    // for (let j = 0; j <= index_map[sortedKeys[i]]; j++) {
    //Loop through all the total number of 
    for (let j = 0; j <= sortedKeys.length; j++) {
        if (index_map[sortedKeys[j]] > 0) {
            finalResult2 += sortedKeys[j]
            index_map[sortedKeys[j]] = index_map[sortedKeys[j]] - 1
        }
    }
}
// for (let i = 0; i < sortedKeys.length; i++) {
//     finalResult2 += sortedMap[i]['letter']
// }
console.log('finalResult', finalResult, 'finalResult2', finalResult2)
// console.log(finalResult2)
/*
1) Iterate it out, a1_b2_c3 abbccc
2) Interlace it, abcbcc

Both cases output has to be alphabetical
*/