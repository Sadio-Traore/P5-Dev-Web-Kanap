
//on récupère l'orderId dans le session Storage
let orderId = sessionStorage.getItem('orderId');
console.log(orderId);

// Affichage de l'orderId
let numeroCommande = document.querySelector('#orderId');
numeroCommande.textContent = orderId

