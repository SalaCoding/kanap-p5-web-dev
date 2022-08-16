fetch('http://localhost:3000/api/products')
.then((data) => {
    console.log(data)
    return data.json();
}).then((updateData) =>{
    console.log(updateData);

    //FOR LOOP OF
    for (let products of updateData) {

        let divclass = document.createElement('div');

        let blockSection = document.createElement('section');
        let aHref = document.createElement('a');
        let newArticle = document.createElement('article');
        let newImg = document.createElement('img');
        let nameOfTheProduct = document.createElement('h3');
        let newParagraph = document.createElement('p');

        //
        aHref.setAttribute('href', products._id);
        newImg.setAttribute('src', products.imageUrl);

        nameOfTheProduct.textContent = products.name;
        newParagraph.textContent = products.description;
        
        blockSection.appendChild(aHref);
        blockSection.appendChild(newArticle);
        newArticle.appendChild(newImg);
        newArticle.appendChild(nameOfTheProduct);
        newArticle.appendChild(newParagraph);

        divclass.classList.add('limitedWidthBlock');
        aHref.className = 'a';
        newArticle.className = 'article';
        newImg.className = 'img';
        nameOfTheProduct.classList.add('productName');
        newParagraph.classList.add('productDescription');
        blockSection.classList.add('items');

        //To give our section an id
        blockSection.setAttribute('id', 'items');

        const main = document.querySelector('main');
        main.appendChild(blockSection);
        
        console.log(newImg);
        console.log(nameOfTheProduct);
        console.log(newParagraph);
    
    }
      
}).catch((err) => {
    console.log(err);
});