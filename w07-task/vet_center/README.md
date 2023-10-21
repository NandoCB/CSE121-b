CSE 121b - Final project - Fernando Cardozo - BYU  Idaho

The project code is a JavaScript implementation to manage a simple shopping cart on a web page. It is responsible for the following tasks:

Shopping Cart Management:

1. The code manages a shopping cart on the web page.

When the cart button (btnCart) is clicked, it shows or hides the list of products in the cart.

2. Adding Products to the Cart:

When the "Add to Cart" button in the product list (productsList) is clicked, it collects product information (name, price) and adds it to the cart.
If the product already exists in the cart, its quantity is incremented instead of duplicating it.

3. Removing Products from the Cart:
Products can be removed from the cart by clicking an "X" icon next to each product in the cart.
If a product is reduced to a quantity of 0, it is removed from the cart.

4. Updating and Displaying the Cart:
The showHTML function is responsible for updating and displaying the list of products in the cart, including the quantity, title, and price of each product.
It calculates the total price to pay and the total number of products in the cart.

5. Local Storage:

Cart data is stored in the browser's local storage to persist products in the cart even after page reloads.

6. Shipping Data Management:

The code allows the user to enter shipping information, such as name, last name, address, etc.
The shipping information is displayed in a modal and can be copied to a text box.
Pop-ups and modal windows can be opened and closed.

7. Selecting Shipping Options:

The user can select shipping options from a dropdown menu (select).
Information about shipping options is retrieved from a JSON file (shipping_options.json).
The shipping cost is displayed on the page and added to the total price to pay.

8. Checkout Summary Table:

Cart information is displayed in a table on the checkout page.

9. User Interface Functions:

Various functions handle opening, closing modals, and pop-up windows to enhance the user experience.

List of existing functions:

index.js

1. Function in the event btnCart.addEventListener('click', function () {...}):
It runs when the cart button is clicked. controls the appearance and disappearance of the cart on the page.
2. Function in the event productsList.addEventListener('click', function (e) {...}):
It runs when the button to add a product to cart is clicked, also updating the local storage with the cart data.
3. Function in the event document.addEventListener('click', function (event) {...}):
Used to remove products from the cart when the close icon is clicked
4.showHTML function:
Updates the display of the products in the cart. Clears the current contents of the cart, loops through all products in allProducts,
calculates the total and quantity of products, and then displays the products in the cart.


checkout.js

List of existing functions:
1. DOMContentLoaded Event Listeners:
a.The event that is fired when the DOM has been fully loaded.
  'DOMContentLoaded', function ():
b.It is executed when the page is ready to interact with the JavaScript. In this case, it is used to load and display the products in the cart and select shipping options.
2. saveData(): Save the shipping information. It collects the data from the submission form, displays it on the page and saves it in a modal.
3. openModal(): Open the modal that displays the saved shipping information.
4. closeModal(): Closes the modal that displays the saved shipping information.
5. saveToTextArea(): Copies the shipping information saved in the modal and places it in a text box.
6. openPopup(): Open a popup on the web page.
7. closePopup(): Close the popup.


W07: Final Project
Criteria: 
1. The application is rendered on the student's GitHub Pages in a subfolder within cse121b.
2. The application works as planned, uses JavaScript, and is usable to the client. The range option is provided to the grader in order to account for levels of functionality..
3. At least one module is used with supporting import and export functionality.
4. At least one instance of conditional branching is used.
5. All string builds use template literals versus string concatenation.
6. At least one array is used in the application.
7. At least one array method of the type of filter, map, reduce, or at is used in the application.
8. Fetch is used to get JSON data and used in the application.
