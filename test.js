
function getData (url) {
    return function (endpoint){
        return function (callback){
            fetch(`${url}${endpoint}`)
            .then(response => response.json())
            .then(data => callback(data))

        }
    }
}

const socialMediaData = getData('https://jsonplaceholder.typicode.com')
const getSocialMediaPost = socialMediaData('/posts')
getSocialMediaPost(posts => {
    posts.map(post => console.log(post.title));
});





// function encap(){
//     let user = 'Peter Obi'
//     let message = `save Nigeria from total colapse`
//     return function () {
//     return    `${user} ${message}`
//     }
// }
// const getmsg = encap()

// console.log(getmsg());


// function test(plots){
//     const {main = 'Man', lay ='Faith', luty = 'Lust'} = plots
//     return `${main} is love ${lay} is bed ${luty} is bad`
// }

// const result = test('');
// console.log(result);

// let username = 'ben'
// const firstChar = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`
// console.log(firstChar(username));
// function getdetails(user, callback) {
//     return callback( firstChar(user))
// }

// const getResult = getdetails(username, (user) => `Hello ${user} how are you doing brother!!!`)


// console.log(getResult);