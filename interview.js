
// create a function addNumbers that accepts a number and recursively add each number from 1 to num
// base case: num <= 1

function addNumbers(number) {
  if (number <= 1) {
    return number
  }
  return number + addNumbers(number - 1)
}

//console.log(addNumbers(4))

// /*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
* /


// declare a function "between50And500" that accepts a number
// if the number between 50 and 500, return true
// otherwise it'll return false

function between50And500(num) {
  if (num > 50 && num < 500) {
    return true
  } else {
    return false
  }
}

//console.log(between50And500(555))



// /*
// Create a function "divBy100" that takes a number as an argument.
// "divBy100" should return a true if the number passed to it is divisible by 100.
// For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
// */


// declare a function "divBy100" that accepts a number
// if that number is divisible by 100, return true
// otherwise it'll return false

function divBy100(num) {
  if (num % 100 === 0) {
    return true
  } else {
    return false
  }
}

//console.log(divBy100(600))

// /*
// Create a function "negativeOrEven" that takes a number as an argument.
// "negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
// For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
// */

// declare a fucntion "negativeOrEven" that accepts a number
// if the number is negative OR it is an even number then return true
// otherwise return false

function negativeOrEven(num) {
  if (num < 0 || num % 2 === 0) {
    return true
  } else {
    return false
  }
}

//console.log(negativeOrEven(-3))

// /*
// Create a function "passAllTests" that takes an array of functions and another value as arguments.
// Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
// If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
// */

// declare a function "passAllTests" that accepts an array of function and an argument
// iterate through the array of functions
// if the evaluated results of passing the value argument through function at the index yields false
// return false
// otherwise return true

function passAllTests(array, num) {
  let passedTest
  for (let i = 0; i < array.length; i++) {
    if (array[i](num) === true) {
      passedTest = true
    } else {
      return false
    }
  }
  return passedTest
}



// /*
// Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500, divisible by 100, and a negative number OR even. Then test the number 250.
// */
// let funcArray = [between50And500, divBy100, negativeOrEven]
// console.log(passAllTests(funcArray, 300))


// /*
// Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
input = string
output = boolean

function isPalindrome(string) {
  if (string.split('').reverse().join('') === string) {
    return true
  } else {
    return false
  }
}
console.log(isPalindrome('racecar'))

// (a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
// */

declare a function isPalindrome that accepts a string
if the string is strictly equal to the string when it is split, reversed, and joined back together
return true
otherwise return false

function isPalindrome(str) {
  if (str === str.split('').reverse('').join('')) return true
  else return false
}

// function isPalindrome(str){
//   if ()
// }

// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("word"))

/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

// declare a function add that accepts a number
// return function accepts a number
// return the sum of both numbers

function add(num) {
  return function (input) {
    return num + input
  }
}

const addBy10 = add(10)
console.log(addBy10(20))

// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

// declare a function getLength that accepts string and i = 0 and recursively incrememnts the index
// base case: if string at index doesn't exist, then return i

function getLength(string, i = 0) {
  if (!string[i]) {
    return i;
  }
  return getLength(string, ++i)
}

console.log(getLength("string"))


/*
Create a function "concatWithSpace" that takes in two arguments (both will be strings).
"concatWithSpace" should return the two strings concatenated with a space in between them.

For example, if the arguments are "hello" and "world" then "concatWithSpace" should return "hello world".
*/

// declare a function concatWithSpace that accepts two strings
// return both strings with a space in between them

function concatWithSpace(strOne, strTwo) {
  return strOne + " " + strTwo
}

console.log(concatWithSpace("hello", "world"))


/*
Create a function called "shorten". "shorten" takes three arguments (an array, a function, and an initial value). "shorten" is designed to shorten this array's multiple values to just one value by applying the callback function to each of the values in the array.

This is how it works:

- The shorten function will have an "accumulator value" which will initially be set to the initialValue argument. Its job is to accumulate the outputs of each call to the callback function.
- The array is iterated over, passing the accumulator value and the next array element to the callback function.
- The callback function's returned value becomes the new accumulator value
- The next loop executes with the new accumulator value.

A test case will be provided to you when you're ready for it.
*/

// declare a function shorten that accepts an array, a callback, and an initial value
// declare a new variable acc = initialValue
// iterate through the array
// invoke callback and pass acc and array element through it
// acc = evaluated results of invoking callback with passed through element


