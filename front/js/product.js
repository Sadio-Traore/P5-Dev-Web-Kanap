//const url = 'http://localhost:3000/api/products'
//console.log(url);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
console.log(id);


console.log(queryString);
console.log(urlParams);





// const getArticle = async function() {
//     // récupération des données du teddy sélectionné par son id
//    try {
//        let response = await fetch('http://localhost:3000/api/teddies/' + id);
//        if (response.ok) {
//            let article = await response.json();
//            console.log(article);


//             //Insertion de l'image
//           let articleImg = document.createElement("img");
//           document.querySelector(".item__img").appendChild(articleImg);
//           articleImg.src = article.imageUrl;
//           articleImg.alt = article.altTxt;
          
//           // Modification du titre "h1"
//           let articleName = document.querySelector('#title');
//           articleName.textContent = article.name;
          
//           // Modification du prix
//           let price = document.querySelector('#price');
//           price.textContent = article.price;
      
//           // Modification de la description
//           let description = document.querySelector('#description');
//           description.textContent = article.description;
      
//           // Insertion des options de couleurs
//           for (let colors of article.colors){
//               //console.table(colors);
//               let articleColors = document.createElement("option");
//               document.querySelector("#colors").append(articleColors);
//               articleColors.value = colors;
//               articleColors.textContent = colors;
//           }

//        }}
//        catch(err) {
//                            err = alert("Une erreur est survenue");
//                     }
//     }

















//  var str = window.location.href;
// console.log(str);
//  var url = new URL(str);
//   console.log(url);
// var articleId = url.searchParams.get("id");
// console.log(articleId);
// let article;

//let article = "";

//console.log(str);

























// Récupération des articles de l'API
//    function getArticle() {

//       fetch("http://localhost:3000/api/products/ " + articleId)

//               .then(function(res) {
//                   if(res.ok){
//                   return response.json();
//                   }
//               })
      
//               //Répartition des données de l'API dans le DOM
//               .then(async function (response) {
//                   article = await response;
//                   console.log(article);
//                   if (article){
//                           article(article);
//                   }
//               })
//               .catch(function(err) {
//                   err = alert("Une erreur est survenue");
//               })  
              
//       }
//       getArticle();
      
//       function article(article){
//           // Insertion de l'image
//           let articleImg = document.createElement("img");
//           document.querySelector(".item__img").appendChild(articleImg);
//           articleImg.src = article.imageUrl;
//           articleImg.alt = article.altTxt;
          
//           // Modification du titre "h1"
//           let articleName = document.querySelector('#title');
//           articleName.textContent = article.name;
          
//           // Modification du prix
//           let price = document.querySelector('#price');
//           price.textContent = article.price;
      
//           // Modification de la description
//           let description = document.querySelector('#description');
//           description.textContent = article.description;
      
//           // Insertion des options de couleurs
//           for (let colors of article.colors){
//               //console.table(colors);
//               let articleColors = document.createElement("option");
//               document.querySelector("#colors").append(articleColors);
//               articleColors.value = colors;
//               articleColors.textContent = colors;
//           }
//           //addToCart(article);
//       }

// article();



















    





















// var str = window.location.href;
// var url = new URL(str);
// var id = url.searchParams.get("id");
// console.log(url.searchParams.get(id));

// // // Récuperation des produits
// // async function getProduct() {
// // const requete = await fetch('http://localhost:3000/api/products',
// //  {
// //   method:'GET',
  
  
// // })}
// // for (const product of items) {

// //     console.log();
// // }

// // if(!requete.ok){
//     //    alert('une erreur est survenue');
//     // }
//     //else {
//         // console.log(id);}


// // console.log("window Location:", window.location);
// // const productId = window.location.search;
// // console.log(productId);

// // const urlParams = new URLSearchParams(productId);

// // const param = urlParams.get('productId');
// // console.log('productId', param);

// // récupérer les donées du serveur
// // const url = 'http://localhost:3000/api/products';

  
// // //  // console.log(donnees);
// // //  // Iteration sur chaque données
// // //  for (const product of ){
// // //    console.log (product
// // //  }
// // // }
// // }
// // //}

// const axiosInstancePost = axios.create({
//     headers: {
//       'Content-Type': 'x-wwww-form-urlencoded'
//     }
//     // baseURL (PERMET DE donnes un nom de base):'https://lesoublisdelinfo.com/api.php' et c'est ce qu'on marquerait a la plce de l'url ds axios intsance 
//   });
  
//   axiosInstancePost.post(url, new URLSearchParams ( {
//     prenom: 'steve'
//   }))
//     .then(function(donnees){
//       console.log(donnees);
//     })
//   .catch(function(erreur){
//     console.log(erreur);
//   })
  


// getProduct();
// let items = document.queryString('items');

// let article;
// article= document.queryString('article');


// let img;
// img = document.createElement('img');

// document.queryString('.item_img').append(img);


// let price;
// price = document.queryString('#price');
// price.textContent = product.price;

// let description;
// description = document.queryString('#description');
// description.textContent = product.description;



// let option;
// option = document.createElement('option');
// document.queryString('#colors').append(option);
