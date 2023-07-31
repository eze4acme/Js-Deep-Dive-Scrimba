// function getData (baseUrl) {
//     return function (route){
//         return function (callback){
//             fetch(`${baseUrl}${route}`)
//             .then(response => response.json())
//             .then(data => callback(data))

//         }
//     }
// }


// socialMediaData = getData('https://jsonplaceholder.typicode.com')
// getSocialMediaPost = socialMediaData('/posts')
// getSocialMediaPost(posts => {
//     posts.forEach(post => console.log(post.title));
// });


function encap(){
    let user = 'Peter Obi'
    let message = `save Nigeria from total colapse`
    return function () {
    return    `${user} ${message}`
    }
}
const getmsg = encap()

console.log(getmsg());


function test(plots){
    const {main = 'Man', lay ='Faith', luty = 'Lust'} = plots
    return `${main} is love ${lay} is bed ${luty} is bad`
}

const result = test('');
console.log(result);

let username = 'ben'
const firstChar = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`

function getdetails(user, callback) {
    return callback( firstChar(user))
}

const getResult = getdetails(username, (user) => `Hello ${user} how are you doing brother!!!`)


console.log(getResult);