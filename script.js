let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    
    cartTotal.textContent = total;
}

// Ensure the script doesn't execute if the elements are not present
if (document.getElementById('cartItems')) {
    updateCart();
}
