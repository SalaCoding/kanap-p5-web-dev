const api = 'http://localhost:3000/api/products';

//Get all the DOM necessary


// Set the number of the items
const inputQuantity = document.querySelector('.itemQuantity');
const deleteBtn = document.getElementById('deleteItem');

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

btnOrder.addEventListener('click', ($event) => {
    $event.preventDefault();
    const post = {
        firstName: costumerName.value,
        lastName: costumerLastName.value,
        address: costumerAddress.value,
        email: costumeremail.value
    };
});

function makeRequest(data) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('POST', api + '/create-post');
        request.onreadystatechange = () => {
            if (request.readyState ===4) {
                if (request.status === 201) {
                    resolve(JSON.parse(request.response));
                } else {
                    reject(JSON.parse(request.reponse));
                }
            }
        };
        request.setRequestHeader('Content-Type', 'form/json');
        request.send(JSON.stringify(data));
    });
}