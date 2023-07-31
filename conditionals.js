


let temperature = 80;

if (temperature < 20) {
    console.log(`it's cold outside`);
}else if(temperature > 20){
    console.log(`it's hot outside`);
}else{
    console.log(`it's moderate outside`);
}
function displayTempereture(temperature) {
    if (temperature == 20) {
        console.log(`it is moderate outside`);
    }else if(temperature > 20){
        console.log(`it is very hot outside`);
    }else{
        console.log(`it is very cold outside`);
    }

}
displayTempereture(30)
displayTempereture(10)
displayTempereture(20)

function allowPurchase(isLogin, isEmailVerified, isCardInfoVerified) {
    if(isLogin && isEmailVerified && isCardInfoVerified){
        console.log(`You are allowed to make purchase`)
    }else{
        console.log(`Kindly loggin to make purchase`)
    }
}
allowPurchase(true, true, true)

function allowToLogin(isEmail, isGoogle, isFacebook) {
    if(isEmail || isGoogle || isFacebook){
        console.log(`You are allowed to make your purchase`);
    }else{
        console.log(`kindly login to purchse course`);
    }
    
}
allowToLogin(false, false, false)

let autenticate  = true;
autenticate? console.log(`show logout`): console.log(`show login`);

//Scrimba javascript deep dive Tutorial 
// let colorMode ="";
function displayMode(colorMode) {
    switch (colorMode) {
        case "darkMode":
            console.log(`This is dark mode`);
            document.body.style.backgroundColor = 'black'
            break;
    
        case "lightMode":
            console.log(`This is light mode`);
            document.body.style.backgroundColor = 'blue'
            break;
    
        case "harshMode":
            console.log(`This is harsh mode`);
            document.body.style.backgroundColor = 'red'
            break;
    
        default:
            console.log(`No mode selected`);
            document.body.style.backgroundColor = 'yellow'
            break;
    }
}
displayMode("lightMode")
displayMode("harshMode")
displayMode("harshMode")
displayMode()


// Challenge 1: create a conditional that logs out "Good morning!", "Good evening!" and so on depending on the value of time (<- a variable)

// Challenge 2: Rewrite the whole thing as a switch statement

const time = "night" // could be "afternoon", "evening" and "night"

if (time == "morning"){
    console.log(`Good morning!`);
}else if (time == "afternoon"){
    console.log(`Good afternoon!`);
}else if (time == "evening"){
    console.log(`Good evening!`);
}else{
    console.log(`Good night!`);
}

function displayGreeting(time) {
    switch (time) {
        case "morning":
            console.log(`Good morning!`);
            break;
    
        case "afternoon":
            console.log(`Good afternoon!`);
            break;
    
        case "evening":
            console.log(`Good evening!`);
            break;
    
        default:
            console.log(`Good night!`);
            break;
    }
}
displayGreeting('morning')
displayGreeting('afternoon')
displayGreeting('evening')
displayGreeting()

//Types conversion, 1.explicit and implicit coersion
// Challenge 1:
// What will the following console logs display? (they're all true and false)

console.log("Challenge 1:") // true
console.log(!undefined);  //true
console.log(Boolean(NaN));   //false
console.log(false === false);  //true
console.log(5 === "5"); //false
console.log("Hello" == "hello");  //false

// Challenge 2:
// What will the following console logs display? (they're all true and false)
console.log("Challenge 2:") //true
console.log(Boolean(0)); //false
console.log(Boolean("0"));//true
console.log(Boolean("")); //false
console.log(!null); //true
console.log(!!"hello");//true

// Challenge 3:
// List all the falsy values in JavaScript
//1.undefined
//2.NaN
//3.false
//4.0
//5.''
//6.null

//convert to tenary Operataor

const age1 = 20;

// let greeting;

// if (age < 10) {
//   greeting = "Hey there"; 
// } else {
//   greeting = "That's an interesting age!";  
// }
// console.log(greeting);

let greeting = age1 < 10 ? "Hey there": "That's an interesting age!";
console.log(greeting);


//Ternaries challenge
// Challenge 1: Check if the user is allowed to add an "iPad" to its shopping cart. Write a ternary that sets the shoppingCart variable to "iPad" if the user is authenticated, and an empty string if the user isn't authenticated

const isAuthenticated = true;
let shoppingCart;

shoppingCart = isAuthenticated ? 'ipad' : '';


console.log("shoppingCart: ", shoppingCart);


// Challenge 2: Check if user is old enough. Write a ternary that sets allowedAccess to true if the age is 18 or more, or false if not
const age = 26;
let allowedAccess;

allowedAccess = age >= 20 ? true : false;


console.log("allowedAccess: ", allowedAccess);

//Short circuit tenery
/* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold are allowed to upvote. */

const karma = 143;
const isModerator = false;

// first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
let hasEnoughKarma;
hasEnoughKarma = karma > 100 ? true :  false;

//  set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
let canUpvote;
canUpvote = hasEnoughKarma && isModerator;
console.log("canUpvote:", canUpvote);


/* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  How would you set the canDelete variable */

// set canDelete to true if both hasEnoughKarma and isModerator is true
let canDelete;
canDelete = hasEnoughKarma && isModerator;
console.log("canDelete:", canDelete);


// Challenge 3: what is the value of user? true What if you switch the hasValidEmail variable to false? false What if the response is empty?true

const response = "JohnDoe";
const hasValidEmail = false;
const user = hasValidEmail && (response || "guest");
console.log("user: ", user);





