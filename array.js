// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

// Solution to challenge
const favouriteSongs = [];
favouriteSongs.push('all eyez on me', 'kuku the traveller', 'love you more')
console.log(favouriteSongs);
console.log(favouriteSongs.pop());
console.log(favouriteSongs);

const favour = [ favouriteSongs.length - 1]
console.log(favouriteSongs[favour]);

//figure out if a number exist in the array with bolean data
const temperatures = [69, 82, 73, 64]; //0, 1, 2, 3
console.log(temperatures.includes(82));

const temperatures1 = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: false }, 
    { degrees: 73, isRecordTemp: true }, 
    { degrees: 64, isRecordTemp: false }
];
const result = temperatures1.some( tempt => 
    tempt.degrees === 64
);
console.log(result);

const newRed = () => {
    return `hello world`
}
console.log(newRed());

// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

const songs = [
    {song: "Shape of You", 
    timesStreamed: 2.384, 
    wonGrammy: true},

    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

const spotifySong = songs.some(grammy => {grammy.wonGrammy})
console.log(spotifySong);
const spotifySongcheck = songs.every(streamed => !streamed.timesStreamed > 1)
console.log(spotifySongcheck);

const temperaturess = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: false }, 
    { degrees: 73, isRecordTemp: true }, 
    { degrees: 64, isRecordTemp: false }
];

const chTempt = temperaturess.map((tempt) => {
    tempt.isHigh = true; 
    return tempt;
})
console.log(chTempt);



const bestCountry = {
    ghana: 'roads',
    kenya: 'education',
    isbest: 'false' 
}
const bestAsia ={
    rice: 'paste',
    fufu: 'liquid',
    isbest: 'true' 
}
const bestCompiller ={
    cookedRice: '',
    solidFufu: '',
    isbest: '' 
}

const newObj = {...bestCompiller, ...bestCountry, ...bestAsia, hasWon : ' false'}
console.log(newObj);
console.log(bestCompiller);

// const test = bestAsia.map((asia) =>{
//     asia.fufu = 'solid';
//     return asia
// })
// console.log(test);

// let see what we see;
const temperaturez = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: false }, 
    { degrees: 73, isRecordTemp: true }, 
    { degrees: 64, isRecordTemp: false }
];

const check = temperaturez.map((temperature) => (
    temperature.degrees > 70 ? {...temperature, hasHighTemp : true} : {...temperature, hasLowTemp : false}
   
))
console.log(check);

check.forEach((tempt) => {
    if (tempt.hasHighTemp) {
        console.log(`Temperature ${tempt.degrees} was a record high last week`);
    }
})

//filter method (to get subset of array)
const restaurants = [
    { name: 'Cap City Diner', milesAway: 2.2 },
    { name: 'Chop Shop', milesAway: 4.1 },
    { name: 'Northstar Cafe', milesAway: 0.9 },
    { name: 'City Tavern', milesAway: 0.5 },
    { name: 'Shake Shack', milesAway: 5.3 }
  ]

const results = restaurants.filter(restaurant => restaurant.name.startsWith('C') && restaurant.milesAway < 3)
console.log(results);
const results1 = restaurants.filter(restaurant => restaurant.milesAway > 3)
console.log(results1);
console.log(restaurants);
const resul = restaurants.find(restaurant => restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 3)
console.log(resul)
//reduce method
const menuItems = [
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicy Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 13 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
  ];
  
 const resu = menuItems.reduce((accumulator, menuItem) =>{
    return accumulator += menuItem.price
 }, 0)
 console.log(resu);

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


 const totalWeight = cars.reduce((accumulator, car) => {
    return accumulator += car.weight
  }, 0)

  console.log(totalWeight);
 const electricCarWeight = cars.reduce((accumulator, car) => {
    if(car.isElectric){
        accumulator += car.weight
    }else{
        accumulator
    }
    return accumulator
  }, 0)

  console.log(electricCarWeight);


  const kosi = [];
  kosi.push({
    person: 'boy',
    people: 'girl',
    weight: 342
  })
  kosi.push({
    person: 'boy',
    people: 'girl',
    weight: 252
  })

  kosi.map((temp) => temp.haswon = true)
  const kosio = kosi.map((temp) =>{
    return temp 
  }
  )
  console.log(kosi);
  console.log(kosio);
 const  mewau = kosi.reduce((accumulator, weigh) => {
    return accumulator += weigh.weight
  }, 0)

  console.log(mewau);

  const numbers = [1, 2, 3, 4, 5, 6];
  const exam = numbers.reduce((acc, num) => {
    acc.push(num *2);
    return acc
  }, [])

console.log(exam);

const getSubset = numbers.reduce((acc, num) => {
    if(num > 3){
      acc.push(num)
    }else{
      acc
    }
   return acc;
}, [])
console.log(getSubset);
const resuz = numbers.filter((num) => {
    if(num > 3){
        return num
    }
})
console.log(resuz);

// const linda = ['eyes', 'nose']

// const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];
// const allMenuIdeas = [...lunchMenuIdeas, ...linda]
// allMenuIdeas.push('white satana', 'black love')
// console.log(lunchMenuIdeas);
// console.log(allMenuIdeas);
// console.log(linda);



const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];

const saladIndex = allMenuIdeas.findIndex((idea) => idea === 'Harvest Salad'
)

const finalMenuIdeas = [ 
    ...allMenuIdeas.slice(0, saladIndex),
    'Love world mins',
    ...allMenuIdeas.slice(saladIndex + 1)
]
    console.log(finalMenuIdeas);

// Challenge: 
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Modify these four variables first
let chefsFishDishes;
let regularFishDishes;


let chefsMeatDishes;
let regularMeatDishes;


// Finally, use the spread operator to create these two arrays as well
let chefsDishes;
let regularDishes;