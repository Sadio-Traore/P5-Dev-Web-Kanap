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
    
    // Appel de la fonction getProduct 
        getProduct();