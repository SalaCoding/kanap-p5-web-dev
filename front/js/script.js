fetch('http://localhost:3000/api/products')
.then(data => {
    console.log(data)
    return data.json();
}).then(update =>{
    console.log(update);

    //FOR LOOP OF
    for (let products of update) {
        
        let aHref = document.createElement('a');
        let newArticle = document.createElement('article');
        let newImg = document.createElement('img');
        let nameOfTheProduct = document.createElement('h3');
        let newParagraph = document.createElement('p');

        //Links
        aHref.setAttribute('href', `./product.html?id=${products._id}`);
        
        //aHref.setAttribute('href', products._id);
        newImg.setAttribute('src', products.imageUrl);
        nameOfTheProduct.textContent = products.name;
        newParagraph.textContent = products.description;
        
        //aHref.textContent = aHref;
        aHref.appendChild(newArticle);
        newArticle.appendChild(newImg);
        newArticle.appendChild(nameOfTheProduct);
        newArticle.appendChild(newParagraph);

        const ItemSection = document.getElementById('items');
        ItemSection.appendChild(aHref);
        
    }
      
}).catch((err) => {
    console.log(err);
});