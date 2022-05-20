// récupérer les donées du serveur
const url = 'http://localhost:3000/api/products'

// Récuperation des produits
async function getProducts() {
const requete = await fetch(url, {
  method:'GET',
})

if(!requete.ok){
  alert('une erreur est survenue');
}
else {
  var items = document.getElementsByClassName('.items');

 //stockage de la réponse de l'Api dans la variable items
  items = await requete.json();
<<<<<<< HEAD
 // console.log(items);
=======
  console.log(items);
>>>>>>> 878ac048b1e1b03119dfb72388fc294103950fa5
 // Iteration sur chaque données
  for (const product of items){
   console.log (product);

   // création lien vers chaque produit
  productLink = document.createElement('a');
  document.querySelector('#items').append(productLink);
  productLink.href = './product.html?id=' + product._id;
  id = product._id; 
  console.log(id);

  // cration d'un bloc article pour chaque produit
  const article = document.createElement ('article');
  productLink.append(article);
  
  // création img et attriubut src alt de chaque produit
  const img = document.createElement ('img');
  article.append(img);
  img.src   =product.imageUrl;
  img.alt   = product.alTxt;
  
  // Nom de chaque Produit
  const h3  = document.createElement ('h3');
  article.append(h3);
  h3.classList.add("productName");
  h3.textContent = product.name;
  
  // Description produit
  const p = document.createElement ('p');
  article.append(p);
  p.classList.add("productDescription");
  p.textContent = product.description;

 }
}
}
getProducts();



 




  




