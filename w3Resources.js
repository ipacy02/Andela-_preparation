// const is_string = function(str){
// const result = typeof(str) === 'string'
// return result

// }
// console.log(is_string('w3resource'))
// console.log(is_string([1, 2, 4, 0]));

//Q2.
// const is_Blank = function(n){
//     if(n.length === 0){
//         return true
//     }
      
//     else { 
//         return false
//     }
        
// }
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));

//Q3.
// const string_to_array = function(arrayUse){
//     const result = arrayUse.slice(0, 6) + arrayUse.slice(6, 11)
//     return result.split(' ').join(',')
// }
// console.log(string_to_array("Robin Singh"));


//Q4
// const truncate_string = function(num){
//     return num.slice(0, 4)
// }
// console.log(truncate_string("Robin Singh",4));

//Q5
// const abbrev_name = function(abbrev){
//     const nameAbbr = abbrev.slice(0, 6) + "Si." 
//     return nameAbbr
// }
// console.log(abbrev_name("Robin Singh"));

//Q6

// const protect_email = function(num){
//     const result = num.slice(0, 5)  + num.slice(7, 10).replace(/./g, ".") + num.slice(11, num[-1])
//     return result
// }
// console.log(protect_email("robin_singh@example.com"));

//Q7.

//To split words you put space ' ' to split words no space ''
// const string_parameterize = function(para){
//     const para1 = para.toLowerCase().split(' ').join('-')
//     return para1
// }

// console.log(string_parameterize("Robin Singh from USA."));

//Q8.
// const capitalize = function(capital){
//     const result = capital.charAt(0).toUpperCase() + capital.slice(1)
//     return result
// }
// console.log(capitalize('js string exercises'))

// capitalize = function(str1){
//     return str1.charAt(0).toUpperCase() + str1.slice(1);
  
//   }
      
//    console.log(capitalize('js string exercises'));


//Q9//capitaize all the first letters
// const capitalize = function(cap){
//     const result = cap.split(' ').map(el=> (el[0]).toUpperCase() + el.slice(1))  
//     return result
// }

//    console.log(capitalize('js string exercises'));

//Q10
//for we add empty array to receive new changes
// const swapcase = function(caseLetter){
//     let saveNewChar = ""
//     for(let i =0; i<caseLetter.length; i++){
//         if(caseLetter[i] === caseLetter[i].toUpperCase()){
//             saveNewChar = saveNewChar + caseLetter[i].toLowerCase()

//         }else if(caseLetter[i] === caseLetter[i].toLowerCase()){
//             saveNewChar = saveNewChar + caseLetter[i].toUpperCase()
//         }
//         //console.log(swapcase('AaBbc'));
        
        
//     }
//     return saveNewChar
       
//     }
//     console.log(swapcase('AaBbc'));

//Q11 To study on camel case more
// const camelize = function(caseCa){
//     const result = caseCa.split(' ').map(mov => (mov[0]).toUpperCase() + mov.slice(1)).join('')
//     return result
// }
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));

//Q12 To study on
//Q13 To study on
//Q14 To study on

//Q15. To study on
//Q16 To study on
//Q17 
// const string_chop = function(char, lengthOfReturn = 1){
//     const emptyArr = []
//     for(i = 0; i<char.length; i = i + lengthOfReturn)
//     {
//         emptyArr.push(char.slice(i, i + lengthOfReturn))
//     }
//     return emptyArr


// }
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));

//function

//manirampa => manIRAmpa
// const myName = function(name){
//     let saveName = ""
//     for(let i=0; i<name.length; i++){
//         if(name[i] === 'm'){
//             saveName = saveName + 'm'
//         }

//           else if(name[i] === 'n'){
//             saveName = saveName + 'n'

//         }  else if(name[i] === 'i'){
//             saveName = saveName + 'I'

//         }  else if(name[i] === 'r'){
//             saveName = saveName + 'R'

//         }  else if(name[i] === 'a'){
//             saveName = saveName + 'A'

//         }  else if(name[i] === 'p'){
//             saveName = saveName + 'p'

//         }
//     }
//     return saveName
// }
// console.log(myName('manirampa'))

//hELLo => HellO
// const helloDo = function(name){
//     let saveNew = ""
// for(i=0; i<name.length; i++){
// if(name[i] === 'h'){
//     saveNew = saveNew + 'H'
// }else if(name[i] === 'E'){
//     saveNew = saveNew + 'e'

// }else if(name[i] === 'L'){
//     saveNew = saveNew + 'l'

// }else if(name[i] === 'o'){
//     saveNew = saveNew + 'O'
// }
// }
// return saveNew
// }
// console.log(helloDo('hELLo'))

// const helloDo = function(name){
//         let saveNew = ""
//     for(i=0; i<name.length; i++){
//         if(name[i] === name[i].toLowerCase()){
//             saveNew = saveNew + name[i].toUpperCase()
//         }else if(name[i] === name[i].toUpperCase()){
//             saveNew = saveNew +name[i].toLowerCase()

