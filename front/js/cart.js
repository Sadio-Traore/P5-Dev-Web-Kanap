
//Récupération des produits ajoutés au panier contenus dans le localStorage
let localStorageProduct = JSON.parse(localStorage.getItem('product'));
console.log(localStorageProduct);

let article = document.createElement('article');
article.classList.add("cart__item");
document.querySelector("#cart__items").append(article);


let cartItemImg = document.createElement('div');
cartItemImg.classList.add("cart__item__img");
article.append(cartItemImg);

let itemImg  = document.createElement('img');
//itemImg.tagName.add('img');
//itemImg.src = product.imageUrl;
//itemImg.alt = product.altTxt;
cartItemImg.append(itemImg);


let itemContent = document.createElement('div')
itemContent.classList.add("cart__item__content");
article.append(itemContent);

let itemDescription = document.createElement('div');
itemDescription.classList.add("cart__item__content__titlePrice");
itemContent.append(itemDescription);

 let itemName  = document.createElement('h2');
 itemDescription.append(itemName);

 let itemColor  = document.createElement('p');
 itemDescription.append(itemColor);

 let itemPrice = document.createElement('p');
 itemDescription.append(itemPrice);


let itemSettings = document.createElement('div');
itemSettings.classList.add("cart__item__content__settings");
article.append(itemSettings);

let itemSettingsQuantity  = document.createElement('div');
itemSettingsQuantity.classList.add("cart__item__content__settings__quantity");
itemSettings.append(itemSettingsQuantity);

let itemSettingsP  = document.createElement('p');
itemSettingsQuantity.append(itemSettingsP);

let itemQuantity  = document.createElement('input');
itemSettingsQuantity.append(itemQuantity);


let itemSettingsDelete = document.createElement('div');
itemSettingsDelete.classList.add("cart__item__content__settings__delete");
article.append(itemSettingsDelete);

let deleteItem = document.createElement('p');
itemSettingsDelete.append(deleteItem);

