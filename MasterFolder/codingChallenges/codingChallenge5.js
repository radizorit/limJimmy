//study between loop and recursion --> call function then it takes memory STUDY MAIN DIFFERENCE




//Write a cml program
//Keyboard input where L is left and R is right
//00100 --> input is L then it will be 01000
//if input is R then it will be 00100
//Q is to quit

//What is my idea?
//How do I take command input?
//program if clicked L then move the 1 left once
//if clicked R then move the 1 right once

//it's going to ask for the command then take a response and based on that it will print the next state

//welcome to application
//Command? 
//L

//01000
//Command?

//When pressed q then it will say bye

const e = require('cors');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//error validation
//use of functions

//have the command prompt ask 
//main function  -- helper function
//use a loop until command is Q

//have a rl.question function ask what is command
//take the command and come out with an output of the array depending on L or R
//command will ask prompt until Q is pressed as an input

//Have a function that asks for the Command
//Within that function have a while loop that stops when the response is Q
//If the response is any value BUT Q then continue the loop and keep asking the cml "Command"
//If there is an L input and is on index 0, return the array with 1 as the last index
//If there is an R input and is on the last index, then make sure 1 is the first index    
//If there is L then move the 1 in the array to left
//IF there is a R then move the 1 to the right

//While response is not Q
//get response
//Validate response
//if response is L 
//move -1
//this is where you decide the wrap-around
//print
//else if response is R
//move +1
//print

function ask() {
    //wrap in promise
    return new Promise((resolve) => {
        rl.question('Command?', (response) => { resolve(response) })
    })
    // rl.question('Command ?', function (response) {
    //     console.log(response)

    // });
}

function validate(response) {
    // return true
    if (response == 'r' || response == 'l' || response == 'toggle') {
        return true
    } else {
        return false
    }
}

function move(unit, arr) {
    if (isNaN(arr[0])) {
        if (unit === 1) {
            if (arr.indexOf('x') === arr.length - 1) {
                arr[0] = 'x'
                arr[arr.length - 1] = 'o'
            } else {
                arr[arr.indexOf('x') + 1] = 'x'
                arr[arr.indexOf('x')] = 'o'

            }
        }
        if (unit === -1) {
            newUnit = Math.abs(unit)
            if (arr.indexOf('x') === 0) {
                arr[arr.length - 1] = 'x'
                arr[0] = 'o'
            } else {
                savedIndex = arr.indexOf('x')
                arr[savedIndex - 1] = 'x'
                arr[savedIndex] = 'o'
            }
        }
    } else {
        if (unit === 1) {
            if (arr.indexOf(unit) === arr.length - 1) {
                arr[0] = 1
                arr[arr.length - 1] = 0
            } else {
                arr[arr.indexOf(unit) + 1] = 1
                arr[arr.indexOf(unit)] = 0

            }
        }
        if (unit === -1) {
            newUnit = Math.abs(unit)
            if (arr.indexOf(newUnit) === 0) {
                arr[arr.length - 1] = 1
                arr[0] = 0
            } else {
                savedIndex = arr.indexOf(newUnit)
                arr[savedIndex - 1] = 1
                arr[savedIndex] = 0
            }
        }
    }
}

function toggle(arr) {
    if (isNaN(arr[0])) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 'o') {
                arr[i] = 0
            } else if (arr[i] == 'x') {
                arr[i] = 1
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                arr[i] = 'o'
            } else if (arr[i] == 1) {
                arr[i] = 'x'
            }
        }
    }
}
let arr = [0, 0, 1, 0, 0]
async function main() {

    let response
    while (response != 'q') {
        response = await ask()
        // console.log(response)
        if (!validate(response)) {
            console.log('invalid input')
            continue
            //continue skips the current element and continues with the next iteration
            //break kills the loop 
            //return -- returns from the function
        }
        if (response == 'r') {
            move(1, arr)
            console.log('R:', arr)
            return main()
        } else if (response == 'l') {
            move(-1, arr)
            console.log('L:', arr)
            return main()
        } else if (response == 'toggle') {
            toggle(arr)
            console.log('Toggle:', arr)
            return main()
        } else if (response == 'q') {
            break
        }
    }
    console.log('thanks for playing!')
    rl.close();
}

main()