const url = 'https://striveschool-api.herokuapp.com/api/product/'
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4Mjk3YWMwNTgzNTAwMTg1MjJkMGMiLCJpYXQiOjE3MDIzNzM3NTUsImV4cCI6MTcwMzU4MzM1NX0.dD-W5LON02eM3JlhOSkL2WOuQV1UqtqAEbcf2wMJuqs'
const header = {
    'Content-Type': 'application/json',
    'Authorization': token,
    'Accept': 'application/json'
}

let products = [];
let editingProductId = null; 

const getProducts = async () => {
    try {
        const response = await fetch(url, {
            headers: header
        });
        if (!response.ok) {
            throw new Error("la risposta al server non è andata a buon fine");
        }
        products = await response.json();
        displayProducts();
    } catch (error) {
        console.error("c'è un problema con l'operazione fetch", error);
    }
};

const displayProducts = () => {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach(product => {
        const row = document.createElement("tr");

        const selectCell = document.createElement("td");
        const selectCheckbox = document.createElement("input");
        selectCheckbox.type = "checkbox";
        selectCheckbox.value = product._id;
        selectCell.appendChild(selectCheckbox);
        row.appendChild(selectCell);

        const columns = [
            product.name,
            product.description,
            product.price,
            product.brand
        ];

        columns.forEach(column => {
            const cell = document.createElement("td");
            cell.textContent = column;
            row.appendChild(cell);
        });

        const actionsCell = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("btn", "btn-warning", "editButton", "text-dark");
        editButton.addEventListener("click", () => {
            editProduct(product._id);
        });
        actionsCell.appendChild(editButton);
        row.appendChild(actionsCell);

        productList.appendChild(row);
    });
};

// Aggiungi questa nuova funzione per gestire la modifica di un prodotto
const editProduct = (productId) => {
    editingProductId = productId;
    const productToEdit = products.find(product => product._id === productId);
    document.getElementById("name").value = productToEdit.name;
    document.getElementById("description").value = productToEdit.description;
    document.getElementById("price").value = productToEdit.price;
    document.getElementById("imageUrl").value = productToEdit.imageUrl;
    document.getElementById("brand").value = productToEdit.brand;
};

// Aggiungi questa funzione per annullare l'operazione di modifica
const cancelEdit = () => {
    editingProductId = null;
    resetForm();
};

const addOrUpdateProduct = async () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const brand = document.getElementById("brand").value;

    const newProduct = {
        name: name,
        description: description,
        price: price,
        imageUrl: imageUrl,
        brand: brand
    };

    try {
        let response;
        if (editingProductId) {
            response = await fetch(url + editingProductId, {
                method: "PUT",
                headers: header,
                body: JSON.stringify(newProduct)
            });
        } else {
            response = await fetch(url, {
                method: "POST",
                headers: header,
                body: JSON.stringify(newProduct)
            });
        }

        if (!response.ok) {
            throw new Error("la risposta al server non è andata a buon fine");
        }

        const updatedProduct = await response.json();

        if (editingProductId) {
            const index = products.findIndex(product => product._id === editingProductId);
            products[index] = updatedProduct;
        } else {
            products.push(updatedProduct); // Aggiunta del nuovo elemento
        }

        displayProducts(); // Aggiornamento dell'interfaccia
        resetForm();
    } catch (error) {
        console.error("compila tutti i campi", error);
    }
};

const resetForm = () => {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("imageUrl").value = "";
};

const deleteSelectedProducts = async () => {
    const selectedProducts = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
    if (selectedProducts.length === 0) {
        alert("seleziona il prodotto da eliminare");
        return;
    }

    try {
        const promises = selectedProducts.map(productId => {
            return fetch(url + productId, {
                method: "DELETE",
                headers: header
            });
        });
        await Promise.all(promises);
        getProducts();
    } catch (error) {
        console.error("c'è un problema con l'eliminazione del prodotto", error);
    }
};

window.onload = () => {
    getProducts();
};