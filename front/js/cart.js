
//Récupération des produits ajoutés au panier contenus dans le localStorage
let localStorageProduct = JSON.parse(localStorage.getItem('product'));
console.log(localStorageProduct);

let cartItem;
let itemContent;
let prix;


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

            // Création d'un nouveau tableau ne contenant que les produits dont l'id et la couleur sont différents de ceux du prouits séléctionné
            localStorageProduct = localStorageProduct.filter(product => product.productId !== deleteProduct || product.productColor !== deleteColor )//el => el.productId !== deleteProduct || el.productColor !== deleteColor );
            
            //Envoie du nouveau tableau au localStorage
            localStorage.setItem("product", JSON.stringify(localStorageProduct));

            // Alerte
            alert("Ce produit a été supprimé du panier");

            //réactualisation de la page
            location.reload();
        })
    }
  };
    removeItem();
    
//-------------------------------------------------
// Calcul des totaux et affichage

 let totalItemsQuantite
 let totalItemsPrix

function affichageTotauxQuantitePrix(){

  // Récupération de la quantité Total d'articles

  let itemQuantity = document.querySelectorAll('.itemQuantity');
  //Nombre d'article différent dans le panier
  let nombreArticles = itemQuantity.length
  //console.log(nombreArticles);

  //Initialisation de la quantité totale à 0
  totalItemsQuantite = 0;

  //Itération sur chauqe article différent du panier
  for (let i = 0; i < nombreArticles; ++i) {
      // Calcul de la somme des quantité de chauqe article du panier
      totalItemsQuantite += (+itemQuantity[i].value);
   }

  // Affichage de la quantité totale
  let quantiteTotal = document.querySelector('#totalQuantity');
  quantiteTotal.textContent = totalItemsQuantite;
  console.log(totalItemsQuantite);

  //Ajout au local Storage
  localStorage.setItem('quantitéTotal', totalItemsQuantite);


  // Récupération du prix total

  //Initialsatin du prix total à 0
  totalItemsPrix = 0;

  //Itération sur chauqe article différent du panier
  for (let i = 0; i < nombreArticles; ++i) {
      //Calcul de la somme de tout les prix en fonction de la quantité de chaque article et leur prix respectifs
      totalItemsPrix += (+itemQuantity[i].value * localStorageProduct[i].price);
  }

  //Affichage du prix total
  let prixTotal = document.querySelector('#totalPrice');
  prixTotal.textContent = totalItemsPrix;
  console.log(totalItemsPrix);

  //Ajout du rpix au session storage
  sessionStorage.setItem('prixTotal', totalItemsPrix);
}

// Appel de la fonction AffichageTotauxQuantitePrix
affichageTotauxQuantitePrix();

// Modifications quantité et prix

let itemQuantity = document.querySelectorAll("input");

function modificationQuantité(){

  for (let k = 0 ; k < localStorageProduct.length; k++ ){

    //	Ecoute du changement de valeur des inputs
    itemQuantity[k].addEventListener('change', () =>{
      //let key = e.target.value
      // console.log(key)
      return(
          //valeur de la nouvelle quantité
          localStorageProduct[k].quantity= +itemQuantity[k].value ,
        
          // ajout de la nouvelle quantité au localStorage
          localStorage.setItem("product", JSON.stringify(localStorageProduct)),
         
          console.log(localStorageProduct),
           
          // rappel de la fonction AffichagetotauxQuantitePrix
          affichageTotauxQuantitePrix()
        )
    })
  }
}
modificationQuantité();
        
//--------------------------------------------------------------
  
  // FORMULAIRE

  
  // séléction du bouton envoyer le formulaire
  const commander = document.querySelector('#order');
  console.log(commander);
  let form = document.querySelector('form');

  // fonction validation des données renseignées dans le formulaire
function validationDonneesFormulaire(){
  
  // Objet contact contenant les données utilisateur
  const contact = {
    firstName : document.querySelector('#firstName').value,
    lastName : document.querySelector('#lastName').value,
    address: document.querySelector('#address').value,
    city : document.querySelector('#city').value,
    email : document.querySelector('#email').value,
  }

  // Contrôles validation donnés formulaires

  let complet = true;

  //Contrôle prénom
  const firstName = contact.firstName;

  if (/^[A-Za-z]{3,20}$/.test(firstName)){     
    console.log(firstName);
  }
  else if(form.firstName.value == "" || form.firstName.value == null || !firstName.valid){
    alert('Veuillez renseigner votre prénom');
    complet=false;
  }
      
  //Contrôle nom
  const lastName = contact.lastName;

  if(/^[A-Za-z-éàùçè]{3,20}$/.test(lastName)){
    console.log(lastName);
  }
  else if(form.lastName.value == "" || form.lastName.value == null || !lastName.valid){
    alert('Veuillez renseigner votre nom');
    complet=false;
  }

  //Contôle adresse
  const address = contact.address;

  if(/^[A-Za-z0-9-éèàçù,\s]{5,50}$/.test(address)){
    console.log(address);
  }
  else if(form.address.value == "" || form.address.value == null || !address.valid) {
    alert('Veuillez renseigner votre adresse');
    complet=false;
  }
  
  //Contôle ville
  const city = contact.city;

  if(/^[A-Za-z-.]{3,20}$/.test(city)){
      console.log(city);
  }
  else if(form.city.value == "" || form.city.value == null || !city.valid) {
    alert('Veuillez renseigner votre ville');
    complet=false;
  }
    
  //Contrôle email
  const email = contact.email;

  if(/^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(email)){
      console.log(email);
  }
  else if(form.email.value == "" || form.email.value == null || !email.valid) {
    alert('Veuillez renseigner correctement votre email');
    complet=false;
  }
        
  if(complet){form.submit();
    // appel de la fonction envooieFormulaireServeur()
    envoieFormulaireServeur();
    //Ajout au localStorage des données formulaire 
    localStorage.setItem('donneesFormulaire',JSON.stringify(contact))
  }
  else{
    return(
      !form.submit(),
      alert('Veuillez renseigner correctement le formulaire')
    ) 
  }
  }
 
  //function envoieFormulaireServeur
  async function envoieFormulaireServeur(){
  // initialisation du tableau productId depuis le localStorage
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
    products: productsId,
  }
  
  console.log(order);

  // requête fetch 
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
    //récupérer l'Id de la commande et l'ajouter au sessionStorage 
    sessionStorage.setItem('orderId', params.orderId)
    //Vider le localStorage
    localStorage.clear();
    //Redirection vers la page confirmation
    document.location.href = "confirmation.html";
  })

  .catch((err) => {
    err = alert ("une erreur s'est produite ");
      }
      ) 
  }


// Appel de la fonction de validation du formulaire au 'clik" sur le bouton commander
commander.addEventListener('click', (e) => {
  e.preventDefault();

// Appel de la fonction de validation du formulaire
validationDonneesFormulaire()
  }) 
