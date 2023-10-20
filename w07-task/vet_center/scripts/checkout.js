document.addEventListener('DOMContentLoaded', function () {
    // Obtén la referencia a la tabla en checkout.html
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
