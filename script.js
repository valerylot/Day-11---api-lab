//Fetch

const url = "https://api.github.com/users/octocat";
const data = fetch(url) //this returns back a promise
.then((response) => {
    console.log(response.status, response.ok);
    return response.json();
})
.then((data) => {
    console.log(data);
})
// need 2 .then(), one is the envelope(a response, status, ok, headers, no data yet), one is the letter IN the envelope (reads the data)


//-----------------------
console.log("A");
fetch("https://api.github.com/users/octocat").then(() => console.log("B"));
console.log("C");
// this prints in the order of A,C,B
//nothing waits for the fetch unless it lives inside the .then()


fetch("https://jsonplaceholder.typicode.com/posts/1") //order our food 
.then(response => response.json()) //promise (getting food in a package)
.then(data => console.log(data)) //now we can eat our unpacked food

//------------------------
function getUser(username){
    //calls the api with a fetch and get back the user
    return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
        //error handling would go placeholder
        return response.json();
    })
}


getUser("name")
.then((user) => console.log(user.username));
