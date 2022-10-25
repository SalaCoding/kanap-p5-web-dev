let urlparams = 'http://localhost:3000/api/products/';
console.log(urlparams);

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const imgUrl = document.querySelector(".item__img");
const productTitle = document.getElementById("title");
const productPrice = document.getElementById("price");
const productDescription = document.getElementById("description");
let color = document.getElementById("colors");
const quantityNum =  document.getElementById('quantity');
let quantity;
let foundId;
let products

console.log(params)

let imageURL = "";
let altTxt = "";

fetch(urlparams + productId)
.then((response) => response.json())
.then((data) => {
    imgUrl.innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
    imageURL = data.imageUrl;
    altTxt = data.altTxt;
    productTitle.textContent =  data.name;
    productPrice.textContent = data.price;
    productDescription.textContent = data.description;
        //Color handler
        for (let i = 0; i < data.colors.length; i++) {
            color.innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`;
        }
        //NUMBER HANDLER
        quantityNum.addEventListener('input', function() {
            quantity = quantityNum.value;
            console.log(quantity);
        })
});

//BUTTON HANDLE LOCALSTOREGE
const addToCart = document.getElementById('addToCart');
addToCart.addEventListener("click", function(productId) {
    if (color === '') {
        // If there is no selected color
        alert("Select a color of the item."); 
    } else if (quantity <= 0 || quantity > 100) {
        alert("Check the quantity of the articles!.");
    } else {
    /**
     * LOCALSTORAGE
     * Created object of product
     */
    const product = {
        id: productId,
        imgUrl: imageURL,
        img: altTxt,
        title: productTitle.textContent,
        price: productPrice.textContent,
        color: color.value,
        quantity: quantityNum.value,
    }
    //Store object data in the localstorage.
    localStorage.setItem('products', JSON.stringify(product));
    
    cart = JSON.parse(localStorage.getItem("cart"));

    foundId = cart.find((productId) => productId === productId);
    cart.push(products);
    console.log(foundId);

    

    alert("Go to the cart");
    }
});