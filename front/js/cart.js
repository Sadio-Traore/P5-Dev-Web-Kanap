
//Récupération des produits ajoutés au panier contenus dans le localStorage
let localStorageProduct = JSON.parse(localStorage.getItem('product'));
console.log(localStorageProduct);

//const quantity = document.querySelectorAll('.itemQuantity')
let cartItem;
let itemContent
for(let i of localStorageProduct) {
   cartItem = document.createElement('article');
  cartItem.classList.add("cart__item");
  document.querySelector("#cart__items").append(cartItem);
  
  
  // div Image
  let cartItemImg = document.createElement('div');
  cartItemImg.classList.add("cart__item__img");
  cartItem.append(cartItemImg);
  
  let itemImg  = document.createElement('img');
  itemImg.src = i.productImg;
  itemImg.alt = i.altImg;
  cartItemImg.append(itemImg);
  
  // div description
  itemContent = document.createElement('div')
  itemContent.classList.add("cart__item__content");
  cartItem.append(itemContent);
  
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
cartItem.append(itemSettings);

let itemSettingsQuantity  = document.createElement('div');
itemSettingsQuantity.classList.add("cart__item__content__settings__quantity");
itemSettings.append(itemSettingsQuantity);

// itemSettingsQuantity.innerHTML = " <p> Qté : </p> <input type = 'number' class = 'itemQuantity' min = '1' max = '100' value = ''>";
// let itemQuantity = document.querySelectorAll(".itemQuantity"); //= i.quantity;
// itemQuantity.value = i.quantity;
// //itemQuantity.input = i.quantity;


 // Insertion de "Qté : "
 let productQte = document.createElement("p");
 itemSettingsQuantity.appendChild(productQte);
 productQte.textContent = "Qté : ";

 // Insertion de la quantité
 let itemQuantity = document.createElement("input");
 itemSettingsQuantity.append(itemQuantity);
 itemQuantity.value = i.quantity;
 itemQuantity.classList.add("itemQuantity");
 itemQuantity.setAttribute("type", "number");
 itemQuantity.setAttribute("min", "1");
 itemQuantity.setAttribute("max", "100");
 itemQuantity.setAttribute("name", "itemQuantity");
 //itemQuantity.setAttribute("value", "");


// Div suppression
let itemSettingsDelete = document.createElement('div');
itemSettingsDelete.classList.add("cart__item__content__settings__delete");
cartItem.append(itemSettingsDelete);

let deleteItem = document.createElement('p');
deleteItem.classList.add('deleteItem');
deleteItem.textContent = "Supprimer";
itemSettingsDelete.append(deleteItem);

}

//----------------------------------------------------------------
// Modification de quantité et suppression de produits










//--------------------------------------------------------------
// formulaire

// séléction du bouton envoyer le formulaire
const commander = document.querySelector('#order');
console.log(commander);

// récupération des élément de formulaire pour les ajouter au localStorage

commander.addEventListener('click', (e) => {
  e.preventDefault();



  const donneesFormulaire = {
  
    prenom : document.querySelector('#firstName').value,
    nom : document.querySelector('#lastName').value,
    adresse: document.querySelector('#address').value,
    ville : document.querySelector('#city').value,
    email : document.querySelector('#email').value,
  }
  
  localStorage.setItem('donneesFormulaire',JSON.stringify(donneesFormulaire))
   const envoiFormulaire = {
     localStorageProduct,
     donneesFormulaire
   }

   console.log(envoiFormulaire);


   // Contrôles validation donnés formulaires
   //Contrôle prénom
   const prenom = donneesFormulaire.prenom;
    if(/^[A-Za-z]{3,20}$/.test(prenom)){
  console.log('OK');
}
  else{
    console.log('Veuillez entrer votre prénom');
  }

  //Contrôle nom
   const nom = donneesFormulaire.nom;
    if(/^[A-Za-z]{3,20}$/.test(nom)){
  console.log('OK');
}
  else{
    console.log('Veuillez entrer votre nom');
  }

  //Contôle adresse
   const adresse = donneesFormulaire.adresse;
    if(/^[A-Za-z0-90-]{10,100}$/.test(adresse)){
  console.log('OK');
}
  else{
    console.log('Veuillez entrer votre adresse');
  }

  //Contôle ville
   const ville = donneesFormulaire.ville;
    if(/^[A-Za-z]{3,20}$/.test(ville)){
  console.log('OK');
}
  else{
    alert('Veuillez entrez la ville');
  }
     
//Contrôle email
   const email = donneesFormulaire.email;
    if(/^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(email)){
  ;
}
  else{
    alert('veuillez Entrez une adress mail valide');
  }
     console.log(email);

})







// let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
//     let charRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
//     let addressRegExp = new RegExp("^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");

















// function deleteProduct() {
//   let btn_supprimer = document.querySelectorAll(".deleteItem");

//   for (let j = 0; j < btn_supprimer.length; j++){
//       btn_supprimer[j].addEventListener("click" , (event) => {
//           event.preventDefault();

//           //Selection de l'element à supprimer en fonction de son id ET sa couleur
//           let idDelete = localStorageProduct[j]._id;
//           let colorDelete = localStorageProduct[j].itemColor;

//           localStorageProduct = localStorageProduct.filter( el => el._id !== idDelete || el.itemColor !== colorDelete );
          
//           localStorage.setItem("produit", JSON.stringify(localStorageProduct));

//           //Alerte produit supprimé et refresh
//           alert("Ce produit a bien été supprimé du panier");
//           location.reload();
//       })
//   }
// }
// deleteProduct();




// let garbageButton = document.getElementsByClassName('.deleteItem');
//     for (let l = 0 ; l < garbageButton.length; l++) {
//         garbageButton[i].addEventListener('click' , function (event) { 
//             event.preventDefault();
//             let id = this.closest(itemContent).id;

//             //on supprime l'article du localStorage
//             storedTeddies.splice(id, 1);

//             //on enregistre le nouveau localStorage
//             localStorage.setItem('newArticle', JSON.stringify(localStorageProduct));
//             JSON.parse(localStorage.getItem('newArticle'));

//             alert('Cet article a bien été supprimé !');
//             window.location.href = "panier.html";   
//         }); 
//     };
// console.log(garbageButton)



// let suppressionProduit = document.querySelector('.deleteItem');
// console.log(suppressionProduit.closest(itemContent));




















// let btnSupprimer = document.querySelectorAll('.deleteItem');
// console.log(btnSupprimer);
// //supprimer article
// for (let l = 0; l < btnSupprimer.length; l++){
//   productId = l._id;
//   let idSupprimer = localStorageProduct[l].productId;
//   console.log(idSupprimer)
  
//   localStorageProduct = localStorageProduct.filter(el => el.productId !== idSupprimer)
//   console.log(localStorageProduct);
  
  
//}

