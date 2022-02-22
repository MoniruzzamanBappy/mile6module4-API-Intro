function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    const postsContainer = document.getElementById('posts');
    for (const post of data) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `<h2>Title: ${post.title}</h2>
        <p>${post.body}</p>
        `
        postsContainer.appendChild(div);
    }
}

postData();

function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: 'abc',
            id: 1,
            type: 'my post 1'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}
addPost();