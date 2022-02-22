function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function showData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}
function userData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data, true))
}
function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayUser(data, false))
}

function displayUser(data, isName) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        if (isName == true) {
            li.innerText = `User Name: ${user.name}
            User Email: ${user.email}
            `;
        }
        else {
            li.innerText = `Post Title: ${user.title}`;
        }
        ul.appendChild(li);
    }
}

const premikas = { name: 'keka ferdousi', cars: { brand: 'toyota' } }
const { brand } = premikas.name;
console.log(brand);