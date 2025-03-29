//------------------------------------------------------------------------//
                            // HOME PAGE //
//------------------------------------------------------------------------//
//
//------------------------------CAROUSEL----------------------------------//
// BOUTONS CAROUSEL
let btnleft = document.querySelector(".cta-left");
let btnright = document.querySelector(".cta-right");
//SELECTION DE TOUTES LES IMAGES
let images = document.querySelectorAll(".carousel img");
let index = 0;
//-----------------------------------------------//
// BOUCLE POUR METTRE TOUTES LES IMAGES
for (let i = 0; i < images.length; i++) {
  images[i].style.display = "none";
}
//-----------------------------------------------//
// AFFICHAGE DE LA 1ER IMAGE
images[index].style.display = "block";
//-----------------------------------------------//
//BOUTON DROITE
btnright.addEventListener("click", function() {

  images[index].style.display = "none";
  index = (index + 1) % images.length;
  images[index].style.display = "block";
});
//-----------------------------------------------//
//BOUTON GAUCHE
btnleft.addEventListener("click", function() {
  images[index].style.display = "none";
  index = (index - 1 + images.length) % images.length;
  images[index].style.display = "block";
});
//------------------------------------------------------------------------//
//------------- FORMULAIRE --------------//
// SELECTEURS Formulaire
let lastname = document.getElementById("nom");
let firstname = document.getElementById("prenom");
let birthday = document.getElementById("date");
let courriel = document.getElementById("email");
// BOUTON Envoyer
let sendForm = document.getElementById("sendForm");
//---------------------------------------------------//
