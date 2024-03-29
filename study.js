//function declaration
// function age1(birthAge){
//     return 2030 - birthAge
// }
// console.log(age1(2000))

console.log("We are ready to go and win")
console.log("be there")

// //function expression
// const age2 = function(birthAge){
//     return 2030 - birthAge
// }
// const age33 = age2(1998)
// console.log(age33)

// //Arrow function

// const age44 = birthAge => 2030 - birthAge
// const ageCall = age44(1985)
// console.log(ageCall)
//multiple age 

// const numberOfRetirement = (name, birthAge) =>{
//     const ageRet = 2037 - birthAge
//     const retire = 65 - ageRet

//     return `${name} is left ${retire} to retire`

// }
// const age0 = numberOfRetirement('bob', 1994)
// const age42 = numberOfRetirement('Marie', 1992)

// console.log(age0, age42)

//function call other function 

// const cutFruit = function(fruit){
//     return fruit * 4
// }
// const fruitProcessor = function(orange, apple){
//     const cutOr = cutFruit(orange)
//     const cutAp = cutFruit(apple)

//     return `the number of orange ${cutOr} and number of Apple ${cutAp}`
// }
// console.log(fruitProcessor(2, 4))

//array
// const friends =['peter','simon', 'john', 'kirk']
// // console.log(friends)
// // console.log(friends.length-1)
// friends[2] ='jay'

// console.log(friends)

// const yearsOf = function(birthAge){
//     const age5 = 2030 - birthAge
//     return age5
// }
// const ages = [1993, 1992, 1980, 1975]
// const age1 = yearsOf(ages[0])
// const age2 = yearsOf(ages[1])
// const age3 = yearsOf(ages[2])
// const age4 = yearsOf(ages[3])

// const age1 =yearsOf([1994])
// const age2 = yearsOf([1992])
// console.log(age1, age2)
//console.log(age1, age2, age3, age4)

//firstName, last, age, teacher, friends

// const pacy =[
//     'Manira', 
//     'Paccy',
//     2037 - 1991,
//     ['Mike', 'John', 'Peter','Ruth']
// ]
// console.log(pacy)

// const pacy ={
//     nam:'Manira', 
//     surn:'Paccy',
//     years: 2037 - 1991,
//     friends: ['Mike', 'John', 'Peter','Ruth']
// }
// console.log(pacy['nam'])
// console.log(pacy.surn)

// const forElem = function(){
   
//     for(i = 0; i < 30; i++){
//         console.log(`number is${i}`)
//     }
// }
// forElem()

// const forElem = function(){
//     let i = 0
//    while(i< 10){
    
//     console.log(i)
//     i++
   
//    }
// }
//    forElem()
//     for(i = 0; i < 30; i++){
//         console.log(`number is${i}`)
//     }
// }
// forElem()
// const mathRand = function(){
//     let dice = Math.trunc(Math.random()*6 + 1)
//     while(dice !=6){
//         console.log(dice)
//         dice = Math.trunc(Math.random()*6 + 1)

//     }
//     if(dice === 6){
//         console.log('Dice ends')
//     }
    
// }
// mathRand()
// const countLow = function(num){
//     return [...new Set(num)].sort()
// }
    
// console.log(countLow([3,2,4,5,6,7,3,5,1,8,9,1]))

// const rmoDep = function(num){
//     return num.filter((index, value)=> {
//         if(num.indexOf(value) != index){
//             console.log(index)
//         }
//     } )
// }
//  rmoDep([1,1,2,23,3,2,1,3,3,4,5,6,7,8,7])

//sort
// const rmoDep = function(num){
//     const result = num.sort((a, b) => a-b)
//     return [...new Set(result)]
// }
// console.log(rmoDep([1,1,2,23,3,2,1,3,3,4,5,6,7,8,7]))

//METHODS
//slice methods
// const arr = ['a','e','r','u','i']
// console.log(arr.slice(1, -1))
//console.log(...arr)
//splice
// const arr = ['a','e','r','u','i']
// console.log(arr.splice(1, 2)) //Letters to be deleted 
// console.log(arr.slice(1, 3)) //start from 3 index

// //REVERSE
// const lett =['i','u','o','a','e']
// const result = lett.reverse()
// console.log(result)

//concat
// const lette =['j','h','k','u']
// const number = [1,2,3,4,55,4]

// console.log(lette.concat(number))
//join
// const lette =['j','h','k','u']
// console.log(lette.join('-'))

//at
// const num = [4,3,43,7,8,9]
// console.log(num.at(2))
// const nam = 'Pac'
// console.log(nam.charAt(2))

//  const num = [4,3,43,7,8,9]
//  console.log(num.at(2))

//forEach
// const movements = [200, 400, 600, 700, 900, 500]
// console.log(movements.forEach(mov => mov *2))
// console.log(results)

