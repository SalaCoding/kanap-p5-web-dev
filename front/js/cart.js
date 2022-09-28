 //RETRIEVE THE DATA OBJECT FROM THE STORAGE
 const retrivStoredFile = JSON.parse(localStorage.getItem('store'));
 console.log(retrivStoredFile)
 
 
 //GE ACCES TO THE DOM
 const cart__items = document.getElementById('cart__items');
 const cart__item = document.createElement('article');
 const cart__item__img = document.createElement('div');
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
 
 for (i = 0 ; i < retrivStoredFile.length ; i++) {
    //cart__item.setAttribute(`data-id="${retrivStoredFile.productId}" data-color="${retrivStoredFile.color}" `);
    //cart__item__img.setAttribute('src', retrivStoredFile.imgUrl);
    //cart__item__img.innerHTML = `<img src="${retrivStoredFile.imgUrl}" alt="${retrivStoredFile.altTxt}">`;
    h2.textContent += retrivStoredFile.title[i];
    p__color.textContent = retrivStoredFile.color[i];
    
 }
 cart__items.appendChild(cart__item);
    cart__item.appendChild(cart__item__img);
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