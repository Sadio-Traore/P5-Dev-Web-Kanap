
//Récupération des produits ajoutés au panier contenus dans le localStorage
let localStorageProduct = JSON.parse(localStorage.getItem('product'));
console.log(localStorageProduct);

//const quantity = document.querySelectorAll('.itemQuantity')
let cartItem;
let itemContent;
let key;
let prix;
//let reducer = (accumulator,currentValue) => accumulator + currentValue
let quantiteItem = [];
console.log(quantiteItem)

let quantiteItemPanier;
let prixItem;
let prixItemPanier;
let reducer = (accumulator,currentValue) => accumulator + currentValue;
let totalPrixItems; //= prixItem.reduce(reducer);
let prixItemsTotalCommande = document.querySelector('#totalPrice');

let quantite = [];
    let quantiteProduitPanier;
    let prixProduitPanier;
let totalQuantite ;//= quantite.reduce(reducer);
    let quantiteTotalCommande = document.querySelector('#totalQuantity');


// création fonction affichageProduitPanier
function affichageProduitPanier(){

  
  for(let i of localStorageProduct) {
    cartItem = document.createElement('article');
    cartItem.classList.add("cart__item");
    document.querySelector("#cart__items").append(cartItem);
    //cartItem.setAttribute('data-id', localStorageProduct[i].productId);
    
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

    // Div suppression
    let itemSettingsDelete = document.createElement('div');
    itemSettingsDelete.classList.add("cart__item__content__settings__delete");
    cartItem.append(itemSettingsDelete);
    
    let deleteItem = document.createElement('p');
    deleteItem.classList.add('deleteItem');
    deleteItem.textContent = "Supprimer";
    itemSettingsDelete.append(deleteItem);
    
  }
}

affichageProduitPanier()
  
  //----------------------------------------------------------------
  //suppression de produit

   // récupération du bouton : supprimer
   let btnSupprimer = document.querySelectorAll(".deleteItem");

   //Création fonction removeItem()
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
    
//-------------------------------------------------
// Calcul des totaux

 let totalItemsQuantite
 let totalItemsPrix

function AffichageTotauxquantitePrix(){

  // Récupération du total des quantités
  let itemQuantity = document.querySelectorAll('.itemQuantity');
  let tableauArticles = itemQuantity.length,
 
  totalItemsQuantite = 0;

  for (let i = 0; i < tableauArticles; ++i) {
      totalItemsQuantite += itemQuantity[i].valueAsNumber;
  }

  let quantiteTotal = document.querySelector('#totalQuantity');
  quantiteTotal.textContent = totalItemsQuantite;
  console.log(totalItemsQuantite);

  // Récupération du prix total
  totalItemsPrix = 0;

  for (let i = 0; i < tableauArticles; ++i) {
      totalItemsPrix += (itemQuantity[i].valueAsNumber * localStorageProduct[i].price);
  }

  let prixTotal = document.querySelector('#totalPrice');
  prixTotal.innerHTML = totalItemsPrix;
  console.log(totalItemsPrix);
}
AffichageTotauxquantitePrix();

// Modifications quantité et prix

let itemQuantity = document.querySelectorAll("input");

function modificationQuantité(){

  for (let k = 0 ; k < localStorageProduct.length; k++ ){
    //	Ecoute du changement de valeur des inputs
    itemQuantity[k].addEventListener('change', () =>{
      //let key = e.target.value
      // console.log(key)
      return(
        //console.log('quantity'),
        // console.log(itemQuantity[k].value),
        localStorageProduct[k].quantity= +itemQuantity[k].value ,
        
          // ajout de la nouvelle quantité au localStorage
          localStorage.setItem("product", JSON.stringify(localStorageProduct)),
         
          console.log(localStorageProduct),
           
          // rappel de la fonction AffichagetotauxQuantitePrix
          AffichageTotauxquantitePrix()
          )
      } 
        
    )}
}
modificationQuantité();
        
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

    let productsId = [];
    for (i = 0 ; i < localStorageProduct.length; i++){
      productsId.push(localStorageProduct[i].productId);
    }

    
    console.log(productsId)
    // Objet order à envoyer au serveur
    const order = {
      contact :{
        firstName,
        lastName,
        address,
        city,
        email
      },
      products:productsId,
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

        .then((response) => response.json())
          //console.log(response.json())
          
        .then((params) => {
          console.log(params)
          //data.get('orderId',data.orderId)
          //récupérer l'Id de la commande et l'ajouter au localStorage 
          localStorage.setItem('orderId', params.orderId)
          //Vider le localStorage
           //localStorage.clear();
           //Redirection vers la page confirmation
           document.location.href = "confirmation.html";
        })
          
        .catch((err) => {
              err = alert ("une erreur s'est produite ");
            }
            )

        }
    envoieFormulaireServeur();
  console.log(envoieFormulaireServeur);
  });


  