// const removeFunc = function(){

// movements.forEach((mov, i, array) =>{ // mov is cuurent elemtn,  i is index, entire array
//     if(mov > 200){
//         console.log(`movement ${i+1} you deposited ${mov}`)
//     }
// })
// }
// const movements = [200, 400, 600, 700, 900, 500]
// removeFunc()

//to do an action we use Map
// const removeFunc = function(){
// const result = movements.map((mov) => mov*2)
// console.log(` you deposited ${result}`)
// }
// const movements = [200, 400, 600, 700, 900, 500]
// removeFunc()


// const useDis = new Map ([
//     ['USD', 'Dollars'],
//     ['EUR', 'EUROS']
// ])
// useDis.forEach((mov, i)=>{
//     console.log(`${mov}: ${i}`)
// })
//new array we created variable to store

// const multbyNumber = function(){
// const result = movements.map(mov => mov * euro)
// console.log(result)
// }

// const euro = 1.1
// const movements = [200, 400, 600, 700, 900, 500]
// multbyNumber()

//return used for new array combined

//Map use always return  to put all in one array
// const removeFunc = function(){

// const description = movements.map((mov, i, array) =>{ // mov is cuurent elemtn,  i is index, entire array
//     if(mov > 200){
//         return `movement ${i+1} you deposited ${mov}`
//     }else{
//         return `movement ${i+1} you withdraw ${mov}`
//     }
   
// })
// console.log(description)
// }

// const movements = [200, 400, 600, 700, 900, 500, -455, -300, 500]
// removeFunc()

// const filterNumber = function(){
//     const saveFilter = movementss.filter(mov => mov > 0)
//     console.log(saveFilter)
// }

// const movementss = [200, 400, 600, 700, 900, 500, -455, -300, 500]
// filterNumber()

// removeFunc()

//use return 
// const filterNumber = function(){
//     const saveFilter = movementss.filter(mov =>{
//         if(mov > 0){
//             return mov
//         }

//     } )
//     console.log(saveFilter)
// }

// const movementss = [200, 400, 600, 700, 900, 500, -455, -300, 500]
// filterNumber()

//sort
// const filterNumber = function(){
//     const saveFilter = movements.sort((a, b) => a-b )
//     console.log(saveFilter)
// }

// const movements = [200, 400, 600, 700, 900, 500, -455, -300, 500]
// filterNumber()

//reduce
// const reduceFun = function(){
//     const addAll = movements.reduce((curr, accum)=>{
//         return curr+ accum

//     }, 200) 
//     console.log(addAll)
// }
// const movements = [200, 400, 600, 700, 900, 500, -455, -300, 500]
// reduceFun()

// //find returns first number
// const movements = [200, 400, 600, 700, 900, 500, -455, -300, 500]

// const result = movements.find(mov=> mov>400)
// console.log(result)

//findIndex returns first index of numbers greater than 400
// const movements = [200, 400, 600, 700, 900, 500, -455, -300, 500]

// const result = movements.findIndex(mov=> mov > 400)
// console.log(result)

//some and every
// const movements = [200, 400, 600, 700, 900, 500, -455, -300, 500]
// const result = movements.some(mov => mov >0 )
// console.log(result)
// const movements = [200, 400, 600, 700, 900, 500, -455, -300, 500]
// const result = movements.every(mov => mov >0 )
// console.log(result)

//flatMap works on flat and map at the same time 

//flat only
// const movements = [[[200, 400, 600]], 700, 900, 500, -455, -300, 500]

// console.log(movements.flat(3))
//sort 
// const sorArray = function(){
//     const sortArray = movements.sort((a,b) => a - b)
//     console.log(sortArray)
// }
// const movements = [200, 400, 600, 700, 900, 500, -455, -300, 500]
// sorArray()

// const alphaUse = function(){
//     const alphaTrans = alphaBet.sort()
//     console.log(alphaTrans)
// }
// const alphaBet =['Amanda', 'Kanyana', 'ruth', 'jane']
// alphaUse()

// const longest = funtion(arr){
//     return arr.sort((a, b)=>{
//         return b.length - a.length
//     })
//     console.log(result)
// }

// function longestString(arr, n) {
//     const result = arr.sort((a,b)=> {
//         return b.length -a.length
//     })
// return result[0]

//    }
//    console.log(longestString(['Hello','World','Codewars','Katas']))

// function arrayDiff(a, b) {
//    return a.flat().filter((index, value)=>{
//     if(a.indexOf(value) !== index){
//         console.log(index)

//     }
//    })
//   }
//   const moveArray = arrayDiff([[1,2],[1]])
//   console.log(moveArray)

