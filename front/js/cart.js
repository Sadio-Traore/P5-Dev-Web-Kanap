
//Récupération des produits ajoutés au panier contenus dans le localStorage
let localStorageProduct = JSON.parse(localStorage.getItem('product'));
console.log(localStorageProduct);

for (let i of localStorageProduct){
    // Création balises HTML

//création de l'article
let article = document.createElement('article');
article.classList.add("cart__item");
document.querySelector("#cart__items").append(article);


// div Image
let cartItemImg = document.createElement('div');
cartItemImg.classList.add("cart__item__img");
article.append(cartItemImg);

let itemImg  = document.createElement('img');
itemImg.src = i.productImg;
itemImg.alt = i.altImg;
cartItemImg.append(itemImg);

 // div description
let itemContent = document.createElement('div')
itemContent.classList.add("cart__item__content");
article.append(itemContent);

let itemDescription = document.createElement('div');
itemDescription.classList.add("cart__item__content__titlePrice");
itemContent.append(itemDescription);

 let itemName  = document.createElement('h2');
 itemName.textContent = i.ProductName;
 itemDescription.append(itemName);

 let itemColor  = document.createElement('p');
 itemColor.textContent = i.productColor;
 itemDescription.append(itemColor);
 console.log(itemColor);

 let itemPrice = document.createElement('p');
 itemPrice.textContent = i.price + ' €';
 itemDescription.append(itemPrice);


 // div quantité 
let itemSettings = document.createElement('div');
itemSettings.classList.add("cart__item__content__settings");
article.append(itemSettings);

let itemSettingsQuantity  = document.createElement('div');
itemSettingsQuantity.classList.add("cart__item__content__settings__quantity");
itemSettings.append(itemSettingsQuantity);

let itemQuantity = itemSettingsQuantity.innerHTML = " <p> Qté : </p> <input type = 'number' class = 'itemQuantity' min = '1' max = '100' value = ''>";
document.querySelector(".itemQuantity").value = i.quantity;
itemQuantity.input = i.quantity;


//let itemSettingsP  = itemSettingsQuantity.innerHTML = "<p> Qté : </p>";
// document.createElement('p');
 //itemSettingsP.textContent = "Qté : ";
// itemSettingsQuantity.append(itemSettingsP);

//let itemQuantity  = document.createElement('input');
//itemQuantity.classList.add("itemQuantity");
//temQuantity.innerHTML = `<type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">`;
//itemSettingsQuantity.append(itemQuantity);


// Div suppression
let itemSettingsDelete = document.createElement('div');
itemSettingsDelete.classList.add("cart__item__content__settings__delete");
article.append(itemSettingsDelete);

let deleteItem = document.createElement('p');
deleteItem.textContent = "Supprimer";
itemSettingsDelete.append(deleteItem);

}





























 //for(i > 0 ; i < localStorageProduct.length; i++){
   //   console.log(localStorageProduct.length);
    
 // }

















