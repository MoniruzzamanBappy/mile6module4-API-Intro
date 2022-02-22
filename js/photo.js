function postPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => getData(data))
}

function getData(photos) {
    const photoContainer = document.getElementById('photo-container');

    for (const photo of photos) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>${photo.title}</h3>
        <img src="${photo.url}" alt="">
        <img src="${photo.thumbnailUrl}" alt="">
        `;
        photoContainer.appendChild(div);
    }
}