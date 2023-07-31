// const blue = '#f00'
// const orange = '#f60'

// const colors = {
//     blue,
//     orange,
//     yellow: 'ffd'
// }

// console.log(colors.blue);

// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

const bar = 'medina'
const cafe = 'emekaCpt'
const restaurant = 'yauri kitchen'

const favouritePlaces = {
    bar,
    cafe,
    restaurant,
    greeting(){console.log('Hi favourite places of kebbi state yauri');}
}

favouritePlaces.greeting()
console.log(favouritePlaces.bar);

const color = 'green';
const hexCode = '#fdeeab';

const colors = {
  blue: "#f00",
  orange: "#f60xx",
  [color]:  hexCode
};
 

console.log(colors);

function getColor(colr, key) {
    return colr[key]
}
console.log(getColor(colors, [color]));

console.log(colors[color]);

function displayUser (){
    console.log(colors[color]);
}
displayUser()

const user = {
    name: "Reed",
    username: "Reedbarger",
    email: "reed@gmail.com",
    details: {
      title: "Programmer"  
    }  
  };

function displayUserBio(userData) {
    const { name, details: { title}, email } = userData
    console.log(`${name} is a ${title} with ${email} email`); 
  }
  
  displayUserBio(user);



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

const {coffee, beer} = recommendations
console.log(`${coffee} and ${beer}`);

const {music:{traditional, jazz}} = recommendations
console.log(`${traditional} and ${jazz}`);

function getMusicVenue (venues){
    const {music:{traditional, jazz}} = venues
    console.log(`i love these venues:${traditional} and ${jazz}`);

}
getMusicVenue (recommendations)

const userTemplate = {
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
  const newUser2 = {
    username: "JohnBarger",
    email: "JohnBarger@gmail.com",
    password: "minepassword"  
  };

//  const finalObj = Object.assign({}, userTemplate, newUser, newUser2, {verified: false});
    const finalObj = {...userTemplate, ...newUser, ...newUser2, verified: false};
 console.log(finalObj);
 console.log(userTemplate);


 const map1 = new Map([
    ['username', 'ReedBarger'],
    [true, false],
    [1, 1]
 ])

 map1.set('password', 'mypassword');
 
 console.log(map1);
 const newObj = [...map1.values()];
 console.log(newObj);


map1.forEach((value, key) => {
    console.log(value);
})

const user1 = { name: "john" }
const user2 = { name: "mary" }

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";

const map2 = new Map([
    [user1, secretKey1],
    [user2, secretKey1]
])

console.log([...map2.values()]);
console.log(map2);
const key = map2.get(user2)
console.log(map2.size);
console.log(key);

// Challenge: 
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

const favouritePlace = {
    music: "jazz",
    name: "Paris House"
};

const favourplace = new Map([
    ['music', 'jazz'],
    ['name', 'paris house']
])

favourplace.set('verified', true )
favourplace.set('averageBill', 10)
console.log(favourplace);
console.log(favourplace.get('name'));
console.log([...favourplace.keys()]);



const userData = { 
    username: "Reed",
    title: "JavaScript Programmer",
    getBio() {
      console.log(`User ${this.username} is a ${this.title}`);
    },
    askToFriend() {
      setTimeout(() => {
        console.log(`Would you like to friend ${this.username}?`);   
      }, 2000);  
    } 
  }
  
  userData.getBio();
  userData.askToFriend();