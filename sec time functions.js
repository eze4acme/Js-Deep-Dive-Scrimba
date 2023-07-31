const user1 = "Reed";
const user2 = "Doug";

const message = `User (user) says: (text)`; 


function sendUserMessage (user, text) {
    return `User ${user} says: ${text}`
}

const resultOfMsg = sendUserMessage(user2, 'hello dear');
console.log(resultOfMsg);

// Challenge: Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number. 

// Write your code below:
let result;
function splitBill(amount, person) {
   return amount / person
}

// splitBill(300, 8)
// console.log(result);

// Testing your solution
console.log(splitBill(10, 2))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))
let love = splitBill(390, 5)
console.log(love);

// functions as closures 

// let likesCount = 0;

function handleLikesCount () {
 let likesCount = 0;
  return function () {
   return likesCount += 1
    
 }
}

let likes = handleLikesCount();
console.log(likes());
console.log(likes());
console.log(likes());
console.log(likes());



let user3 = 'Mark'
// let messages;
let messages = `Hello people of ${user3}`
console.log(messages);
function sayHello(user) {
 messages = `To ${user} i am saying Hello to you`
}
sayHello(user3)
 console.log(messages);

 // Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown(step) {
    let countDown = 20;
   return function () {
        countDown -= step;
        return countDown;
    }
  }
  
  const countingDown = countdown(2);
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());


  function convertTempt (celsius, decimalPlaces = 2 ) {
    const faherent = celsius * 1.8 + 32;
     return Number(faherent.toFixed(decimalPlaces))
     
  }

  let faharent = convertTempt(21);

  console.log(faharent);    


username = 'moses'

let capitalizeName = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`



function greetUser (user) {
  return `Hello ${user} i am still learning to code in my on way`
}

console.log(greetUser (capitalizeName(username)));


function testNew(user, callBack) {
  return   callBack(capitalizeName(user))
}

let resultOfTest = testNew(username, user => `${user} hello guys`)

console.log(resultOfTest);
 

// Challenge: Rewrite your first function from a previous challnge to be an arrow function. 
// Stretch goal: Rewrite counting down closure in arrow function form. 


// Challenge start 
let splitBill2 = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`


console.log(splitBill2(10, 2));
console.log(splitBill2(10, 4));
console.log(splitBill2(10, 5));


// Stretch goal start
let countdown1 = (startingNumber, step) => {
let countFromNum = startingNumber + step;
return () => countFromNum -= step
}

const countingDown2 = countdown1(20, 2);

console.log(countingDown2());
console.log(countingDown2());
console.log(countingDown2());
console.log(countingDown2());


function getData (baseUrl){
  return function (route) {
    fetch(`${baseUrl}${route}`)
    .then(Response => Response.json())
    .then(data => console.log(data))
  }
}
const socialMediaData = getData('https://jsonplaceholder.typicode.com')
socialMediaData('/posts')
socialMediaData('/comments')


    
