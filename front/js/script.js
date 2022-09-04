fetch('http://localhost:3000/api/products')
.then((data) => {
    console.log(data)
    return data.json();
}).then((updateData) =>{
    console.log(updateData);

    //FOR LOOP OF
    for (let products of updateData) {
        
        //let blockSection = document.querySelector('section');
        let aHref = document.querySelector('a');
        let newArticle = document.createElement('article');
        let newImg = document.createElement('img');
        let nameOfTheProduct = document.createElement('h3');
        let newParagraph = document.createElement('p');

        //
        aHref.setAttribute('href', `./product.html?id=${products._id}`);
        newImg.setAttribute('src', products.imageUrl);
        nameOfTheProduct.textContent = products.name;
        newParagraph.textContent = products.description;
        
        aHref.textContent = aHref;
        aHref.appendChild(newArticle);
        newArticle.appendChild(newImg);
        newArticle.appendChild(nameOfTheProduct);
        newArticle.appendChild(newParagraph);

        nameOfTheProduct.classList.add('productName');
        newParagraph.classList.add('productDescription');
        newArticle.classList.add('article');

        //To give our section an id
        //blockSection.setAttribute('id', 'items');

        const section = document.querySelector('section');
        section.appendChild(aHref);
        
    }
      
}).catch((err) => {
    console.log(err);
});