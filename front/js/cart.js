let product = [];
let cart = [];
// SETTING GLOBAL VARIABLE SO WE CAN ACCESS IT  .
product = JSON.parse(localStorage.getItem("product"));
if (cart === null) {
  // We create an array
  cart = [];
}
// Retrieve the object from storage or the object is empty
cart = JSON.parse(localStorage.getItem('cart'));
cart.push(product);


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
//let cart__price = document.getElementById('cart__price');
let totalQuantity = document.getElementById('totalQuantity');
let totalPrice = document.getElementById('totalPrice');

let newQty = 0;
let itemFound;

  /**
  * RETRIVE ONLY A SINGLE PRODUCT
  * 
  * SETATTRIBUTE
  * NAME, COLOR, PRICE AND QUANTITY
  * INPUT RECEIVE VALUE AND CAN BE ADJUST
  * CLASSNAME TO APPLY THE CSS OF CLASS
  * APPENCHILD TO INSERT THE ELEMENT CREATED
  */
  cart__item.setAttribute('data-id', product.id);
  cart__item.setAttribute('data-color', product.color);
  
  cart__item__imgUrl.setAttribute('src', product.imgUrl);
  cart__item__imgUrl.setAttribute('alt', product.altText);
   
    //NAME, COLOR, PRICE AND QUANTITY
    h2.innerText = product.title;
    color.textContent = product.color;
    price.textContent = '€' + product.price;
    qty.textContent = 'Qte : ';
    
    //INPUT RECEIVE VALUE AND CAN BE ADJUST
    input.value = product.quantity;
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


    //DEFINE CLOSEST ELEMENT
    let getProId = cart__item.closest('article').dataset.id
    console.log(getProId);
    let getProColor = cart__item.closest('article').dataset.color;

  // --------------------------------------------------------------
  function increaseNumber() {
    cart.forEach(element => {
      newQty += Number(element.quantity);
      // Put the object back into storage
      localStorage.setItem('cart', JSON.stringify(cart));
    });
  }
  increaseNumber();
    // -------------------------------------------------------------
   

    let content = '';
    let item;
    function multipleItems() {
      for (let i = 0; i < cart.length; i++) {
      item = cart[i];

      content += `
        <article class="cart__item" data-id="${item.id}" data-color="${item.color}">
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
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${newQty}">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Delete</p>
          </div>
        </div>
      </div>
      </article>`;
    }
    cart__items.innerHTML = content;
  }
  multipleItems();
   // -----------------------------------------------------------------
  // GET THE LENGTH OF THE CART
   function getLength() {
   for (let i = 0; i < cart.length; i++) {
    console.log(cart[i].length)
    totalQuantity.textContent = cart[i].length;
   }
  }
   // ------------------------------------------------------------------
  //CALCULATION OF THE PRODUCT
  let priceOfItem = 0;
  let allPrice = 0;
  function sum() {
    cart.forEach(element => {
      //unknownQty = element.quantity.length;
      console.log(priceOfItem = element.price);
      allPrice += Number(element.quantity * priceOfItem);
      // Put the object back into storage
      localStorage.setItem('cart', JSON.stringify(cart)); 
    });
    totalPrice.textContent = allPrice.toFixed(2)
  }
  sum()
   // --------------------------------------------------------------------

  
//FUNCTION FOR DELETE BTN
function deleteItem() {
  let cartItem;
  for (let i = 0; i < p__deleteItem.length; i++) {
    const element = p__deleteItem[i];
    console.log(element + ' Hello')
    element.addEventListener('click', (event) => {
      event.preventDefault();
      let productTargetdId = cart__item.closest('article').dataset.id
    console.log(productTargetdId);
    let productTargetdColor = cart__item.closest('article').dataset.color;
      cartItem = cart.filter((el) => el.id !== productTargetdId || el.color !== productTargetdColor);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    })
  }
}
deleteItem();
// ----------------------------------------------------------------------