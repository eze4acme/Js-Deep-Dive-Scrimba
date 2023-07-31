// const student1 = {
//   id: 1,
//   name: "Reed",
//   subjects: [],
//   addSubject(subject) {
//     student1.subjects = [...student1.subjects, subject];
//     return this.subjects
//   }
// }

// student1.subjects.push('love, peace')
// console.log(student1.addSubject('Math'));
// console.log(student1.addSubject('Math'));
// student1.addSubject('hate');

// function Student(id, name, subjects = []) {
//     this.id = id;
//     this.name = name;
//     this.subjects = subjects;
//   }
//   Student.prototype.addSubjects = function (subject) {
//    return this.subjects = [...this.subjects, subject]
//   }
//   Student.prototype.deleteSubjects = function (subject) {
//     const elemIndex = this.subjects.findIndex(sub => sub == subject);
//     return [...this.subjects.slice(0, elemIndex), ...this.subjects.slice(elemIndex + 1)]
//   }
  
//   const student1 = new Student(1, 'reeds')
//   console.log(student1.name);
//   student1.subjects.push('physics')
//   student1.subjects.push('chemistry')
//   student1.subjects.push('biology')
//   console.log(student1.addSubjects('math, english'));
//   console.log(student1.deleteSubjects('chemistry'));
//   console.log(student1);
  
  
  // 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
  // 2. Add ids, titles and authors for your two favourite books. 
  // 3. Use the prototype keyword to add a theme property to the  books. 
  // 4. Add at least one theme to each of your books. 
  
  // Beginning:
  
  function Book(id, title, author, themes = []) {
      this.id = id;
    this.title = title;
    this.author = author;
    this.themes = themes;
  }
  const Book1 = new Book(12, 'Davinci code', 'don brown');
  console.log(Book1.themes);
  console.log(Book1.title);
  Book.prototype.addTheme = function (theme) {
   return this.themes = [...this.themes, theme]
  }

  console.log(Book1.addTheme('The end of time'));

 console.log( Object.getPrototypeOf({}));
  
 
 function Student(id, name, subjects = []) {
    this.id = id,
    this.name =name,
    this.subjects = subjects
 }

 Student.prototype.addSubjects = function (subject) {
  return  this.subjects = [...this.subjects, subject]
 }

 const student1 = new Student(98, 'moses')
console.log(student1.name);
console.log(student1.addSubjects('chem'));


class Student1 {
    constructor(id, name, subjects = []) {
        this.id = id;
        this.name = name;
        this.subjects = subjects
    }
    getName (num){
        return `${this.name} hello ${num}`
    }
}

const student2 = new Student1(23, 'jaden')
console.log(student2.getName ('Amigo'));

// 1. A school's film club wants to store details of the films 
//it has studied so far this year. Create a new class to do this.
// We want to store the following data about each film: id, title, 
//director, releaseYear and genres.

// 2. Create two methods on the class: 
//one for adding multiple genres to the films
// - addGenre(genre) - and one to get the title of the film - getFilmTitle().

// 3. Instantiate a new instance of the class using data from your 
//your favourite film. Add at least 1 genre to your film using addGenre(), 
//and get the title using getFilmTitle()

// Beginning:
class Film {
    constructor(id, title, director, releaseYear, genres = []) {
        this.id = id,
        this.title = title,
        this.director = director,
        this.releaseYear = releaseYear,
        this.genres = genres
    }
    addGenre(genre) {
        return this.genres = [...this.genres, genre]
    }
    getFilmTitle() {
       return this.title
    }
}

// Rest of your code here. 
const film1 = new Film(203, 'power', '50cent', 2010);
console.log(film1.director);
console.log(film1.addGenre('action'));
console.log(film1.getFilmTitle());



class Product {
    constructor (name, price, isDiscountable) {
        this.name = name,
        this._price = price,
        this.isDiscountable = isDiscountable
    }
    getDiscount(){
        return this.isDiscountable
    }
    get price(){
        return this._price
    }
    set price(price){
        if(typeof price !== 'number'){
            return this._price;
        }else{
          return  this._price = price;
        }
    }

}

class salesProduct extends Product{
    constructor (name, price, isDiscountable, percentageOff) {
        super(name, price, isDiscountable)
        this.percentageOff = percentageOff;
    }
    getPercentage(){
        if(super.getDiscount()){
         return `The discount of ${this.name} ${this._price * ((100 - this.percentageOff) / 100)}`
        }else{
         return   `This ${this.name} is not discountable `
        }
    }
}

const salesProduct1 = new salesProduct('Techno', 12000, true, 20);
salesProduct1.price = [];
console.log(salesProduct1.name);
console.log(salesProduct1.price);
console.log(salesProduct1.isDiscountable);

