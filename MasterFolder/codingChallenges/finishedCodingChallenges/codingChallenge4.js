/*
Input: String, english sentence
Output: String, sorted string
A4B5C7, skip if theres no letter
case insensitive


*/

function countLetters(inputValue) {
    let resultMap = {}
    let result
    //Loop through the letters
    for (let i = 0; i < inputValue.length; i++) {
        //Make sure the string is lower case
        let letter = inputValue[i].toLowerCase()
        //Make sure they are letters
        if (letter < 'a' || letter > 'z')
            continue
        //Count the letter and number of times it occurs
        if (resultMap[letter]) {
            resultMap[letter]++
        } else {
            resultMap[letter] = 1
        }
        //Put into map to sort
        result = Object.keys(resultMap).map(key => {
            return {
                letter: key,
                count: resultMap[key]
            }
        })
        //Sort
        result.sort((a, b) => {
            return a.letter > b.letter ? 1 : -1
        })
    }
    //Concat the values
    let stringValue = ''
    for (let i = 0; i < result.length; i++) {
        if (i < result.length - 1) {
            stringValue += result[i]['letter'] + result[i]['count'] + '_'
        } else {
            stringValue += result[i]['letter'] + result[i]['count']
        }
    }
    console.log(stringValue)
    // for (let i = 0; i < result.length; i++) {
    //     console.log(resultMap[i])
    // }

}


countLetters('helloTHisiscoooooooool')

