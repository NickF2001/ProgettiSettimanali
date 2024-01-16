const url = 'https://striveschool-api.herokuapp.com/api/product/'
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4Mjk3YWMwNTgzNTAwMTg1MjJkMGMiLCJpYXQiOjE3MDIzNzM3NTUsImV4cCI6MTcwMzU4MzM1NX0.dD-W5LON02eM3JlhOSkL2WOuQV1UqtqAEbcf2wMJuqs'
const header = {
    'Content-Type': 'application/json',
    'Authorization': token,
    'Accept': 'application/json'
}

document.addEventListener('DOMContentLoaded', () => {
    function getProductId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    const productId = getProductId();
    if (productId) {
        fetch(`${url}${productId}`, {
            headers: header
        })
        .then(response => response.json())
        .then(product => {
            const productDetailsContainer = document.getElementById('productDetails');
            const viewProduct = `
                <div class="product-container d-flex">
                    <img src="${product.imageUrl}" alt="${product.name}" class="product-image detail-img" style="width:65%">
                    <div class="product-details">
                        <h2>${product.name}</h2>
                        <p><strong>Descrizione:</strong> ${product.description}</p>
                        <p><strong>Prezzo:</strong> ${product.price} €</p>
                        <a href="index.html" class="btn btn-info mt-3">Torna alla Home</a>
                    </div>
                </div>
            `;
            productDetailsContainer.innerHTML = viewProduct;
        })
        .catch(error => console.error('Errore nel recupero dei dettagli del prodotto:', error));
    } else {
        console.error('ID del prodotto non trovato nella URL');
    }
});