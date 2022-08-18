const queryString = window.location.search;
//const queryString = new URL ('http://localhost:3000/api/products');
const urlParams = new URLSearchParams(queryString);
const idParam = urlParams.getAll('id');


console.log(urlParams);
console.log(idParam);
