document.addEventListener('DOMContentLoaded', function () {
    // Obtiene la referencia a la tabla en checkout.html
    const tableBody = document.getElementById('checkoutTableBody');

    // Recupera los datos del carrito desde el almacenamiento local
    const cartData = JSON.parse(localStorage.getItem('cartData'));

    // Verifica si hay datos en el carrito
    if (cartData) {
        // Itera a través de los productos y crea filas de tabla
        cartData.forEach(product => {
            const row = document.createElement('tr');

            const productCell = document.createElement('td');
            productCell.textContent = product.title;

            const quantityCell = document.createElement('td');
            quantityCell.textContent = product.quantity;

            const unitPriceCell = document.createElement('td');
            unitPriceCell.textContent = `$${product.price.toFixed(2)}`;

            const totalCell = document.createElement('td');
            totalCell.textContent = `$${(product.price * product.quantity).toFixed(2)}`;

            row.appendChild(productCell);
            row.appendChild(quantityCell);
            row.appendChild(unitPriceCell);
            row.appendChild(totalCell);

            tableBody.appendChild(row);
        });
    }
});


function saveData() {
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;
    const phone = document.getElementById("phone").value;

    const savedInfo = `
        <ul style="list-style-type: none;">
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Last Name:</strong> ${lastName}</li>
            <li><strong>Address:</strong> ${address}</li>
            <li><strong>Country:</strong> ${country}</li>
            <li><strong>State/Province:</strong> ${state}</li>
            <li><strong>City:</strong> ${city}</li>
            <li><strong>Phone:</strong> ${phone}</li>
        </ul>
    `;

    document.getElementById("savedInfo").innerHTML = savedInfo;
    openModal();

    // Clear the table fields
    document.getElementById("name").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("country").value = "";
    document.getElementById("state").value = "";
    document.getElementById("city").value = "";
    document.getElementById("phone").value = "";
}

function openModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function saveToTextArea() {
    const savedInfo = document.getElementById("savedInfo").textContent;
    const textArea = document.getElementById("textArea");
    textArea.value = savedInfo;
    textArea.style.display = "block";
    closeModal();
}

