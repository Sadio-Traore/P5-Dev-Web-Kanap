// Récupération de l'ID du produit
const queryString = window.location.search;
const url = new URLSearchParams(queryString);
console.log(url);
const id = url.get("id");
console.log(id);

//Déclaration des variables
let product = "" ;
let response = "" ;
let productImg = "" ;
let productName = "" ;
let price = "" ;
let description = "" ;


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
                  //console.table(colors);
                  let productColors = document.createElement("option");
                  document.querySelector("#colors").append(productColors);
                  productColors.value = colors;
                  productColors.textContent = colors
            
                }
            }   
        }
        catch (error) {
            err = alert("Une erreur est survenue");
        }
         
    }
    
    // Appel de la fonction getProduct() 
    getProduct();
    
    //-------------AJOUT PRODUIT AU PANIER----------------
    //Récupération des choix de l'utilisateur et envoi du panier
    // Récupération id du formulaire
  //  const choixCouleur = document.querySelector('#')// c en article
    //console.log(choixCouleur);

    //---------------------------------------------------------------------------
    function ajoutPanier(){ 
    //Sélection du bouton 'Ajouter au panier
    const buttonEnvoyer = document.querySelector('#addToCart');
    buttonEnvoyer.addEventListener("click", (event)=>{//button.addEventListener('click', (event) => {
        event.preventDefault();

        // mettre choix de l'utilsateur dans une varaiable
        const choixCouleur = colors.value; // couleur productcolors
        
        let quantity = document.querySelector('#quantity');
        let quantiteChoisie = quantity.value;

        //Stocker valeurs récupéres du formulaire dans mons local storage
        let productOptions = {
    productId: id,
    productImg : product.imageUrl,
    altImg  : product.alTxt,
    productColor: choixCouleur,
    quantity: quantiteChoisie,
    ProductName: product.name,
    price: product.price,
    
};
console.log(productOptions)


// Local Storage
// convertir donné JSON présent ds localStorage en JS
let localStorageProduct = JSON.parse(localStorage.getItem('product'));
console.log(localStorageProduct);

// Fonction confirmation ou retour à la page d'accueil
const popupConfirmation = () => {
    if(window.confirm(`Vous avez ajouté ${quantiteChoisie} ${product.name} ${choixCouleur} au panier.
    Pour Consulter le panier, appuyer sur OK et pour revenir à l'acceuil appuyer sur ANNULER`)){
    window.location.href = "cart.html"
}
else{
    window.location.href = "index.html"

}}

//cas ou le produit est présent ds le Localstorage
if(localStorageProduct){
    localStorageProduct.push(productOptions);
    localStorage.setItem("product", JSON.stringify(localStorageProduct));
    console.log(localStorageProduct)
    popupConfirmation();

}
// Si le produit n'est pas déja présent
else{
    localStorageProduct = [];
    // ajout au tableau du contenue se trouvant dans productOtions
    localStorageProduct.push(productOptions);
    // Envoie dans le localStorage
    localStorage.setItem("product", JSON.stringify(localStorageProduct));
    console.log(localStorageProduct);
    popupConfirmation();


      }})}

      ajoutPanier();

      //-----------------------------------------------------------------------------------------------

localStorage.clear(ajoutPanier);

 