console.log(salesProduct1.getPercentage());







const isAuth = true;
const user = {
  favorites: []
};

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   handleFavoriteProduct() {
//     if (isAuth) {
//       setTimeout(this.favoriteProduct.bind(this), 1000);
//     } else {
//       console.log("You must be signed in to favorite products!");
//     }
//   }

//   favoriteProduct() {
//     user.favorites.push(this.name);
//     console.log(`${this.name} favorited!`);
//   }
// }

// const product1 = new Product('Coaster', 89.99)
// product1.handleFavoriteProduct()

const p = document.createElement('p')
p.innerText = ('Hello Jaden');

document.body.append(p)




// navigator.geolocation.getCurrentPosition(position => {
//     console.log(position);
//     getrestaurants(position, restaurants => {
//         console.log(restaurants);
//         console.log('Done!');
//     })
// })


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(Error('Promise failed')), 1000);
// })

// promise
// .then(value => console.log(value))
// .catch(error => console.error(error))
// .finally(() => console.log('Done'))




// const promise = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition((position) => {
//         resolve(position);
//     }),( error) => {
//         reject(error)
//     }
// })

// promise
// .then(position => console.log(position))
// .catch(error => console.error(error));

// const promise = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject) 
//  });
 
//  promise
//    .then(position => console.log(position))
//    .catch(error => console.error(error))
//    .finally(() => console.log('Done'))

// const promise = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject); 
//  });
 
//  promise
//    .then(position => console.log(position))
//    .catch(error => console.error(error))
//    .finally(() => console.log('done'));

// const blogPost = {
//     id : 123,
//     title:'cool post',
//     body: 'I love you wife and son'

// }
// fetch('https://jsonplaceholder.typicode.com/posts/1'
// )
// .then(response => {
//     if(!response.ok){
//         throw new Error(response.status)
//     }
// })
// .then(data => console.log(data.title))
// .catch(error => console.error(error))

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     response.json();
//       if (!response.ok) {
//         throw new Error(response.status);  
//       }
      
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error(error))



// Challenge: 
// The JSON Placeholder API has /users endpoint, 
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work. 

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3

// fetch('https://jsonplaceholder.typicode.com/users/3')
// .then(response =>{
//     if(!response.ok){
//         throw new Error(response.status)
//     }
//     return response.json()})
// .then(data => console.log(`The user ${data.id} his name is ${data.name} and works with ${data.company.name}`))
// .catch(error => console.log(error))


// navigator.geolocation.getCurrentPosition(position => {
//     console.log(position);
//     getrestaurant (postion, restaurants=> {
//         console.log(restaurants);
//         console.log('Done');
//     })
// })

// const promise = new Promise ((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
// });
    
    
// promise
//     .then(value => console.log(value))
//      .then(error => console.error(error))
//     .finally(() => console.log('Done'))

// fetch('https://jsonplaceholder.typicode.com/users/3')
// .then(response => {
//     if(!response.ok){
//         throw new Error(response.status)
//     }
//     return response.json()})
// .then(data => console.log(data.title))
// .catch(error => console.error(error))


// async function getBlogPost () {
//     const promise = new Promise ((resolve, reject) => {
//         setTimeout(() => resolve('This is My Blog'), 3000);
//     })
//     const result = await promise
//     console.log(result);
//     console.log('Done');
// }
// getBlogPost ()




// async function getPost () {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/3')
//     const data = await response.json();
//     console.log(data.email);
// }

// getPost()

// async function catchError () {
//     try{
//         await Promise.reject(Error('oops'))
//     }catch(error){
//         console.error(error);
//     }
        

// }

// catchError()




// runAsync ();


// Challenge: 
// Rewrite the GET API call from the previous challenge using async-await


// Challenge: 
// fetch('https://jsonplaceholder.typicode.com/users/3')
//   .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);  
//       }
      
//       return response.json()
//   })
//   .then(person => console.log(`${person.name} works for ${person.company.name}`))
//   .catch(err => console.error(err))

//   async function getUserInfo(){
//     try {
//         const response = await 
//         fetch('https://jsonplaceholder.typicode.com/users/3')
//         if(!response.ok){
//             throw new Error(response.status)
//         }
//         const person = await response.json();
//         console.log(`${person.name} works for ${person.company.name}`)

//     }
//   }
//   getUserInfo()
  
async function runAsync () {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/3')
        if(!response.ok){
            throw new Error(response.status)
        }
        const person = await response.json()
        console.log(`${person.name} works for ${person.company.name}`);
    }catch(error){
        alert('Could not fetch user, try resetting your connection')
        console.error(error);
    }
    }

    runAsync ()
