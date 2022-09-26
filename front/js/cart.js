 //RETRIEVE THE DATA OBJECT FROM THE STORAGE
 const retrivStoredFile = JSON.parse(localStorage.getItem('store'));
 console.log(retrivStoredFile)
 
//CART IMAGE
const cartImg = document.getElementsByClassName('cart__item__img');
let newImage = document.createElement('img');
cartImg.innerHTML = `<img src="${retrivStoredFile.imgUrl}" alt="${retrivStoredFile.altTxt}">`;
console.log(cartImg)

//Cart content
const cartContent = document.getElementById('cart__item__content');
//Description of the product
const cartItemDescription = document.getElementsByClassName('cart__item__content__description');
const childCartItem = document.getElementsByTagName('h2').textContent = retrivStoredFile.title;
const secondChildCartItem = childCartItem[0].textContent = retrivStoredFile.color;
const thirdChildCartItem = childCartItem[1].textContent = retrivStoredFile.price;
// Set the number of the items
const inputQuantity = document.querySelector('.itemQuantity');
//    const deleteBtn = document.getElementById('deleteItem');
console.log(childCartItem)
console.log(secondChildCartItem)
console.log(thirdChildCartItem)










//Calculation
const newObject = {
    min: 1,
    max: 100,
}
for (let i = 0; i < newObject.max; i++){
    //totalOfPrice += inputQuantity * thirdChildCartItem;
}

const resetForm = document.querySelector('.cart__order__form');


//Quantity of the product
const totalItem = document.getElementById('totalQuantity');
totalItem.textContent = retrivStoredFile.quantity;
const totalOfPrice = document.getElementById('totalPrice');

//    const costumerName = document.getElementById('firstName');
//    const costumerLastName = document.getElementById('lastName');
//    const errorMsg = document.getElementById('lastNameErrorMsg');
//    errorMsg.textContent = 'Veillez entrer votre nom correct!';

//    const costumerAddress = document.getElementById('address');
//    const addressErrorMsg = document.getElementById('addressErrorMsg');
//    addressErrorMsg.textContent = 'Veillez entrer votre une addresse correcte!';

//    const costumerCity = document.getElementById('city');
//    const cityErrorMsg = document.getElementById('cityErrorMsg');
//    cityErrorMsg.textContent = 'Veillez entrer votre une ville correcte!';

//    const costumeremail = document.getElementById('email');
//    const emailErrorMsg = document.getElementById('emailErrorMsg');
//    emailErrorMsg.textContent = 'Veillez entrer votre un email correct!';

//    const btnOrder = document.getElementById('order');

//Send informations

//inputQuantity.addEventListener('change', ($event) => {
//    totalItem.textContent = $event.target.value;
//});


/**THIS IS FOR THE FORM
 * THE BUTTON IS ON DEFAULT
 * IT'S GETTING VALUES
 * AND WHEN YOU CLICK THE BUTTON THE FIELDS ARE RESET
 */ 
//btnOrder.addEventListener('click', ($event) => {
//    $event.preventDefault();
//    const post = {
//        name: costumerName.value,
//        lastName: costumerLastName.value,
//        address: costumerAddress.value,
//        city: costumerCity.value,
//        email: costumeremail.value
//    }
//    resetForm.reset();
//});


/**
 * Make a request
 */
//function makeRequest(data) {
//    return new Promise((resolve, reject) => {
//        let request = new XMLHttpRequest();
//        request.open('POST', api + '/create-post');
//        request.onreadystatechange = () => {
//            if (request.readyState == 4) {
//                if (request.status == 201) {
//                    resolve(JSON.parse(request.response))
//                }else {
//                    reject(JSON.parse(request.response));
//                }
//            }
//        };
//        request.setRequestHeader('content-Type', 'application/json');
//        request.send(JSON.stringify(data))
//    })
//}
//}

//async function submitForm(post) {
//    try {
//        const requestPromise = makeRequest(post);
//        const response = await requestPromise;
//        costumerName.textContent = response.firstName;
//        costumerLastName.textContent = response.lastName;
//    } catch (err) {
//        responseMessage.textContent = err.error
//    }
//}
//submitForm();

