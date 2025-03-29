//------------------------------------------------------------------------//
                            // HOME PAGE //
//------------------------------------------------------------------------//
//
//------------------------------CAROUSEL----------------------------------//
// BOUTONS
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
//BUTTON DROITE
btnright.addEventListener("click", function() {

  images[index].style.display = "none";
  index = (index + 1) % images.length;
  images[index].style.display = "block";
});
//-----------------------------------------------//
//BUTTON GAUCHE
btnleft.addEventListener("click", function() {
  images[index].style.display = "none";
  index = (index - 1 + images.length) % images.length;
  images[index].style.display = "block";
});
//------------------------------------------------------------------------//