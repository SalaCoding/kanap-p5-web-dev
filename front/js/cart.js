// SETTING GLOBAL VARIABLE SO WE CAN ACCESS IT  .
let products = JSON.parse(localStorage.getItem("products"));
// Retrieve the object from storage or the object is empty
cart = JSON.parse(localStorage.getItem('cart'));

//GE ACCES TO THE DOM
const cart__items = document.getElementById('cart__items');
const cart__item = document.createElement('article');
const cart__item__img = document.createElement('div');
const cart__item__imgUrl = document.createElement('img');
const cart__item__content = document.createElement('div');
const cart__item__content__description = document.createElement('div');
const h2 = document.createElement('h2');
let color = document.createElement('p');
let price = document.createElement('p');
const cart__item__content__settings = document.createElement('div');
const cart__item__content__settings__quantity = document.createElement('div');
const qty = document.createElement('p');
let input = document.createElement('input');
const cart__item__content__settings__quantity__delete = document.createElement('div');
const p__deleteItem = document.createElement('p');
//HERE WE DECLARE OUR ID
let productId = products.id;
console.log(productId);
//HERE WE ARE FINDING OUR EXISTING PRODUCT ID IN THE CART
let foundId ='';

    //GET ACCESS TO THE DOM
  //let cart__price = document.getElementById('cart__price');
  let totalQuantity = document.getElementById('totalQuantity');
  let totalPrice = document.getElementById('totalPrice');

  /**
  * RETRIVE ONLY A SINGLE PRODUCT
  * 
  * SETATTRIBUTE
  * NAME, COLOR, PRICE AND QUANTITY
  * INPUT RECEIVE VALUE AND CAN BE ADJUST
  * CLASSNAME TO APPLY THE CSS OF CLASS
  * APPENCHILD TO INSERT THE ELEMENT CREATED
  */
  cart__item.setAttribute('data-id', products.id);
  cart__item.setAttribute('data-color', products.color);
  
   cart__item__imgUrl.setAttribute('src', products.imgUrl);
   cart__item__imgUrl.setAttribute('alt', products.altText);
   
    //NAME, COLOR, PRICE AND QUANTITY
    h2.innerText = products.title;
    color.textContent = products.color;
    price.textContent = '€' + products.price;
    qty.textContent = 'Qte : ';
    
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
    cart__item__content__description.appendChild(color);
    cart__item__content__description.appendChild(price);
    cart__item__content.appendChild(cart__item__content__settings);
    cart__item__content__settings.appendChild(cart__item__content__settings__quantity);
    cart__item__content__settings__quantity.appendChild(qty);
    cart__item__content__settings__quantity.appendChild(input);
    cart__item__content__settings.appendChild(cart__item__content__settings__quantity__delete);
    cart__item__content__settings__quantity__delete.appendChild(p__deleteItem);

    cart__items.appendChild(cart__item); 

    let content = '';
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];

      //Displaying number of articles
      totalQuantity.textContent = cart.length;
      
      content += `
      <article class="cart__item" data-id="${productId}" data-color="${item.color}">
      <div class="cart__item__img">
      <img src="${item.imgUrl}" alt="${item.altText}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${item.title}</h2>
        <p>${item.color}</p>
        <p>€ ${item.price}</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Delete</p>
        </div>
      </div>
    </div>
    </article>`;
    }
    cart__items.innerHTML = content;
   
    // Finding product object with id
    foundId = cart.findIndex((product) => product.id === productId);
    console.log(`${cart[foundId].id}`); 
    if (cart.length == 0) {
      cart.push(products);
    } else{
      let res = cart.findIndex((item) => item.id === productId);
      console.log(`${cart[res].id}`);
      if (res === undefined){
        // Push the new data onto the array
      cart.push(products); 
      }
    }
    // Put the object back into storage
    localStorage.setItem('cart', JSON.stringify(cart));
      
        p__deleteItem.addEventListener('click', function() {
          function removeItem(productId) {
            let temp = cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(temp));
          }
          removeItem(0)
          console.log(removeItem());
        })

   //GET ACCESS TO THE DOM  AND VALUE 
   const firstName = document.getElementById('firstName').value;
   const lastName = document.getElementById('lastName').value;
   const address = document.getElementById('address').value;
   const city = document.getElementById('city').value;
   const email = document.getElementById('email').value;