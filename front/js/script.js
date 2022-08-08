fetch('http://localhost:3000/api/products')
.then((data) => {
    console.log(data)
    return data.json();
}).then((updateData) =>{
    console.log(updateData);

    //FOR LOOP OF
    for (let products of updateData) {
        
    //Creating Elements
    let newArticle = document.createElement('article');
    let newImg = document.createElement('img');

    let newHeading = document.createElement('h3');
    let newParagraph = document.createElement('p');

    //Modify the DOM
    newHeading.textContent = products.name;
    newParagraph.textContent = products.description;
    
    //Insert the modification at the end
    
    newArticle.appendChild(newHeading);
    newArticle.appendChild(newParagraph);
    
    //Add the class
    newHeading.classList.add('productName');
    newParagraph.classList.add('productDescription');

    //Insert in the sreen
    
    const main = document.querySelector('main');
    main.appendChild(newArticle);

    /*
    **
    I AM TRYING TO DISPLAY IMAGES WITH THIS CODES
    *
    let newImg = document.createElement('img');

    let newSrc = document.createElement('src');
    let newAlt = document.createElement('alt');
    newSrc.textContent = products.imageUrl;
    newAlt.textContent = 'alt';
    newImg.appendChild(newSrc);
    const article = document.querySelector('article');
    article.appendChild(newImg);
    console.log(newImg)
    *
    **
    */

      }
      
}).catch((err) => {
    console.log(err);
});