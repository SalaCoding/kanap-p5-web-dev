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

const urlLink = 'http://localhost:3000/api/products'
const params = new URLSearchParams(urlLink);
const getId = params.get('_id');
//const getName = params.get('name');
//const getPrice = params.get('price');
//const getDesc = params.get('description');
//const getColor = params.get('colors');
//const getAlt = params.get('altTxt');

console.log(params.toString());

    fetch(urlLink).then((data) => {
        return data.json();
    }).then(database => {
        
        for (let products of database) {
            console.log(products);

            
            //let itemContent = document.querySelector('item');            

            let titleProd = document.getElementById('title');
            let priceProd = document.getElementById('price');
            let descProd = document.getElementById('description');
            let colProd = document.getElementById('colors');

            getId.setAttribute('href', products._id);
            titleProd.textContent = products.name;
            priceProd.textContent = products.price;
            descProd.textContent = products.description;
            colProd.textContent = products.color;

            console.log(titleProd);
            console.log(priceProd);
        //    console.log(descProd);
        //    console.log(colProd);
            
            
            
        //    itemContent.appendChild(item__img);
        }
    }).catch((err) =>{
        console.log(err);
    })
  
console.log(params);