// function shorten(array, callback, initialValue) {
//   let acc = initialValue;
//   array.forEach((element) => {
//     acc = callback(acc, element)
//   })
//   return acc
// }

function shorten(array, callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i])
  } return acc
}

/*
Check that your 'shorten' function is working correctly by passing an array to it with the string values 'is', 'so', 'much' and 'fun!' as the first argument.
Pass your concatWithSpace function as our callback and the string 'Programming' as the initialValue argument. The result of this call to shorten should be the string 'Programming is so much fun!'
*/

let arrayStr = ['is', 'so', 'much', 'fun!']
console.log(shorten(arrayStr, concatWithSpace, "Programming"))

/*
Create a function "countTimes" that takes in two arguments (an array and a search value)
"countTimes" should return the number of times the search value is present in the array.

Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

// declare a function countTime that accepts an array and a value
// declare a new variable searchValue = 0
// iterate through the array
// if array element at the index is equal to the value
// incremment searchValue
// return searchValue

function countTimes(array, value) {
  let searchValue = 0;
  array.forEach((element) => {
    if (element === value) searchValue++
  })
  return searchValue
}

console.log(countTimes([1, 8, 9, 9, 10], 9))

/*

Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).

"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.

Example:
wordSearchLetterCounter([

  ["D", "E", "Y", "H", "A", "D"],

  ["C", "B", "Z", "Y", "J", "K"],

  ["D", "B", "C", "A", "M", "N"],

  ["F", "G", "G", "R", "S", "R"],

  ["V", "X", "H", "A", "S", "S"]

], "D") ➞ 3

"D" shows up 3 times: twice in first row, once in third row.

*/

// declare a function wordSearchLetterCounter that accepts an array of arrays and a letter
// initialize new variable counter = 0
// iterate through array
// counter sums the invocation of countTimes with passed in array element at index i and letter
// return counter

function wordSearchLetterCounter(array, char) {
  let counter = 0
  for (let i = 0; i < array.length; i++) {
    counter += countTimes(array[i], char)
  }
  return counter
}

console.log(wordSearchLetterCounter([

  ["D", "E", "Y", "H", "A", "D"],

  ["C", "B", "Z", "Y", "J", "K"],

  ["D", "B", "C", "A", "M", "N"],

  ["F", "G", "G", "R", "S", "R"],

  ["V", "X", "H", "A", "S", "S"]

], "D"))


// Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:

// If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.

// If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.

//function takes one input - input is a function that returns true or false
//if input function has an argument, the chekcer callback is invoked and boolean result is returned
//if function does NOT have an argument, return count of times callback function has been invoked and evaluated true of false

// declare a function checkerLogger that accepts a callback that returns a boolean
// initialize an object with key value pairs
// true: 0
// false: 0
// return function accepts either no argument or an argument
// if there is an argument, then invoke callback with the passed in argument which will return true or false
// if the evaluated results of invoking callback equals false
// increment false
// return false
// else if the evaluated results of invoking callback equals true
// increment true
// return true
// otherwise if there is no argument, return the object


function checkerLogger(callback) {
  let obj = {
    true: 0,
    false: 0
  };
  return function (arg) {
    if (arg) {
      if (callback(arg) === false) {
        obj[false]++
        return false
      } else if (callback(arg) === true) {
        obj[true]++
        return true
      }
    } else {
      return obj
    }
  }
}


const isOdd = num => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter()) //->  { true: 0, false: 0 }
console.log(oddCounter(3))//-> true
console.log(oddCounter(2))//->  false
console.log(oddCounter()) //-> { true: 1, false: 1 }


/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.

Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
/*

// declare a function countChar that accepts an input string and a target string
// base case: if index of string is undefined, return count
// recursive call: if index of string is strictly equal to target number, then count increases by 1

function countChar(input, target, count = 0, i = 0) {
  if (!input[i]) {
    return count
  }
  if (input[i] === target)
  count++
  return countChar(input, target, count, ++i)
}

console.log(countChar('hello world', 'o'))


/*
Write a function "passwordSafe" that takes two arguments: a string which will be the password, and a value which will be the "safe". "passwordSafe" should return a function that takes in a password as a string.
If that password doesn’t match the one originally provided, return the string “You have entered the wrong password”. If the passwords do match, return the safe.

Example:
const mySafe = passwordSafe('myPassword', 'My Super Secret');
mySafe('wrongPassword') -> "You have entered the wrong password"
mySafe('myPassword') -> "My Super Secret"
*/

