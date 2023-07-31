const todos = {};

const todo1 = {
  text: 'Wash the dishes',
  complete: false  
};

const todo2 = {
  text: 'Do laundry',
  complete: false  
};

todos[1] = todo1;
todos[2] = todo2;
delete todo1.text

console.log(todo1);
console.log(todos);


// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

const favouriteSongs = [];
favouriteSongs.push('love', 'love you', 'love you more');
const lastSong = favouriteSongs.pop();
console.log(lastSong);
console.log(favouriteSongs.length);

// const temperatures = [69, 82, 73, 64];

// console.log(temperatures.indexOf (82) > -1);
// console.log(temperatures.includes(50));

const temperaturez = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: false }, 
    { degrees: 73, isRecordTemp: true }, 
    { degrees: 64, isRecordTemp: false }
];
const result = temperaturez.some((temperature) => temperature.isRecordTemp 
)
console.log(result);


// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: false},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: true},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: false}
]

// const checkSong = songs.some(song => song.wonGrammy);
// console.log(checkSong);
// const checkSong2 = songs.every(song => song.timesStreamed > 1.5);
// console.log(checkSong2);
const hasWonGrammy = songs.some(song => song.wonGrammy);
console.log(hasWonGrammy);

const allMegaHits = songs.some(song => song.timesStreamed > 1.5);
console.log(allMegaHits);

const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: false }, 
    { degrees: 73, isRecordTemp: true }, 
    { degrees: 64, isRecordTemp: false }
];

// const TempResult = temperatures.map(temperature => {
//     temperature.isRecordTemp = true
//     return temperature
// });
// console.log(TempResult);
// const tempPptAdd = temperatures.map(temperature => {
//     temperature.isHigh = true
//     return temperature
// });

// console.log(tempPptAdd);
const updateTemp = temperatures.map(temperature => 
    {return temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature}
   
);
console.log(updateTemp);
// updateTemp.forEach(temperature => {
//   if (temperature.isHigh) {
//     console.log(`Temperature ${temperature.degrees} was a record high last week!`);  
//   }
// })


updateTemp.forEach(temperature => {
  if (temperature.isHigh) {
    console.log(`The Temperature were at record high of ${temperature.degrees}`);
  }
})

// const newTemps = temperatures.map(temperature => 
//     temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
//     );
//     console.log(newTemps);
// const updateSomeTemp = temperatures.map(temperature => {
//   temperature.degrees > 70 ? temperature.isRecordTemp = false : temperature
//     return temperature
// });

// console.log(updateSomeTemp);


const restaurantz = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
]

const getResult = restaurantz.filter(restaurant => restaurant.name.startsWith('C'))
console.log(getResult);

const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
]

const results = restaurants.filter(restaurant => restaurant.name.startsWith('C') && restaurant.milesAway > 2)
console.log(results);
const results2 = restaurants.find(restaurant => restaurant.name.toLowerCase().includes('north'))
console.log(results2 );
const getRe = restaurants.filter(restaurant => {restaurant.isHigh = 'it is me filter';
  return restaurant})
console.log(getRe);

// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];

const getTotal = cars.reduce((acc, car) => !car.isElectric ? acc = acc + car.weight : acc , 0)
console.log(getTotal);
const numbers = [1, 2, 3, 4, 5, 6];
const result3 = numbers.reduce((acc, num) => acc.concat(num * 2) ,[]);
console.log(result3);

const num = numbers.reduce((acc, num) => {
  if(num > 2){
    acc.push(num)
  }
  return  acc
}, [])
 console.log(num);
 
 const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon"
];
// const [first, second, third] = finalMenuItems;
// console.log({ first }, { third });
// const [second, first] = finalMenuItems;
// console.log(second, first);

const [first, [second, third]] = finalMenuItems;

console.log(first, [second]);


// Challenge: 
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Modify these four variables first
let [chefsFishDishes, ...regularFishDishes ] = fishDishes;


let [regularMeatDishes, ...chefsMeatDishes] = meatDishes;

console.log(regularMeatDishes);

// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [chefsFishDishes, ...chefsMeatDishes];
console.log(chefsDishes);
let regularDishes = [...regularFishDishes, regularMeatDishes]
console.log(regularDishes);


const user = {
  name: 'John',
  age: 29  
};
console.log(Object.keys(user));
const getvalues = Object.keys(user).map(prop => user[prop]);
console.log(getvalues);
console.log(Object.values(user));

const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
  phone: 95  
};

const getValues2 = Object.values(monthlyExpenses)
.reduce((acc, num) => acc = acc + num, 0);

console.log(getValues2);

const users = {
  '2345234': {
    name: "John",
    age: 29
  },
  '8798129': {
    name: "Jane",
    age: 42
  },
  '1092384': {
    name: "Fred",
    age: 17 
  }
};

const getFilter = Object.entries(users).reduce((acc, [id, user]) => {

  if(user.age > 20){
    acc.push({...user, id})
  }
  return acc
}, [])
console.log(getFilter);


const customerDishes = [
  "Chicken Wings",
  "Fish Sandwich",
  "Beef Stroganoff",
  "Grilled Cheese",
  "Blue Cheese Salad",
  "Chicken Wings",
  "Reuben Sandwich",
  "Grilled Cheese",
  "Fish Sandwich",
  "Chicken Pot Pie",
  "Fish Sandwich",
  "Beef Stroganoff"
];

// const resultGet = [...new Set(customerDishes)]
// console.log(resultGet);

console.log(customerDishes);
console.log([...new Set(customerDishes)]);
let me = [ 'boys', 'girls']
let he = ['girls', 'man']
let she = ['boys', 'girls', 'woman', 'Girls']
console.log(new Set([...me, ...he, ...she]));


