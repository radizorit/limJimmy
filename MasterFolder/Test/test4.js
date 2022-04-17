let s = "is2 sentence4 This1 a3"
function sortSentence(s) {
    let result = []
    //split into the array using .split(' ')
    let splitS = s.split(' ')
    console.log(splitS)
    // return splitS
    //then loop through each element, checking the last letter for each to identify the new
    for (let i = 0; i < splitS.length; i++) {
        // console.log(splitS[i][splitS[i].length - 1] - 1, splitS[i].slice(0, splitS[i].length - 1))
        result[splitS[i][splitS[i].length - 1] - 1] = splitS[i].slice(0, splitS[i].length - 1)
    }
    console.log(result)
    //array placement
    //put it into a new array

    //return new array
    return result.join(' ')
};

let array = [1, 2, 4, 4, 5, 6, 7, 8, 43, 10]

let newArray = array.splice(2, 1, 3)
console.log(newArray)
let splicedAgain = newArray.splice(9, 1, 9)
console.log(splicedAgain)
// console.log(newArray)