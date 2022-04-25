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
        addToCart(product);
    };
    
    // Appel de la fonction getProduct() 
    getProduct();
    
    
    
    //-------------AJOUT PRODUIT AU PANIER----------------
    //Récupération des choix de l'utilisateur et envoi du panier
  
    //---------------------------------------------------------------------------
    const addToCart = () => {
    //Sélection du bouton 'Ajouter au panier
        const buttonEnvoyer = document.querySelector('#addToCart');

        buttonEnvoyer.addEventListener("click", ()=>{
        //event.preventDefault();

        // Récupération de la quantité
        let quantity = document.querySelector('#quantity');


         let localStorageProduct = JSON.parse(localStorage.getItem('product'));
        
         let colors = document.querySelector('#colors');
        

       //création d'un nouvel objet
            const produitCaractéristiques = Object.assign({},product,{
                quantity :`${quantity.value}`,
                productImg : product.imageUrl,
                altImg  : product.alTxt,
                productColor: `${colors.value}`,
            });

//      })
//}
if (localStorageProduct == null) {
    localStorageProduct = [];
    localStorageProduct.push(produitCaractéristiques);
    console.log(localStorageProduct);

    localStorage.setItem('product', JSON.stringify(localStorageProduct));
    
}


//     //cas ou le produit est présent ds le Localstorage
else if(localStorageProduct !== null){
    for (k = 0 ; k < localStorageProduct.length;k++ ){
        if(
           localStorageProduct[k]._id == product._id && 
           localStorageProduct[k].productColor == colors.value
           ){
           return(
               localStorageProduct[k].quantity++,
               console.log(quantity++),

               localStorage.setItem('product', JSON.stringify(localStorageProduct)),
               console.log(localStorageProduct),
               (localStorageProduct = JSON.parse(localStorage.getItem('product')))
               )
            } 
            
            
        } 
        for (k = 0; k < localStorageProduct.length; k++ ){
            if(localStorageProduct[k]._id == product._id &&
               localStorageProduct[k].productColor != colors.value ||
               localStorageProduct._id != product._id ){
                
                return(
                    localStorageProduct.push(localStorageProduct.push(produitCaractéristiques),
                    localStorage.setItem('product', JSON.stringify(localStorageProduct)),
                    localStorageProduct = JSON.parse(localStorage.getItem("product"))
                    
                    )   
                );
               }
        }
    }
    
    
    return(localStorageProduct = JSON.parse(localStorage.getItem('product')));
}    
        )
//-----------------------------------------------------------------------------------------------

localStorage.clear(addToCart);


}





// Local Storage
// convertir donné JSON présent ds localStorage en JS
        // let localStorageProduct = JSON.parse(localStorage.getItem('product'));
        // console.log(localStorageProduct);

        // // Fonction confirmation ou retour à la page d'accueil
        // const popupConfirmation = () => {
        //     if(window.confirm(`Vous avez ajouté ${quantity.value} ${product.name} ${colors.value} au panier.
        //     Pour Consulter le panier, appuyer sur OK et pour revenir à l'acceuil appuyer sur ANNULER`)){
        //         window.location.href = "cart.html"
        // }
        // else{
        //     window.location.href = "index.html"

        // }}





       // let color = document.querySelector('#colors');
//let couleurChoisie = colors.value;
        //Stocker valeurs récupéres du formulaire dans mons local storage
    //     let produitCaractéristiques = {
    //     productId: id,
    //     productImg : product.imageUrl,
    //     altImg  : product.alTxt,
    //     productColor: color.value,
    //     quantity: Number(quantity.value),
    //     ProductName: product.name,
    //     price: product.price,
        
    //  };
    // console.log(produitCaractéristiques)