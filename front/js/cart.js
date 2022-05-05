
//Récupération des produits ajoutés au panier contenus dans le localStorage
let localStorageProduct = JSON.parse(localStorage.getItem('product'));
console.log(localStorageProduct);

//const quantity = document.querySelectorAll('.itemQuantity')
let cartItem;
let itemContent;
let key;


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

 // Insertion de "Qté : "
 let quantityP = document.createElement("p");
 itemSettingsQuantity.append(quantityP);
 quantityP.textContent = "Qté : ";

 // Insertion de la quantité
 let itemQuantity = document.createElement("input");
 itemSettingsQuantity.append(itemQuantity);
 itemQuantity.value = i.quantity  ;
 itemQuantity.classList.add("itemQuantity");
 itemQuantity.setAttribute("type", "number");
 itemQuantity.setAttribute("min", "1");
 itemQuantity.setAttribute("max", "100");
 itemQuantity.setAttribute("name", "itemQuantity");
 itemQuantity.setAttribute("value", "");
// Modification de la quantité dans le panier
 itemQuantity.addEventListener("change", function(e) {
  //console.log(e.target.value);

   key= itemQuantity.value;
   i.quantity = key
   console.log(i.quantity)
  localStorage.setItem('key',key);
});



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
//suppression de produit

   // récupération du bouton : supprimer
   let btnSupprimer = document.querySelectorAll(".deleteItem");
   function removeItem() {

    for (let i = 0; i < btnSupprimer.length; i++){
      btnSupprimer[i].addEventListener("click" , (e) => {
        e.preventDefault();
      
      //Selection du produit à supprimer en fonction de son id et de sa couleur
            let deleteProduct = localStorageProduct[i].productId;
            let deleteColor = localStorageProduct[i].productColor;
            
            localStorageProduct = localStorageProduct.filter( el => el.productId !== deleteProduct || el.productColor !== deleteColor );
            
            localStorage.setItem("product", JSON.stringify(localStorageProduct));

            
            alert("Ce produit a été supprimé du panier");
            //réactualisation de la page
            location.reload();
        })
    }
  };
    removeItem();
    
//---------------------------------------------------
//Mise à jour des totaux
// qantité total
let itemQuantity = document.querySelector('input');

var sommeItem = (itemQuantity.length);
let totalItem ;

    for (var i = 0; i < totalItem; ++i) {
        sommeItem += totalItem[i].value;
    }
 let quantitéTotal = document.querySelector('#totalQuantity');
 //const totalItem = itemQuantity.length;
quantitéTotal.textContent = sommeItem;
console.log('totalItem');


//--------------------



//Montant total du panier
let prixTotal = [];
//let quantityTotal = +localStorageProduct.quantity;
  // séléction des prix
  
  for(let p = 0; p < localStorageProduct.length; p++){
    
    let prixProduitPanier = (localStorageProduct[p].price)*(itemQuantity.value)
    
    // ajout des prix au tableau: prixTotal
    prixTotal.push(prixProduitPanier)
    console.log(prixTotal)
  }
  
//Addition des prix présent dans le tableau 
const reducer = (accumulator,currentValue) => accumulator + currentValue
const total = prixTotal.reduce(reducer);
console.log(total);

// Affichage du prix total

let prixTotalCommande = document.querySelector('#totalPrice');
prixTotalCommande.textContent = total 
//--------------------------------------------------------------

// FORMULAIRE

// séléction du bouton envoyer le formulaire
  const commander = document.querySelector('#order');
  console.log(commander);

  // récupération des élément de formulaire pour les ajouter au localStorage

  commander.addEventListener('click', (e) => {
    e.preventDefault();

    //Objet contact contenant les données utilisateur
    const contact = {
      firstName : document.querySelector('#firstName').value,
      lastName : document.querySelector('#lastName').value,
      address: document.querySelector('#address').value,
      city : document.querySelector('#city').value,
      email : document.querySelector('#email').value,
    }
    

    // Contrôles validation donnés formulaires
    //Contrôle prénom
    const firstName = contact.firstName;
      if(/^[A-Za-z]{3,20}$/.test(firstName)){
      console.log(firstName);
    }
    else{
      console.log('Veuillez entrer votre prénom');
    }

    //Contrôle nom
    const lastName = contact.lastName;
      if(/^[A-Za-z-éàùçè]{3,20}$/.test(lastName)){
      console.log(lastName);
    }
    else{
      console.log('Veuillez entrer votre nom');
    }

    //Contôle adresse
    const address = contact.address;
      if(/^[A-Za-z0-9-éèàçù,\s]{5,50}$/.test(address)){
      console.log(address);
    }
    else{
      console.log('Veuillez entrer votre adresse');
    }

    //Contôle ville
    const city = contact.city;
      if(/^[A-Za-z-.]{3,20}$/.test(city)){
      console.log(city);
    }
    else{
      alert('Veuillez entrez la ville');
    }
      
  //Contrôle email
    const email = contact.email;
      if(/^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(email)){
    console.log(email);
    }
    else{
      alert('veuillez Entrez une adresse mail valide');
    }
      console.log(email);
      
    //Ajout au localStorage des données formulaire 
    localStorage.setItem('donneesFormulaire',JSON.stringify(contact))

  //Construction d'un array products depuis le local storage pour récupérer les ID produits a envoyer

    let products = [];
    for (i = 0 ; i < localStorageProduct.length; i++){
      let productsId = localStorageProduct[i].productId;
      products.push(productsId);
    }
    
    // Objet order à envoyer au serveur
    const order = {
      contact :{
        firstName,
        lastName,
        address,
        city,
        email
      },
      products
    }

    console.log(order);

  //Envoie du formulaire au serveur

    async function envoieFormulaireServeur(){
    //let response;
    
        await fetch("http://localhost:3000/api/products/order", {
          method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Accept': 'application/json', 
                "Content-Type": "application/json" 
            }
        })

        .then((response) =>{  response.json()

          console.log(response)
          
          //récupérer l'Id de la commande dans le localStorage
          localStorage.setItem("orderId", response.orderId);
           // //Vider le localStorage
            // localStorage.clear();
          // //Redirection vers la page confirmation
            //document.location.href = "confirmation.html";
          })

        .catch((err) => {
              err = alert ("une erreur s'est produite ");
            }
            )

        }
    envoieFormulaireServeur();
  console.log(envoieFormulaireServeur);
  });


  
