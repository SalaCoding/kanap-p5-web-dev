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

        const imgUrl = document.querySelector(".item__img");
        imgUrl.innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
        
        //imgProduct.alt = data.altTxt;
        //imgProduct.src = data.imageUrl;

        //imgProduct.setAttribute('src', data.imageUrl);
        //imgProduct.setAttribute('alt', data.altTxt);
        //imgBox.appendChild(imgProduct);

        const productTitle = document.getElementById("title");
        productTitle.textContent =  data.name;

        const productPrice = document.getElementById("price");
        productPrice.textContent = data.price;

        const productDescription = document.getElementById("description");
        productDescription.textContent = data.description;

        //Color handler
        const color = document.getElementById("colors");
            for (i = 0; i < data.colors.length; i++) {
            color.innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`;
        }
    
        //NUMBER HANDLER
        const quantityNum=  document.getElementById('quantity');
        quantityNum.addEventListener('input', function() {
            let valueNumber = quantityNum.value;

            console.log(valueNumber);
        })

        //BUTTON HANDLE LOCALSTOREGE
        const addToCart = document.getElementById('addToCart');
        addToCart.addEventListener("click", () => {
            
        //LOCALSTIRAGE
        apiSelected = {
            id: productId,
            color: color.value,
            quantity: quantityNum.value
    }

        console.log(apiSelected);
         //
         /**
          * SAVE THE OBJECT INTO THE STORAGE
          * I store data in STORAGEFILE
          */
        sessionStorage.setItem('storageFile', JSON.stringify(apiSelected));
        //RETRIEVE THE DATA OBJECT FROM THE STORAGE
        const sessionData = JSON.parse(sessionStorage.getItem('stoageFile'));
    
        console.log(typeof sessionData);

            window.location.href = "./cart.html";
        });
});
