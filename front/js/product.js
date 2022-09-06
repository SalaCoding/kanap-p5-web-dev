
const params = new URLSearchParams(window.location.search);
console.log(askId = params.has('id'));
const getId = params.get('_id');
console.log(params.toString());
const urlparams = 'http://localhost:3000/api/products/?${productsId}'


fetch(urlparams).then((data) => {
    return data.json();
    }).then(database => {
    
    for (let product of database) {
    //    console.log(product);

        //GET ACCESS TO THE DOM
        //let articleCase = document.createElement('article');
        //let divImg = document.querySelector('.item_img');

        let imgProduct = document.createElement('img');
        let titleProduct = document.getElementById('title');
        let priceProduct = document.getElementById('price');
        let descProduct = document.getElementById('description');
        let colProduct = document.getElementById('colors');

        //imgProduct.setAttribute('src', product.imageUrl);

        //INSERT DATA IN THE DOM
        titleProduct.innerHTML = product.imageUrl;
        titleProduct.innerHTML = product.name;
        priceProduct.innerHTML = product.price;
        descProduct.innerHTML = product.description;
        colProduct.innerHTML = product.colors;

        console.log(imgProduct);
        console.log(titleProduct);
        console.log(priceProduct);
        console.log(descProduct);
        console.log(colProduct);

    }
}).catch((err) =>{
    console.log(err);
})
 
    //BUTTONS
    const addToCart = document.getElementById('addToCart');
    addToCart.addEventListener("click", () => {
        window.location.href = "./cart.html";
      });
console.log(params);