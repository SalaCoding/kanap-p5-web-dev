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
//const getImg = params.get('img');
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

            //GET ACCESS TO THE DOM
            articleCase = document.createElement('article');
            //let divImg = document.querySelector('.item_img');

            //let imgProduct = document.createElement('img');
            let titleProduct = document.getElementById('title');
            let priceProduct = document.getElementById('price');
            let descProduct = document.getElementById('description');
            let colProduct = document.getElementById('colors');

            

            //imgProduct.setAttribute('src', products.imageUrl);

            //INSERT DATA IN THE DOM
            titleProduct.textContent = products.name;
            priceProduct.textContent = products.price;
            descProduct.textContent = products.description;
            colProduct.textContent = products.colors;

            

            console.log(titleProduct);
            console.log(priceProduct);
            console.log(descProduct);
            console.log(colProduct);
            
            
            itemSection = document.querySelector('.item');
            //itemSection.appendChild(item__img);
        }
    }).catch((err) =>{
        console.log(err);
    })
  
console.log(params);