//         }
//     }
//     return saveNew
// }
// console.log(helloDo('maNIRamPa'))
//Q18 to study on
//Q19 to study on
//Q20 to study on
//Q21
//map used in array when we want to use in string which has more words we put split(' ')
//and we can not multiplier a string by a number 
// const repeat_string = function(num1){
//     const result = num1.map(lett => lett*4)
//     return result
// }
// console.log(repeat_string([1, 2]));

// const repeat_string = function(stringToUse, repeatNum){
// const result = stringToUse.repeat(repeatNum)
// return result
// }

// console.log(repeat_string('a', 4))
// console.log(repeat_string('a'));

// const subStrAfterChars = function(substring2){
// //const result = substring.slice(0, 10)
// const result2 = substring2.slice(24, substring2[-1])
// return result2


// }
// console.log(subStrAfterChars('w3resource: JavaScript Exercises'));
//console.log(subStrAfterChars('w3resource: JavaScript Exercises'));

//Q23.//trim to remove trailing spaces
// const strip = function(spaces){
//     const result = spaces.trim()
//     return result
// }
// console.log(strip('   w3resource   '));
//Q24
// const truncate = function(word){
//    const numberToTrunc = /The quick brown fox/gi
// const result = word.match(numberToTrunc)
// return result
// }
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
//other way
// const truncate = function(word, numberTorepeat){
// const result = word.split(' ').slice(0, numberTorepeat).join(' ')
// return result
// }

// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
//Q25

// const truncate = function(words){
//     const result = words.replace(/the/, '')
//     return result
// }
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

//Q29 to study on
//Q30

//TO check work if it is the last word
//words.length is the whole word in the array
// const stringEndsWith = function(word) {
//     const words = word.split(' '); // Split the input string into an array of words
    

//     if(words.length > 0  && words[words.length-1].toUpperCase() === 'PYTHON'){
//         return true

//     }
//     //console.log(stringEndsWith('JS PHP PYTHON'));
//     console.log(string_endsWith('JS PHP PACY',''));



//TO CHECK WORD IN THE ARRAY IF IT IS THERE AND TO PRINT A SINGLE WORD WE USE "SPLIT ALONE"
// const stringEndsWith = function(arrayPrin) {
//     // Convert the input string into an array of characters
//     const charArray = arrayPrin.split(' ')
//     return charArray[charArray.length - 2]

//     // Get the index specified by the first character and return the character at that index
// }

// console.log(stringEndsWith('JS PHP PACY'));

// const stringEndsWith = function(arrayPrin) {
//     // Convert the input string into an array of characters
//     const charArray = arrayPrin.split('').slice(3, 6).join('')
//     return charArray
   

//     // Get the index specified by the first character and return the character at that index
//    // return charArray[charArray[0]];
// }

// console.log(stringEndsWith('JS PHP PACY'));

//Use match to print one element in the string
// const stringEndsWith = function(name){
//     const regex = /PHP/gi
// const result = name.match(regex)
//     return result
// }

// // console.log(stringEndsWith('JS PHP PACY'));

// console.log(stringEndsWith('JS PHP PACY'));

    
    // Check if the last word in the array is 'PYTHON'
    // if (words.length > 0 && words[words.length - 1].toUpperCase() === 'PYTHON') {
    //     return true;
    // } else {
    //     return false;
    // }
// }

// console.log(stringEndsWith('JS PHP PYTHON'));

//Q31 to study on
//Q32
// 32 is a special case which is space which stands ' ' non printable character
//126 printable characters ~ which is that sign if it is represented in ASCII CODE 

//char code is in 32 and 126
// const remove_non_ascii = function(codeAscii){
//     const result = codeAscii.split('').filter(charac => charac.charCodeAt(0) >=32 && charac.charCodeAt(0) <= 126).join('')
//     return result

// }
// console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLäÄçÇéÉê'));






// function removeNonAscii(inputString) {
//     // Split the string into an array of characters, filter out non-printable ASCII characters, and join them back into a string
//     var cleanedString = inputString.split('').filter(char => char.charCodeAt(0) >= 32 && char.charCodeAt(0) <= 126).join('');
  
//     return cleanedString;
//   }
  
//   // Test the function
//   var inputString = '???????PHP-MySQL??????';
//   console.log(removeNonAscii(inputString))

// function removeNonAscii(inputString) {
//     // Split the string into an array of characters, filter out non-printable ASCII characters, and join them back into a string
//     const cleanedString = inputString.split('').filter(char => char.charCodeAt(0) >= 32 && char.charCodeAt(0) <= 126).join('');
  
//     return cleanedString;
//   }
  
//   // Test the function
//   const inputString = '???????PHP-MySQL??????';
//   console.log(removeNonAscii(inputString)); // Output: "PHP-MySQL"

