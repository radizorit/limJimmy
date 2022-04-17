let [, , dim] = process.argv

if (!dim) {
    throw new Error('Empty dimensions')
}
if (isNaN(dim)) {
    throw new Error('Not a number')
    // !! --> convert to boolean
}
dim = parseInt(dim)

if (dim % 2 == 0) {
    throw new Error('Even number')
}
if (dim < 1) {
    throw new Error('It is a negative number!')
}

if (dim == 1) {
    console.log(dim)
    return
}

let table = new Array(dim)
for (let i = 0; i < dim; i++) {
    table[i] = new Array(dim)
}

//Start from center
//Mark it as a 1
//Go out and out
//Toggle between 0 and 1 and print
//

// for (let i = 0; i < table.length; i++) {
//     table[i].fill(0)
// }

let middle = Math.floor(dim / 2)
table[middle][middle] = 1
let left = middle - 1//index
let right = middle + 1//index
let mode = 0 //1 and 0

//Work on visualizion of iterating loops
while (left >= 0) {
    //Logic
    for (let i = left; i <= right; i++) {
        table[left][i] = mode
        table[right][i] = mode
        table[i][left] = mode
        table[i][right] = mode
    }

    left--
    right++
    if (mode == 1) {
        mode = 0
    } else {
        mode = 1
    }
}

for (let i = 0; i < table.length; i++) {
    console.log(table[i].join(' '))
}