// declare a function passwordSafe that accepts a password string and a safe value
// return function accepts a password string
// if password strings aren't equal to each other 
// return "You have entered the wrong password"
// otherwise return the safe value

function passwordSafe(password, safe) {
  return function (passStr) {
    if (password !== passStr)
      return "You have entered the wrong password";
    else return safe
  }
}

const mySafe = passwordSafe('myPassword', 'My Super Secret');
console.log(mySafe('wrongPassword')) //-> "You have entered the wrong password"
console.log(mySafe('myPassword')) //-> "My Super Secret"


// console.log("Hello World!");
/*
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.
Example:
sumAllElements([1,2,3,4], 10) -> 20
Note: Do NOT use any native JS methods, or loops
*/
// use recursion to add all the elements in the array from the initial value argument to the end of the array
function sumAllElements(array, initialValue, i = 0) {
  //base case: if the index of the array is greater than the array length return the sum
  if (array.length <= i)
    return initialValue

  return array[i] + sumAllElements(array, initialValue, ++i)
}
console.log(sumAllElements([1, 2, 3, 4], 10));


/*
Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.
example:
const iRemember = memoryMaker();
iRemember('hello'); -> ['hello']
iRemember(1); -> ['hello', 1]
iRemember('world'); -> ['hello', 1, 'world']
iRemember(true); -> ['hello', 1, 'world', true]
*/
// write a function that takes no parameters and returns a function
// the returned function should accept a value as an argument
// create an empty array and push each new value into the array. 

// function memoryMaker(){
//   let array = []
//   return function(value){
//   array.push(value)
//     return array
//   }
// }

// const iRemember = memoryMaker();
// console.log(iRemember('hello'));// -> ['hello']
// console.log(iRemember(1)); //-> ['hello', 1]
// console.log(iRemember('world'));// -> ['hello', 1, 'world']
// console.log(iRemember(true));//-> ['hello', 1, 'world', true]

/*
Write a function 'anagrams' that produces all possible anagrams of a string and outputs them as an array.
Example:
console.log(anagrams('aabc')); -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]
// abc -> abc, acb, bac, bca, cab, cba
*/
// write a function that produces all possible anagrams of a string and outputs them as an array
// create an empty array that can hold all the possibilities
// turn the string into an array 
// function anagrams(string){
//   let newArray = []
//   let output = string.split()
//   for (let i = 0; i < output.length; i++){
//     if(output[i] )
//   };
// }

write a function that will output the strings of the array in a directory format
arr = [
  '/animals/dogs',
  '/animals/cats',
  '/tools/hammer',
  '/tools',
  '/animals/cats',
  '/tools/screwdriver/sharp'
]


output should look like

/*- animals
 - dogs
 - cats
- tools
 - hammer
 - screwdriver 
  - sharp*\

// iterate thru the following array
["animals", "dogs"]
// check if "animals" exist in the obj, if not, add it to the obj, add its value as an empty array
obj = 
{
  "animals": []
}
// else 
obj[animals].push("dogs")
if (obj[animals]) 

remove duplicates from the array
sort the arrary
split each element by /, now you have an array of 1+ elements
  recursively push element into a new array [prevElement, [currElement]]

  
https://joelgriffith.net/array-reduce-is-pretty-neat/

Simplified example without the file (just file paths).
arr = [
  '/animals/dogs',
  '/animals/cats',
  '/tools/hammer',
  '/tools',
  '/animals/cats',
  '/tools/screwdriver/sharp'
]

console.log(  '/tools/screwdriver/sharp'.split('/'))

var fileTree = {};

function mergeTree(array1) {
  array1.reduce(function mergeIntoFileTree(prevDir, currDir){

      // In the first iteration `prevValue ` is fileTree, the blank {}.

      // Does the {} have a property 'src'?
      if (!prevDir.hasOwnProperty(currDir)) {
        prevDir[currDir] = {};
      }

      // In the next call, `prevDir` will now be `src` property of {}
      return prevDir[currDir];
  }, fileTree);
}

arr.forEach(el => mergeTree(el.split('/')));

console.log(fileTree)

console.log(Object.entries(fileTree))

let str = ""
for (let value in Object.values(fileTree)) {
  str +=  " " + value + ":" + "\n" + " "
  console.log(str)
}

