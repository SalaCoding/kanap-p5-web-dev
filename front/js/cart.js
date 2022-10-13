// SETTING GLOBAL VARIABLE SO WE CAN ACCESS IT  .
let products = JSON.parse(localStorage.getItem("products"));

//Declare the the empty variable
let cart = [];
// Retrieve the object from storage or the object is empty
cart = JSON.parse(localStorage.getItem('cart')) || [];
// Push the new data onto the array
cart.push(products);
// Put the object back into storage
localStorage.setItem('cart', JSON.stringify(cart));


 //GE ACCES TO THE DOM
 const cart__items = document.getElementById('cart__items');
 const cart__item = document.createElement('article');
 const cart__item__img = document.createElement('div');
 const cart__item__imgUrl = document.createElement('img');
 const cart__item__content = document.createElement('div');
 const cart__item__content__description = document.createElement('div');
 const h2 = document.createElement('h2');
 const p__color = document.createElement('p');
 const p__price = document.createElement('p');
 const cart__item__content__settings = document.createElement('div');
 const cart__item__content__settings__quantity = document.createElement('div');
 const qte = document.createElement('p');
 const input = document.createElement('input');
 const cart__item__content__settings__quantity__delete = document.createElement('div');
 const p__deleteItem = document.createElement('p');

      //SETATTRIBUTE
   cart__item.setAttribute('data', products.id);
   cart__item.setAttribute('data-color', products.color);
  console.log(cart__item)

   cart__item__imgUrl.setAttribute('src', products.imgUrl);
    cart__item__imgUrl.setAttribute('alt', products.altText);
   
    //NAME, COLOR, PRICE AND QUANTITY
    h2.innerText = products.title;
    p__color.textContent = products.color;
    p__price.textContent = '€' + products.price;
    qte.textContent = 'Qte : ';
    
    //INPUT RECEIVE VALUE AND CAN BE ADJUST
    input.value = products.quantity;
    input.setAttribute("type", "number");
    input.setAttribute("min", "1");
    input.setAttribute("max", "100");
    input.setAttribute("name", "itemQuantity");

    p__deleteItem.textContent = 'Delete';

   
    //CLASSNAME TO APPLY THE CSS OF CLASS
    cart__item.className = 'cart__item';
    cart__item__img.className = 'cart__item__img';
    cart__item__content.className = 'cart__item__content';
    cart__item__content__description.className = 'cart__item__content__description';
    cart__item__content__settings.className = 'cart__item__content__settings';
    cart__item__content__settings__quantity.className = 'cart__item__content__settings__quantity';
    input.className = 'itemQuantity';
    cart__item__content__settings__quantity__delete.className = 'cart__item__content__settings__quantity__delete';
    p__deleteItem.className = 'deleteItem';

    //APPENCHILD TO INSERT THE ELEMENT CREATED
 cart__items.appendChild(cart__item);
    cart__item.appendChild(cart__item__img);
    cart__item__img.appendChild(cart__item__imgUrl);
    cart__item.appendChild(cart__item__content);
    cart__item__content.appendChild(cart__item__content__description);
    cart__item__content__description.appendChild(h2);
    cart__item__content__description.appendChild(p__color);
    cart__item__content__description.appendChild(p__price);
    cart__item__content.appendChild(cart__item__content__settings);
    cart__item__content__settings.appendChild(cart__item__content__settings__quantity);
    cart__item__content__settings__quantity.appendChild(qte);
    cart__item__content__settings__quantity.appendChild(input);
    cart__item__content__settings.appendChild(cart__item__content__settings__quantity__delete);
    cart__item__content__settings__quantity__delete.appendChild(p__deleteItem);

    cart__items.appendChild(cart__item);

   
   //GET ACCESS TO THE DOM  AND VALUE 
   const firstName = document.getElementById('firstName').value;
   const lastName = document.getElementById('lastName').value;
   const address = document.getElementById('address').value;
   const city = document.getElementById('city').value;
   const email = document.getElementById('email').value;