//   function removeNonAscii(inputString) {
//     // Use a regular expression to replace non-printable ASCII characters
//     var cleanedString = inputString.replace(/[^\x20-\x7E]/g, '');
  
//     return cleanedString;
//   }
  
//   // Test the function
//   var inputString = '???????PHP-MySQL??????';
//   console.log(removeNonAscii(inputString)); // Output: "PHP-MySQL"

// function remove_non_ascii(str) {
  

//      str = str.toString().replace(/[^\x20-\x7E]/g, '');
//      return str
//   }
  
//   console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
  
//remove space
// var myString = "This is a sample string with spaces.";
// var stringWithoutSpaces = myString.replace(/\s/g, "");

// console.log(stringWithoutSpaces);

// var myString = "Hello,123 world_456!";
// var wordCharactersOnly = myString.match(/\w/g, " ").join('')

// console.log(wordCharactersOnly);
// ^\w match any word which doesn't match the condition

// const remove_non_word = function(word){
//     const result = word.replace(/[^\w\s]/g, "")
//     const result2 = result.replace(/s+/g, "").trim()
//     return result2.split(' ').join('-')

// }
// console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

//world cup reverse word
// const world = function(num){
//     const result = num.replace(/(\w+)\s(\w+)/g, "$2 $1")
//     return result

// }
// console.log(world('World Cup'))

//Split can't be used to change whole string or array one word  to change the whole thing we use map but split comes before
//On one word we use direct to LowerCase
//Q34 to study on
// const sentenceCase = function(numbe){
//     const result = numbe.toLowerCase()
//     return result
// }
// console.log(sentenceCase('PHP'));
// const sentenceCase2 = function(num){
// const result = num.toLowerCase().split(' ').map(el=>el[0].toUpperCase() + el.slice(1)).join(' ')
// return result
// }
// console.log(sentenceCase2('PHP exercises. python exercises.'));
//case insensitive 

// const caseInse = function(str_tot, str){
//     const result = str_tot.search(new RegExp(str, 'i'))
    

//     if(result > 0){
//         return 'matched'
//     }else {
//         return 'matched'
//     }

// }
//uncapitalized
// Q40
// const unCapitalize_Words = function(n){
// const result = n.toLowerCase()
// return result
// }

// console.log(unCapitalize_Words('Js String Exercises'));
//capitalize first letters 
// const capital = function(n){
//     const result = n.split(' ').map((char)=> char[0].toUpperCase() + char.slice([1])).join(' ')
//     return result

// }
// console.log(capital('js string exercises'))
// Q43
// const testUpper = function(string, index){
// const result = string.charAt(index).toUpperCase() === string.charAt(index)
// return result
// }
// console.log(testUpper('Js STRING eXERCISES', 10));

// Q44
// const lower = function(string, index){
// const result = string.charAt(index).toLowerCase() === string.charAt(index)
// return result
// }
// console.log(lower('Js STRING eXERCISES', 10))

//Q46 first letter of index
// const speciString = function(spec, index){
//     const specStr = spec.indexOf(index) === 0
//     return specStr
// }
// console.log(speciString('js string exercises', 'js'));

//Q46 last letter of index
// const specLast = function(word, index){
//     const last = word.lastIndexOf(index) === word.length - index.length
//     return last
// }
// console.log(specLast('js string practice exercises', 'exercises'));

//if include
// const specLast = function(string, index){
//     const checkIncl = string.includes(index)
//     return checkIncl

// }
// const specLast = function(nam, index){
// const nameUse = nam.indexOf(index) == 0
// return nameUse
// }

// console.log(specLast('js string exercises', 'js'));
// const strip_html_tags = function(removeTag){
// const tageRem = removeTag.replace(/<[^>]*>/g, '').split(' ').join('-')

// return tageRem
// }

// console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));

//expanded form 
// const expandedArray = function(exp){
//     //change to string to easily manipulate it
//     const strExp = exp.toString()

//     //create a memory to store expanded number
//     let storeExp = []

//     //fing expended number
//     for(let i =0; i<strExp.length; i++){
//         if(strExp[i] !== '0'){

//         const valueOfExp =parseInt(strExp[i]) * Math.pow(10, strExp.length -1 -i)
//         storeExp.push(valueOfExp)

//     }

//     }
//    const expandedForm = storeExp.join(' + ')
//    return expandedForm
    
// }
// const numberToExpand = 3482
// console.log(expandedArray(numberToExpand))

//2D
// const makeMatrix = function(array, numRow, numCols){
//     let matrix = []

//     for(let i=0; i<numRow; i++){
//         matrix[i]=[]
//         for(let j=0; j<numCols; j++){
//             matrix[i][j] = array[i *numCols +j]
//         }
//     }
//     return matrix


// }
// const numRow = 3
// const numCols = 4
// const array = [3, 4, 8, 9, 2, 6, 5, 2, 7, 12, 56, 7]
// console.log(makeMatrix(array, numCols, numRow))









    






