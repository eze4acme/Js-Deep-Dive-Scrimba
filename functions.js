function getscore(amount, time, dicimalPlaces = 1) {
    const topgame = (amount * 6)/time + 2;
    return topgame.toFixed(dicimalPlaces)
}

console.log(getscore(10, 5, 2));



const username = 'john';
function capitalizeName(name) {
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
  }

  console.log(capitalizeName(username));

  function greeting1() {
    // capitalizeName(name) 
  }
  greeting1()



let user12 = 'jaden'
let user122 = 'moses'

const capitalizeUser = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`
// console.log(capitalizeUser(user12));

function greetpeople(anyUser, callback) {
    return callback(capitalizeUser(anyUser))
}
let result = greetpeople(user12, (user12) => `Hey mate ${user12} you are good lol`);
console.log(result);


function increment(startNum, step){
    let count = startNum + step;
  return  function decrease() {
        return count -= step 
    }
   
}
let resultCount = increment(500, 15)
console.log(resultCount());
console.log(resultCount());
console.log(resultCount());
console.log(resultCount());

// Challenge: Rewrite your first function from a previous challnge to be an arrow function. 
// Stretch goal: Rewrite counting down closure in arrow function form. 


// Challenge start 
// function splitBill(amount, numPeople) {
//     return `Each person needs to pay ${amount / numPeople}`
// }
let splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`

console.log(splitBill(10, 2));
console.log(splitBill(10, 4));
console.log(splitBill(10, 5));


// Stretch goal start
let countdown = (startingNumber, step) =>{
  let countFromNum = startingNumber + step;
  return  () => {
    countFromNum -= step;
    return countFromNum;
  }
}

const countingDown = countdown(20, 2);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());


function getData(baseUrl, route) {
    fetch(`${baseUrl}${route}`)
      .then(response => response.json())
      .then(data => console.log(data));  
  }
  
  getData('https://jsonplaceholder.typicode.com', '/posts');
  getData('https://jsonplaceholder.typicode.com', '/comments');
  'https://api.chucknorris.io/jokes/random.com'

function getData(baseUrl){
    fetch(baseUrl)
    .then(response => 
      response.json())

    .then(data => 
       {let jokes = data.value
        console.log('Jokes:', jokes);
    })
}

getData('https://api.chucknorris.io/jokes/random')






function getData(baseUrl) {
    return function(route) { 
      return function(callback) {    
        fetch(`${baseUrl}${route}`)
          .then(response => response.json())
          .then(data => callback(data));  
      }     
    }  
  }
  
  const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');
  
  const getSocialMediaPosts = getSocialMediaData('/posts');
  const getSocialMediaComments = getSocialMediaData('/comments');
  
  getSocialMediaPosts(posts1 => {
  posts1.forEach(post=> {
    console.log(post.title);
  });
  });












