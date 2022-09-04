
//const queryStr = ('http://localhost:3000/api/products/?id', toString())
// = ;
//const params = new URLSearchParams('http://localhost:3000/api/products/?id')
//fetch(params).then(function (response) {
//    return response.text();
//})   
//.then(function (text) {
//    console.log(text);
//})

//console.log(params);

const urlLink = ('http://localhost:3000/api/products')
const params = new URLSearchParams(document.location.search);

params.forEach((value, key) => {
    (value, key);
    console.log(params.toString());
  });
  const imageProd = document.createElement('a');
  const titleProd = document.getElementById('title');
  const priceProd = document.getElementById('price');
    const descProd = document.getElementById('description');
    const colorsProd = document.getElementById('colors');
    const quantity = document.getElementById('quantity');
    const addButton = document.getElementById('addToCart');
console.log(params);