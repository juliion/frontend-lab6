'use strict'

window.addEventListener('load', () => {
    const url = 'https://randomuser.me/api';
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', async () => {
        let data = await getData(url);
        createPersonCard(data);
    })
    
});

const getData = async (url) => {
    let response = await fetch(url);
    let json = await response.json();
    return json.results[0];
}

const createPersonCard = (data) => {
    let picture = data.picture.large;
    let name = data.name.first + ' '+data.name.last;
    let cell = data.cell;
    let city = data.location.city;
    let country = data.location.country;

    const cards = document.getElementById('cards');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<img src="${picture}" alt="Avatar" style="width:100%">` +
                     `<h3>${name}</h3>
                      <p>${cell}</p>
                      <p>${city}</p>
                      <p>${country}</p>`;

    cards.appendChild(card);
}

