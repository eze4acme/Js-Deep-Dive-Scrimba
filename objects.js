// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

const bar = 'Madam happy'
const cafe = 'cafe'
const resturant =  'yauri kitchen'

const favourtePlaces = {
    bar:bar,
    cafe,
    resturant,
    greeting () {
        console.log('Hello i am object');
    }
}

favourtePlaces.greeting()
console.log(favourtePlaces.cafe);
console.log(favourtePlaces.bar);



// const colors = {
//     blue: "#f00",
//     orange: "#f60"
//   };
  
//   function getColor(blue, orange) {
//     console.log(colors.blue);
//   }
//   getColor()

// const color = 'green';
// const hexCode = '#ff0';


// const colors ={
   
// };
colors.red = '#f22'

colors[color] = hexCode; //more like we have push it into the an empty object dynamically
console.log(colors);



const colre = 'green'
const hexCode = 'fff'

const colors = {
    blue:'#fgr',
    [colre]: hexCode
}
delete colors.blue
// colors[colre] = hexCode
console.log(colors);
console.log(colors[colre]);

// function getColor(key) {
//     return colors[key]
// }
// let result1 = getColor('blue')
// console.log(result1);


const user5 = {
    name: "Reed",
    username: "Reedbarger",
    email: "reed@gmail.com",
    details: {
      title: "Programmer"  
    }  
  };

const {name, email, details:{title}} = user5;



// Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).

// 1. Destructure the places to drink (coffee and beer) from recommendations
// 2. Destructure the places to listen to music
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked 
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: { 
        traditional: 'Fiddler\'s Elbow', 
        jazz: 'The Paris House'
    }
}

//1.
const {coffee, bear} = recommendations
//2.
const {music: {traditional, jazz}} = recommendations
//3.
function getMusicPlaces( {music: {traditional, jazz}}) {
    console.log(traditional, jazz);
}
getMusicPlaces(recommendations)



const user1 = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: ""  
  };
  
  const newUser = {
    username: "ReedBarger",
    email: "reed@gmail.com",
    password: "mypassword"  
  };

  const verified = {
    verified : false
  }

console.log(Object.keys(verified));
//  let mutatedNot = Object.assign({}, user1, newUser, verified);
//  console.log(mutatedNot);
//  console.log(user1);


//  console.log(Object.assign(newUser, verified));

const creatNewObj = {...user1, ...newUser, verified : false}
console.log(creatNewObj);

const getMaxNum = [1, 4, 8, 3, 9, 0, 5]

console.log(Math.max(...getMaxNum));


function addNumber(a, b, ...args) {
    console.log(args);
    let sum = 0
  
    for (let arg of args){
        sum = sum + arg;
        mut = a * b
    }
    return [sum, mut]
}
console.log(addNumber(3, 5, 8, 6, 4));



//Map is helps to preseved keys of objects if they are not strings as it will be implicit 
// done by js


const map1 = new Map([
    [1, 1],
    [true, true]
])

console.log(map1);

map1.set('name2', 'moses')
console.log(map1);
map1.forEach((value) => {
    console.log(value);
});


console.log(...map1.values());

const arry = [5, 7, 8, 9, 5, 3]

console.log(...arry);


const user2 = { name: "john" }
const user3 = { name: "mary" }

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";

const secretKeyMap = new Map([
  [user2, secretKey1],
  [user3, secretKey2]  
]);

console.log(secretKeyMap)



const user4 = { name: "john" }
const user6 = { name: "mary" }

const secretKey3 = "asldjfalskdjf";
const secretKey4 = "alksdjfakjsdf";


const userSecretKey = new Map([
    [user4, secretKey3],
    [user6, secretKey4]
])
const key = userSecretKey.get(user4)

console.log(key);

const users = {
    name: "john",
    verified: true  
  };

const use = new Map([
    ['name', 'John'],
    ['verified', true]
])

console.log(...use.values());
const catc = use.forEach((key, value) => {
    console.log(key, value);
});




// Challenge: 
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

// const favouritePlace = {
//     music: "jazz",
//     name: "Paris House"
// };

const favouritePlace = new Map([
    ['music', 'jazz'],
    ['name', 'paris house']
])
favouritePlace.set('visited', 'true')
favouritePlace.set('averageBill', '50')
favouritePlace.set('hello', 'world')
console.log(favouritePlace );

const favorite = console.log(...favouritePlace.keys())
const favorite2 = console.log(...favouritePlace.values())
const favorite3 = console.log(favouritePlace.get('name'))
const favorite4 = console.log(...favouritePlace.get('hello'))


const check = new Map()
console.log(check);


function getdata(baseUrl, route) {
    fetch(`${baseUrl},${route}`)
     .then(response => response.json())
     .then(data => {
        let newdata = data.value;
        console.log('Jokes:', newdata);
     })
}




const UserData = {
    username: 'Reeds',
    penchant: 'football',
    getBio() {
        `The truth about ${this.username} is that he loves ${this.football}`
    },
    askMe () {
        setTimeout(() => {
            console.log(`Ask me ${this.username} anything`);
        }, 3000);
    }
}

UserData.askMe()


const todos = [];

const todo1 = {
  name:'',
  text: 'Wash the dishes',
  complete: false  
};

const todo2 = {
  text: 'Do ',
  complete: false  
};

const todo3 = {
  text: 'Do laundry',
  complete: false  
};
todos.push(todo1, todo2, todo3)
const index = [todos.length - 3]
console.log(todos[index]);
todos.pop()

// todos[1] = todo1;
// todos[3] = todo3;
// todos[2] = todo2;
console.log(todos)

// const creatNewObj1 = {...todo1, ...todo2}
// console.log(creatNewObj1);