/*************** 
principal functions:
1. Function in the event btnCart.addEventListener('click', function () {...}):
It runs when the cart button is clicked. controls the appearance and disappearance of the cart on the page.
2. Function in the event productsList.addEventListener('click', function (e) {...}):
It runs when the button to add a product to cart is clicked, also updating the local storage with the cart data.
3. Function in the event document.addEventListener('click', function (event) {...}):
Used to remove products from the cart when the close icon is clicked
4.showHTML function:
Updates the display of the products in the cart. Clears the current contents of the cart, loops through all products in allProducts,
calculates the total and quantity of products, and then displays the products in the cart.
*/
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');
const cartInfo = document.querySelector('.cart-product'); // Changed 'cart-product' to '.cart-product'
const rowProduct = document.querySelector('.row-product');
const productsList = document.querySelector('.container-item');
let allProducts = [];
const valorTotal = document.querySelector('.total-pagar')
const countProducts = document.querySelector('#sum-products')

// Actualiza el evento click en el botón del carrito
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

        localStorage.setItem('cartData', JSON.stringify(allProducts));

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

    if(!allProducts.length){
        containerCartProducts.innerHTML=`
        <p class='cart-empty'>The cart is empty</p>`;

        totalOfProducts = 0; // Reset totalOfProducts to 0
    };
    let total = 0; //total del dinero a pagar
    let totalOfProducts = 0;  //total de items del carrito

    // Limpia el contenido actual de la lista de productos en el carrito
    const rowCart = document.querySelector('.row-cart');
    rowCart.innerHTML = ''; // Limpia la lista de productos en el carrito

    allProducts.forEach(product => {
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('cart-product');

        total += product.price * product.quantity;
        totalOfProducts += product.quantity;

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
        rowCart.appendChild(cartProduct); // Agrega el nuevo producto a la lista en el carrito


    });

    valorTotal.innerText = `$${total.toFixed(2)}`;
    countProducts.innerText = totalOfProducts;

    if (allProducts.length > 0) {
        cartTotal.classList.remove('hidden');
        cartEmpty.classList.add('hidden');
    } else {
        cartTotal.classList.add('hidden');
        cartEmpty.classList.remove('hidden');
    }
   
};

const cartData = {
    products: allProducts,
    total: valorTotal.innerText,
    count: countProducts.innerText
  };
  
  // Convierte el objeto JSON a una cadena
  const cartDataString = JSON.stringify(cartData);
  
  // Almacena la cadena en el almacenamiento local
  localStorage.setItem('cartData', cartDataString);
