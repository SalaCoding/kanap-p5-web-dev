let urlparams = 'http://localhost:3000/api/products/';
console.log(urlparams);

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');


console.log(params)
console.log(productId);

fetch(urlparams + productId)
.then((response) => response.json())
.then((data) => {

    //const imgBox = document.querySelector('.item__img');
    //const imgProduct = document.querySelector('img');

    document.querySelector(".item__img")
    .innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
    
    //imgProduct.alt = data.altTxt;
    //imgProduct.src = data.imageUrl;

    //imgProduct.setAttribute('src', data.imageUrl);
    //imgProduct.setAttribute('alt', data.altTxt);
    //imgBox.appendChild(imgProduct);

    document.getElementById("title").textContent =  data.name;
    document.getElementById("price").textContent = data.price;
    document.getElementById("description").textContent = data.description;

    //Color handler
    const color = document.getElementById("colors");
      for (i = 0; i < data.colors.length; i++) {
        color.innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`;
      }

});

//BUTTON HANDLE LOCALSTOREGE
const addToCart = document.getElementById('addToCart');
addToCart.addEventListener("click", () => {

    
        //NUMBER HANDLER
    document.getElementById('quantity').value;

    //OTHER DATA

    
    window.location.href = "./cart.html";
});