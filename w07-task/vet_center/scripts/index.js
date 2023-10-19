const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');
const cartInfo = document.querySelector('.cart-product'); // Changed 'cart-product' to '.cart-product'
const rowProduct = document.querySelector('.row-product');
const productsList = document.querySelector('.container-item');
let allProducts = [];
const totalValue = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#sum-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;
        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: parseFloat(product.querySelector('p').textContent.replace('$', '')), // Parse the price as a float
        }

        const existsIndex = allProducts.findIndex(p => p.title === infoProduct.title);

        if (existsIndex !== -1) {
            // El producto ya existe, aumenta la cantidad.
            allProducts[existsIndex].quantity++;
        } else {
            // El producto no existe, agrégalo a la lista.
            allProducts.push(infoProduct);
        }

        showHTML();
    }
});

// Agrega un evento para eliminar productos al hacer clic en la clase .icon-close
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('icon-close')) {
        const productTitle = event.target.parentElement.querySelector('.title-product-cart').textContent;

        // Encuentra el índice del producto en el array allProducts
        const productIndex = allProducts.findIndex(product => product.title === productTitle);

        if (productIndex !== -1) {
            if (allProducts[productIndex].quantity > 1) {
                // Si hay más de un producto, reduce la cantidad en 1
                allProducts[productIndex].quantity--;
            } else {
                // Si solo hay uno, elimina el producto del array
                allProducts.splice(productIndex, 1);
            }

            // Vuelve a mostrar la lista de productos en el carrito y actualiza el total
            showHTML();
        }
    }
});

const showHTML = () => {
    // Limpiamos el contenido actual de la lista de productos en el carrito
    const rowCart = document.querySelector('.row-cart');
    rowCart.innerHTML = ''; // Limpiamos la lista de productos en el carrito

    allProducts.forEach(product => {
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('cart-product');

        cartProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="product-cart-amount">${product.quantity}</span>
                <p class="title-product-cart">${product.title}</p>                                     
                <span class="price-product-cart">$${(product.price * product.quantity).toFixed(2)}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;
        rowCart.appendChild(cartProduct); // Agregamos el nuevo producto a la lista en el carrito


    });

    if (allProducts.length > 0) {
        cartTotal.classList.remove('hidden');
        cartEmpty.classList.add('hidden');
    } else {
        cartTotal.classList.add('hidden');
        cartEmpty.classList.remove('hidden');
    }

    totalValue.innerText = `$${total.toFixed(2)}`;
    countProducts.innerText = totalOfProducts; // Actualizamos la cantidad total de productos en el carrito
}