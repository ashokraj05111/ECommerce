let cartItems = [];

function addToCart() {
    cartItems.push("Product Name");
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
}

function checkout() {
    const userInfo = document.getElementById("user-info");
    userInfo.style.display = "block";
}

function submitOrder() {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const address = document.getElementById("address").value;

    // You can now send this data to the server for processing
    // For example, using AJAX or submitting a form to a server-side script
    console.log("Name:", name);
    console.log("Number:", number);
    console.log("Address:", address);

    alert("Order submitted!");
    cartItems = [];
    updateCart();
}
