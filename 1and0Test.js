function generate(timeBlockLength, shiftDuration, option) {
    /*timeBlockLength AND shiftDuration determines: 60, 10 
        1) numRows --> 24 --> (60 * 24) / timeBlockLength --> 24
        2) numCols --> 15 --> numRows - shiftHeight + 1
        3) shiftHeight --> 10 --> NUMBER OF DRIVERS NEEDED AT A TIME 
                --> (60/timeBlockLength) * shiftDuration --> 10 
                (also the max consecutive 1s in a column)
                AND max consecutives 1s in a row
    */

    // 1 day = 60 min * 24 hours
    //rows
    let numRows = (60 * 24) / timeBlockLength
    let shiftHeight = (60 / timeBlockLength) * shiftDuration
    let numCols = numRows - shiftHeight + 1
    //columns

    //15 starting times --> 1 hr BlockList, 10 hr shift, 
    console.log({ 'timeBlockLength': timeBlockLength, 'shiftDuration': shiftDuration, 'numRows': numRows, 'numCols': numCols, 'shiftHeight': shiftHeight })
    let masterArray = []
    // for(let i = 0; i<numRows; i++) {
    for (let i = 0; i < numRows; i++) { //MAKE SURE NUMROWS HERES MATCHES K. IF LOOP "K" has numCols then CHANGE THIS TO numCols
        let newArray = Array(numCols).fill(0)
        masterArray.push(newArray)
    }

    //This determines the 1 and
    for (let i = 0; i < numRows; i++) {
        //Iterate through every array in masterArray
        for (let j = 0; j < numCols; j++) {
            if (j < shiftHeight && i - j > numCols) {
                //&& ((j - i) <= shiftHeight) && i - j < numCols
                masterArray[i][i - j] = 1
            }
            //Within each array of master array, we want to have the first shiftHeight (number) then have 
            // for (let k = 0; k < shiftHeight; k++) {
            //     if (i + j - k > k && i + j - k < numCols) { //MATCH WITH THE LOOP THAT MAKES ALL THE ARRAY
            //         masterArray[i][i - k] = 1
            //     }
        }
    }
    for (let i = 0; i < masterArray.length; i++) {
        console.log(masterArray[i].join(' '))
    }
}

// for (let i = 0; i < masterArray.length; i++) {
//     console.log(masterArray[i].join(' '))
// }



// console.log(masterArray[0].concat(masterArray[1]).concat(masterArray[2]).concat(masterArray[3]).join(' '))

// console.log(masterArray[0], masterArray.length, masterArray)   
// }

generate(60, 10)

//input 60 for timeblocks
//input 10 is for shift length