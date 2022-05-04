
//Récupération des produits ajoutés au panier contenus dans le localStorage
let localStorageProduct = JSON.parse(localStorage.getItem('product'));
console.log(localStorageProduct);

//const quantity = document.querySelectorAll('.itemQuantity')
let cartItem;
let itemContent;


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
 itemQuantity.value = i.quantity;
 itemQuantity.classList.add("itemQuantity");
 itemQuantity.setAttribute("type", "number");
 itemQuantity.setAttribute("min", "1");
 itemQuantity.setAttribute("max", "100");
 itemQuantity.setAttribute("name", "itemQuantity");
 itemQuantity.setAttribute("value", "");
 
 // Modification de la quantité dans le panier
 itemQuantity.addEventListener("change", function(e) {
  console.log(e.target.value)
})
 

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



  const contact = {
  
    prenom : document.querySelector('#firstName').value,
    nom : document.querySelector('#lastName').value,
    adresse: document.querySelector('#address').value,
    ville : document.querySelector('#city').value,
    email : document.querySelector('#email').value,
  }
  

    //Construction d'un array depuis le local storage
    let idProducts = [];
    for (let i = 0; i<localStorageProduct.length;i++) {
        idProducts.push(localStorageProduct[i].productId);
    }
    console.log(idProducts);










            // localStorage.setItem('donneesFormulaire',JSON.stringify(donneesFormulaire))
            //***** */
            // Contrôles validation donnés formulaires
            //Contrôle prénom
            const prenom = contact.prenom;
              if(/^[A-Za-z]{3,20}$/.test(prenom)){
            console.log(prenom);
          }
            else{
              console.log('Veuillez entrer votre prénom');
            }

            //Contrôle nom
            const nom = contact.nom;
              if(/^[A-Za-z]{3,20}$/.test(nom)){
            console.log(nom);
          }
            else{
              console.log('Veuillez entrer votre nom');
            }

            //Contôle adresse
            const adresse = contact.adresse;
              if(/^[A-Za-z0-9-,]$/.test(adresse)){
            console.log(adresse);
          }
            else{
              console.log('Veuillez entrer votre adresse');
            }

            //Contôle ville
            const ville = contact.ville;
              if(/^[A-Za-z]{3,20}$/.test(ville)){
            console.log(ville);
          }
            else{
              alert('Veuillez entrez la ville');
            }
              
          //Contrôle email
            const email = contact.email;
              if(/^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(email)){
            ;
          }
            else{
              alert('veuillez Entrez une adresse mail valide');
            }
              console.log(email);
              
              localStorage.setItem('donneesFormulaire',JSON.stringify(contact))
            const order = {
              contact : {
                firstName : prenom,
                Name : nom,
                adress : adresse,
                city : ville,
                email :email,
              },
              localStorageProduct : idProducts
              

            }

            console.log(order);
              
              
              
              // // envoie au serveur
              // const url = 'http://localhost:3000/api/products/order'
              // async function envoiServeur(order) {
              //   const requete = await fetch(url, {
              //     method: 'POST',
              //     headers: {
                    
              //   'Accept': 'application/json', 
              //       'Content-Type': 'application/json'
              //     },
              //     body:
              //      JSON.stringify(order)
                  
              //   });
                
              //   if(!requete.ok) {
              //     alert('Un problème est survenu.');
              //   }
              //   else {
              //     const donnees = await requete.json();
              //     console.log(donnees);
              //   }
              // }
              
              // envoiServeur();

            //   const options = {
            //     method: 'POST',
            //     body: JSON.stringify(order),
            //     headers: {
            //         'Accept': 'application/json', 
            //         "Content-Type": "application/json" 
            //     },
            // };
    
            // fetch("http://localhost:3000/api/products/order", options)
            // .then((response) => response.json())
            // .then((data) => {
            //     console.log(data);
            //     localStorage.clear();
            //     localStorage.setItem("orderId", data.orderId);
    
            //     document.location.href = "confirmation.html";
            // })
            // .catch((err) => {
            //     alert ("Problème avec fetch : " + err.message);
            // });
            // //})

          })

  


