// let sentence = "The dog chased the cat"
// let petRegex = /dog/
// //let result = sentence.replace(petRegex, "CAT")


// //i make the case insensitive, g to write when word is duplicated
// let result2 = sentence.match(petRegex)
// console.log(result2)

//to accept all the words with hu in it at the start

// let hum = "I'll hum a song"
// let hug = "Bear hug"
// let huRegex = /hu./;

// console.log(hum.match(huRegex))
// console.log(hug.match(huRegex))

// //at back
// let hum2 = "I'll fun a song"
// let hug2 = "Bear gun "
// let huRegex2 = /.un/;

//print only vowels match give me that g to match all 

// const wordToprint = 'to accept all the words with hu in it at the start'
// //const wordTo = /[iuoae]/ig
// const wordTo = /[a-z]/ig

// const result = wordToprint.match(wordTo)
// //const result = wordToprint.replace(wordTo, '')

// console.log(result)

//Not going to match 0-9 aeuio
// let quoteSample = "3 blind mice"
// let myRegex = /[^0-9aeuio]/ig
// let result = quoteSample.match(myRegex)
// console.log(result)

//match doubled letters
// let matchLet = "Missisissipi"
// let mat = /s+/ig
// let result = matchLet.match(mat)
// console.log(result)

// let word2 = 'goooooal'
// let goRegex = /go*/
// console.log(word2.match(goRegex))

//.any letter, * 0 or more currencies
//grid match
// let letter = "<h1> winter is coming </h1>"
// let compare = /<.*>/
// let result = letter.match(compare)
// console.log(result)
//lazy match
// let letter = "<h1> winter is coming </h1>"
// let compare = /<.*?>/
// let result = letter.match(compare)
// console.log(result)

//Match at the beginning
// let charLet = "Cal and Ricky both like racing"
// let matchTe = /^Cal/ig
// let result = charLet.match(matchTe)
// console.log(result)

// Match ending $
// let charLet = "Cal and Ricky both like racing"
// let matchTe = /racing$/ig
// let result = charLet.match(matchTe)
// console.log(result)

//Match letters and characters excluding spaces
// let quote = "The five boxing wizards jump quickly."
// let alpha = /\w/g
// let result = quote.match(alpha)
// console.log(result)
//Match characters and spaces excluding letters and characters
// let quote = "The five boxing wizards jump quickly."
// let alpha = /\W/g
// let result = quote.match(alpha)
// console.log(result)

//Match all numbers
// const num = "your sandwitch will be $500"
// const numCheck = /\d/g
// const result = num.match(numCheck)
// console.log(result)

//Match non numbers
// const num = "your sandwitch will be $500"
// const numCheck = /\D/g
// const result = num.match(numCheck)
// console.log(result)
//{2,} start at least 2 numbers and infinite
//{2} we need only two
//Match space
// const num = "your sandwitch will be $500"
// const matchSp = /\s/g
// const result = num.match(matchSp)
// console.log(result)
//Match none white space
// const num = "your sandwitch will be $500"
// const matchSp = /\S/g
// const result = num.match(matchSp)
// console.log(result)

//const num = /favou?rite/ it may have a u or not

//let pwRegex =/change/ //changethis line

// const repeatStr = "regex regex"
// const checkRex =/(\w+)\s\1/g
// const result = repeatStr.match(checkRex)
// console.log(result)

// const codeCamp = "Code camp".replace(/(\w+)\s(\w+)/, '$2 $1')

// const codeCamp = "Code Camp"
// const syntax2 = /(\w+)\s(\w+)/
// const result = codeCamp.replace(syntax2, '$2 $1')
// console.log(result)

// console.log(codeCamp)

// const wordToChange ="      Hello World     "
// const syntax = /^\s+|\s+$/g
// const result = wordToChange.replace(syntax, '')
// console.log(result)

// function findDigit(n){
//     for(let i=0 ; i<n.length; i++)
//       {
//            console.log(n[i])
//    }
//         }
   
//      let arrayOfN = [2,7,2,6,1,9,3,2,5,5,9,7,5,9,3,2,3,1,5,3,6,3,0,5,8,8,7,3,8,8]
//      findDigit(arrayOfN)

// function simpleArraySum(ar) {
//      // Write your code here
//      const addTre = ar.reduce((cur, acc)=>{
//     return acc + cur
//      })
//      console.log(addTre)
 
//  }
//  const result = [1,2,3]
//  simpleArraySum(result)

 //reduce
// const reduceFun = function(){
//     const addAll = movements.reduce((curr, accum)=>{
//         return curr+ accum

//     }, 200) 
//     console.log(addAll)
// }
// const movements = [200, 400, 600, 700, 900, 500, -455, -300, 500]
// reduceFun()

// function simpleArraySum(ar) {
//      // Write your code here
//      const addTre =ar.reduce((cur, acc)=>{
//          return cur + acc
//      })
//      console.log(addTre)
 
//  }
//  const result = [1, 2, 3, 4, 10, 11]
//  simpleArraySum(result)
const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

for(i = 0; i<synonyms.length; i++){
    greetings.push(`have a ${synonyms[i]} day`)
}
console.log(greetings)

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];
const bios = [];

for(let i =0; i<firstNames.length & i<lastNames.length & i<places.length; i++){
  bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`)
}
console.log(bios)