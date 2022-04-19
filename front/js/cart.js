
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
//itemImg.src = product.imageUrl;
//itemImg.alt = product.altTxt;
cartItemImg.append(itemImg);


let itemContent = document.createElement('div')
itemContent.classList.add("cart__item__content");
article.append(itemContent);

let itemDescription = document.createElement('div');
itemDescription.classList.add("cart__item__content__description");
itemContent.append(itemDescription);

 let itemName  = document.createElement('h2');
 let itemColor  = document.createElement('p')
 let itemPrice = document.createElement('p')

let itemSettings = document.createElement('div')
let itemSettingsQuantity  = document.createElement('div')
let itemSettingsP  = document.createElement('p')
let itemQuantity  = document.createElement('input')

let itemSettingsDelete = document.createElement('div')
let deleteItem = document.createElement('p')
