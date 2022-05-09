
 //on récupère l'orderId
 let orderId = localStorage.getItem('orderId');
 console.log(orderId);

// // Affichage de l'orderId
let numeroCommande = document.querySelector('#orderId');
numeroCommande.textContent = orderId

