//Déclaration des variables
let product ;
let response  ;
let productImg ;
let productName ;
let price ;
let description ;
let productColors
let localStorageProduct

// Récupération de l'ID du produit
const queryString = window.location.search;
const url = new URLSearchParams(queryString);
console.log(url);
const id = url.get("id");
console.log(id);


// Récuperation du produit séléctionné

async function getProduct() {

    try {
        response = await fetch('http://localhost:3000/api/products/' + id);
        console.log(response);
        if (response.ok) {
            product = await response.json();
            console.log(product);
            
            //Insertion de l'image
            productImg = document.createElement("img");
            document.querySelector(".item__img").append(productImg);
            productImg.src = product.imageUrl;
            productImg.alt = product.altTxt;
            
            // Récupération du nom de produit
            productName = document.querySelector('#title');
            productName.textContent = product.name;
            
            // Récupération du prix
            price = document.querySelector('#price');
            price.textContent = product.price;
        
            // Récupération de la description
            description = document.querySelector('#description');
            description.textContent = product.description;

            
          
        // Insertion des options de couleurs
        for (let colors of product.colors){
            productColors = document.createElement("option");
            document.querySelector("#colors").append(productColors);
            productColors.setAttribute("value", "");

            productColors.value = colors;
            productColors.textContent = colors;         
        }

            }   
        }
        catch (error) {
            err = alert("Une erreur est survenue");
        }
       
        
    };
    
// Appel de la fonction getProduct() 
    getProduct();
  
    
//-------------AJOUT PRODUIT AU PANIER----------------

//Sélection du bouton 'Ajouter au panier
const buttonEnvoyer = document.querySelector('#addToCart');
buttonEnvoyer.addEventListener("click", ()=>{
    
    // Appel fonction validationQuantiteCouleur() qui appel la fonction addToCart si tout est bon
    validationQuantiteCouleur()
})



//Récupération des choix de l'utilisateur et envoi du panier
// Création de la fonction de validation de la quantité et de la couleur
async function validationQuantiteCouleur(){
    
    if (colors.value == '' || quantity.value == 0){
        
     alert('Veuillez sélectionner une couleur et/ou choisir une quantité')

     console.log ('erreur')
            
        }
    else {
        addToCart()
    }
    }
    
    
//  Fonction d'ajout du produit au panier
    
async function addToCart () {
    // Récupération de la quantité et de la couleur
    let quantity = document.querySelector('#quantity');
    let colors = document.querySelector('#colors');
    console.log(quantity.value)
    console.log(colors.value)

    // Initialisation du localStorage
    localStorageProduct = JSON.parse(localStorage.getItem('product'));

    
    //création  objet produitCaractéristiques
    const produitCaractéristiques = {
        quantity :+quantity.value,
        productImg : product.imageUrl,
        altImg  : product.alTxt,
        productColor: colors.value,
        productId : product._id,
        price : product.price,
    };

    // Cas où le localStorage est vide
    if (localStorageProduct == null ) {
        
        localStorageProduct = [];
        localStorageProduct.push(produitCaractéristiques);
        console.log(localStorageProduct);

        localStorage.setItem('product', JSON.stringify(localStorageProduct));
    }


    //Cas où le localStorage n'est pas vide
    else if (localStorageProduct != null){
        
        //cas ou le produit est présent ds le Localstorage avec la même couleur
        for (k = 0 ; k < localStorageProduct.length; k++ ){
            
            if(localStorageProduct[k].productId == product._id && localStorageProduct[k].productColor == colors.value
            ){
            // création de la variable contenant la quantité à ajouter
            let ajoutQuantite = parseInt(quantity.value);
            const  newQuantite =+ (localStorageProduct[k].quantity +=  ajoutQuantite)
            return(
                newQuantite ,
                //console.log(newQuantite),
                localStorage.setItem('product', JSON.stringify(localStorageProduct)),
                (localStorageProduct = JSON.parse(localStorage.getItem('product')))
                )
            } 
        }
                    
        // cas où il ya un produit présent dans le localStorage avecle même Id et une couleur différente ou possède un Id différent
        for (k = 0; k < localStorageProduct.length; k++ ){

            if(localStorageProduct[k].productId == product._id && localStorageProduct[k].productColor != colors.value || localStorageProduct._id != product._id 
            ){
            return(
                localStorageProduct.push(produitCaractéristiques),
                localStorage.setItem('product', JSON.stringify(localStorageProduct))//,
                
                )   
            }
        }
    }
} 

