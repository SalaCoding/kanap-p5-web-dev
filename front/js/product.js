let urlparams = 'http://localhost:3000/api/products/';
console.log(urlparams);

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const imgUrl = document.querySelector(".item__img");
const productTitle = document.getElementById("title");
const productPrice = document.getElementById("price");
const productDescription = document.getElementById("description");
const color = document.getElementById("colors");
const quantityNum =  document.getElementById('quantity');

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
            let valueNumber = quantityNum.value;
            console.log(valueNumber);
        })
});

    //BUTTON HANDLE LOCALSTOREGE
    const addToCart = document.getElementById('addToCart');
    addToCart.addEventListener("click", () => {
    
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
    
    localStorage.setItem('products', JSON.stringify(product));
    
    cart = JSON.parse(localStorage.getItem("cart"));
        window.location.href = "./cart.html";
    });