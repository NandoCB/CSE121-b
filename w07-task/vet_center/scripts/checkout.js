// Agrega un evento al enlace "Check Out"
const checkOutLink = document.querySelector('.check-btn');
checkOutLink.addEventListener('click', () => {
    // Redirige a la página de checkout.html
    window.location.href = 'checkout.html';
});

//carga los datos en la página de checkout.html
document.addEventListener('DOMContentLoaded', () => {
    const cartDataString = localStorage.getItem('cartData');
    if (cartDataString) {
        const cartData = JSON.parse(cartDataString);
        const checkoutTable = document.getElementById('checkout-table');
        const checkoutTotal = document.getElementById('checkout-total');

        // carga la tabla de checkout
        cartData.products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.title}</td>
                <td>${product.quantity}</td>
                <td>$${(product.price * product.quantity).toFixed(2)}</td>
            `;
            checkoutTable.appendChild(row);
        });

        // Muestra el total
        checkoutTotal.textContent = cartData.total;
    }
});



