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

let data;
console.log(params)
console.log(productId);

fetch(urlparams + productId)
.then((response) => response.json())
.then((data) => {
    imgUrl.innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
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
    
    //LOCALSTORAGE
    const apiSelected = {
        id: productId,
        title: productTitle,
        price: productPrice,
        image: imgUrl,
        color: color.value,
        quantity: quantityNum.value,
    }
        /**
          * SAVE THE OBJECT INTO THE STORAGE
          * I STORE APISELECTED IN STORE
          */
    localStorage.setItem('store', JSON.stringify(apiSelected));

    window.location.href = "./cart.html";
    });