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
//-> BOUTON Envoyer
let sendForm = document.getElementById("sendForm");
//RESULTAT Formulaire
let resultForm = document.getElementById("result-form");
//---------------------------------------------------//
//
if(sendForm){
  
  // Bouton formulaire
  sendForm.addEventListener("click", function(event){
    
    //Empeche le rechargement
    event.preventDefault();

    //----------------------------------------------------------//
    //--- Tableau message erreur
    let error = [];

    if(lastname.value.length <= 2 || lastname.value.length >= 11){
      
      //---------------------------------------//
      //--- AFFICHAGE RESULTAT ERROR
      //
      //-- Ajout dans tableau
      error.push(lastname.value)
      //
      for(key in error) {

        console.log(error[key]);

      //--- Block affichage resultat
      let contentHTML = `
        <div class="result-formulaire">
          <h4 class="red">Erreur dans votre formulaire</h4>
          <p>Votre prénom doit être compris entre 3 et 10 caractères maximum : ${lastname.value}</p>
        <div>
      `;
      //
      //--- Affichage Block resultat
      resultForm.innerHTML = contentHTML;
      //
       };
    }
    //---------------------------------------//
    //--- AFFICHAGE RESULTAT OK
    //
    else{
    //--- Block affichage resultat
    let contentHTML = `
      <div class="result-formulaire">
        <h4 class="green">Vos informations envoyées</h4>
        <p>${lastname.value}</p>
        <p>${firstname.value}</p>
        <p>${birthday.value}</p>
        <p>${courriel.value}</p>
        <p>Merci pour votre participation !</p>
        <p>Nous reviendrons vers vous rapidement</p>
      <div>
    `;
    //--- Affichage Block resultat
    resultForm.innerHTML = contentHTML;
    //
    }
  });
};