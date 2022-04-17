function onesAndZeroes(chosenSquare, mode) {
    if (chosenSquare % 2 === 0) {
        console.log('Skip')
        chosenSquare = 0
    }

    let masterArray = [[mode]]
    let modeChosen = mode
    let oppositeChosen

    if (mode == 1) {
        oppositeChosen = 0
    } else {
        oppositeChosen = 1
    }

    for (let i = 0; i < chosenSquare; i++) {
        let newArray = Array(chosenSquare).fill(oppositeChosen) //can change this and put it as a paremeter later
        masterArray.push(newArray)
    }

    let middle = Math.round((chosenSquare - 1) / 2)

    if (middle % 2 == 0) {
        outside = mode
    } else {
        outside = oppositeChosen
    }

    //If mode is 1
    //Middle is 1
    //Find middle(it is in index form)
    //If middle is even then outside = mode
    //ELSE middle is odd then outside = !mode
    let controllers = {
        middle: middle,
        outside: outside
        // evenRowsFromMiddle: evenRows
    }
    console.log('Controllers:', controllers)
    let count = 0
    // while (masterArray)
    while (count != chosenSquare) {
        if (mode == 1) {
            mode = 0
        } else {
            mode = 1
        }
        masterArray.push(Array(count + 2).fill(mode))
        masterArray.unshift(Array(count + 2).fill(mode))
        count++

    }
    // for (let i = 0; i < masterArray.length; i++) {
    //     console.log(masterArray[i].join(' '))
    // }
    for (let i = 0; i < masterArray.length; i++) {
        console.log(masterArray[i].join(' '))
    }

}


onesAndZeroes(5, 1)
console.log('break')
// onesAndZeroes(7, 1)
// console.log('break')
// onesAndZeroes(9, 1)
// console.log('break')
// onesAndZeroes(11, 1)