//It should remove all values from list a, which are present in list b keeping their order.
// function arrayDiff(a, b) {
//     const result = a.filter(item => {
//       return !b.includes(item)
//     })
//     return result
//    }
//   console.log(arrayDiff([1,2],[1]))
//   console.log(arrayDiff([1,2,2,2,3],[2]))

//
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function reverseLongWords(sentence) {
//     let words = sentence.split(' ');
//     let modifiedWords = words.map(word => (word.length >= 5) ? word.split('').reverse().join('') :word)
//     let modifiedSentence = modifiedWords.join(' ');
//     return modifiedSentence;
// }

// // Example usage:
// let inputString = "Hey fellow warriors";
// let result = reverseLongWords(inputString);
// console.log(result)

// const numbers = function(){
    
//     for(let i = 0; i<100; i++){
//         if(i%2 === 0){
//            console.log(i)
//         }else{
//             console.log('Not a even number')
//         }
//     }
    

// }
// numbers()

//Return numbers in form of string
// function descendingOrder(n){
//     //...
//     const result = n.sort((a, b)=> b-a)
//     return result.join('')
     
      
//     }
  
//   const num = [4,2,1,4,5]
//   console.log(descendingOrder(num))

//Return numbers
//   function descendingOrder(n) {
//     // Convert the number to a string, split into an array of digits, sort in descending order, and join back
//     var sortedDigits = n.toString().split('').sort(function(a, b) {
//         return b - a;
//     }).join('');
//     //return sortedDigits

//     const result = parseInt(sortedDigits)
//     return result

//     // Convert the result back to a number
//     // var result = parseInt(sortedDigits);

//     // return result;
// }

// // Example usage:
// var inputNum = 42145;
// var outputNum = descendingOrder(inputNum);
// console.log(outputNum);

// const stringUse = function(n){
//     const result = n.toString().split('').sort((a,b)=>{
//         return b-a
//     }).join('')

//     const result2 = parseInt(result)
//     return result2
// }
// const inputNum = 42145
// const inUs = stringUse(inputNum)
// console.log(inUs)

//Multiplier 2 numbers 
// function persistence(num) {
//     //code me
//    const result = num.reduce((acc, cur) =>{
//      return acc*cur
//  })
//  return result
   
//  }
//  const number = ['3','9']
//  console.log(persistence(number))
// function findUniq(arr) {
//     // do magic
//     const replaceSyntax = /1/gi
//     const result = arr.replace(replaceSyntax, '')
//   }
//   const numbers = [ 1, 1, 1, 2, 1, 1 ]
//   console.log(findUniq(numbers))

    // Q5. There is an array with some numbers. All numbers are equal except for one. Try to find it!

    // findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    // findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

//     Answer:
// function findUniq(arr) {
//     // do magic
//    const result = arr.sort((a, b)=>{
//      return b -a 
//    })
//    return result[0]
//   }
        
//   const numbers = [ 1, 1, 1, 2, 1, 1 ]
//   console.log(findUniq(numbers))

//replace vowels
// const nameRemove = function(nam){
// const replaceSent = /[iuoae]/gi
// const replace = nam.replace(replaceSent, '')
// return replace
// }
// console.log(nameRemove('Pacifique'))

// Q6 Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// Answer: 
// function solution(string) {
//     const resulSyntax = /([a-z])([A-Z])/g
//    const result = string.replace(resulSyntax, "$1 $2")
//     return result
//   }
//   console.log(solution("camelCasing"))

// Q7.Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// 

// Q8. In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// Answer: 
// function dnaStrand(dna){
//     let result = ""
//     for(let i =0; i<dna.length; i++){
//       if(dna[i] === 'A')
//         {
//           result = result + 'T'
//         }else if(dna[i] === 'T'){
//                   result = result + 'A'
//         }else if(dna[i] === 'G'){
//                   result = result + 'C'
//         }else if(dna[i] === 'C'){
//                   result = result + 'G'
//         }else if(dna[i] === 'G'){
//                   result = result + 'C'
//         }
//     }
//     return result
  
//   }
//   console.log(dnaStrand("ATTGC"))

// EXPANDED FORM 
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'


//replace used in string not in array
// function filter_list(l) {
//     // Return a new array with the strings filtered out
//     const result = l.filter(item => typeof (item) !== 'string')
//     return result
//   }
//   console.log(filter_list([1,2,'a','b']))

  //replace letter
//   function filter_list(l) {
//     // Return a new array with the numbers filtered out
//     const result = l.filter(item => typeof (item) !== 'number')
//     return result
//   }
//   console.log(filter_list([1,2,'a','b']))

// const typ = typeof(20)
// console.log(typ)
// const indexCheck = function(n){
// const ind = n.indexOf('world')
// return ind
// }

// const word = "Hello world and Rwanda"
// console.log(indexCheck(word))

