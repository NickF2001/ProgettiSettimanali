const url = 'https://striveschool-api.herokuapp.com/api/product/'
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4Mjk3YWMwNTgzNTAwMTg1MjJkMGMiLCJpYXQiOjE3MDIzNzM3NTUsImV4cCI6MTcwMzU4MzM1NX0.dD-W5LON02eM3JlhOSkL2WOuQV1UqtqAEbcf2wMJuqs'
const header = {
    'Content-Type': 'application/json',
    'Authorization': token,
    'Accept': 'application/json'
}


document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards-container');

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('card', 'm-3', 'p-3');
        card.style.width = '18rem';

     const image = document.createElement('img');
        image.src = product.imageUrl;
        image.classList.add('card-img-top');
        image.alt = product.name;
        image.style.width = '100%';      
       
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerHTML = `
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">prezzo: ${product.price}€</p>          
        `;

        const detailsButton = document.createElement('button');
        detailsButton.classList.add('btn', 'btn-info', 'mt-3');
        detailsButton.textContent = 'Dettagli';
        
        detailsButton.addEventListener('click', () => {
            // Reindirizza alla pagina dei dettagli del prodotto
            window.location.href = `detail.html?id=${product._id}`;

        });


        card.appendChild(image);
        card.appendChild(cardBody);
        cardBody.appendChild(detailsButton);
        return card;
    }

    fetch(url, {
             headers: header
    })
    .then(response => response.json())
    .then(productsData => {
        productsData.forEach(product => {
            const card = createProductCard(product);
            cardsContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Si è verificato un errore:', error));

   
});