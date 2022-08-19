//Get all the DOM necessary

const productSelected = document.querySelector('cart__item__img');

const cartDescription = document.querySelector('cart__item__content__description');
//const nameProduct = cartDescription[0];
//const colorProduct = cartDescription[1];
//const priceProduct = cartDescription[2];

/*
*
Set the number of the items
*
*/
const inputQuantity = document.querySelector('.itemQuantity');

const cartSettingDelete = document.querySelector('cart__item__content__settings__delete');
//const deleteBtn = cartSettingDelete[0];

//Here the informations about the total of items and prices

const totalItem = document.getElementById('totalQuantity');
const totalOfPrice = document.getElementById('totalPrice');

const costumerName = document.getElementById('firstName');
const costumerLastName = document.getElementById('lastName');
const errorMsg = document.getElementById('lastNameErrorMsg');

errorMsg.textContent = 'Veillez entrer votre nom correct!';


const costumerAddress = document.getElementById('address');
const addressErrorMsg = document.getElementById('addressErrorMsg');

addressErrorMsg.textContent = 'Veillez entrer votre une addresse correcte!';


const costumerCity = document.getElementById('city');
const cityErrorMsg = document.getElementById('cityErrorMsg');

cityErrorMsg.textContent = 'Veillez entrer votre une ville correcte!';


const costumeremail = document.getElementById('email');
const emailErrorMsg = document.getElementById('emailErrorMsg');

emailErrorMsg.textContent = 'Veillez entrer votre un email correct!';


const btnOrder = document.getElementById('order');

//Send informations

inputQuantity.addEventListener('change', ($event) => {
    totalItem.textContent = $event.target.value;

});