// SETTING GLOBAL VARIABLE SO WE CAN ACCESS IT  .
let product = JSON.parse(localStorage.getItem("product"));
// Retrieve the object from storage or the object is empty
cart = JSON.parse(localStorage.getItem('cart'));
cart.push(product);
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


    let content = '';
    let item;
    function multipleItems() {
      for (let i = 0; i < cart.length; i++) {
      item = cart[i];
      let element = item.price;

      //CALCULATION OF THE PRODUCT
      cartLenght = cart.length
      //Displaying number of articles
      totalQuantity.textContent = cart.length;
    
      content += `
      <article class="cart__item" data-id="${item.id}" data-color="${item.color}">
      <div class="cart__item__img">
      <img src="${item.imgUrl}" alt="${item.altText}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${item.title}</h2>
        <p>${item.color}</p>
        <p>€ ${element}</p>
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

    
    if (cart === undefined) {
      cart = [];
    } else if (item.id !== getProId){
      cart.push(product)
      localStorage.setItem('cart', JSON.stringify(cart));
    } else if (item.id === getProId && item.color == getProColor){
        //alert('Hello world');
        //cart__item.closest('section').splice(item, 1);
    } else {
      cart.push(product)
      // Put the object back into storage
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    }
    cart__items.innerHTML = content;
  }
  multipleItems();

//FUNCTION FOR DELETE BTN
  function removeItem(getProId) {
      console.log(p__deleteItem);
      cart.forEach(element => { 
      p__deleteItem.addEventListener("click", () => {
        //event.preventDefault();

        //DEFINE CLOSEST ELEMENT
        getProId = element.closest('article').dataset.id;
        //getProColor = element.closest('article').dataset.color;
        let tempCart = cart.filter((el) => el.id !== getProId);
        localStorage.setItem("cart", JSON.stringify(tempCart));

        location.reload();
      });
      console.log(cart, product.id);
    })
  }
  removeItem(getProId);

    //CALCULATION OF THE PRODUCT
    let quantityOfOneProduct = 0;
    let quantityOfTheLength = 0;
    let priceOfItem = 0;
    let allPrice = 0;
      cart.forEach(element => {
        console.log(getProId)
        //unknownQty = element.quantity.length;
        quantityOfTheLength += Number(element.quantity);
        priceOfItem = element.price;
        allPrice += Number(quantityOfTheLength * priceOfItem); 
      });
      //console.log(quantityOfTheLength)
      console.log(totalPrice.innerText = allPrice)
      localStorage.setItem("cart", JSON.stringify(cart));
