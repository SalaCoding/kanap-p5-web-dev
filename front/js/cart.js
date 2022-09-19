const api = fetch('http://localhost:3000/api/products')

    const resetForm = document.querySelector('.cart__order__form');
    // Set the number of the items
    const inputQuantity = document.querySelector('.itemQuantity');
//    const deleteBtn = document.getElementById('deleteItem');

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
     * Quantity
     */
    inputQuantity.addEventListener('change', ($event) => {
        totalItem.textContent = $event.target.value;
        //const priceProduct = products.price;
        totalOfPrice.textContent = totalItem + totalOfPrice;
        console.log(totalOfPrice);
    })

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

