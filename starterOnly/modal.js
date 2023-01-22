// Fonction pour menu responsive

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Élements du DOM

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelector(".close")

const form = document.getElementById("form")
const submit = document.querySelector(".btn-submit")
const dataForm = document.querySelectorAll(".formData")
const firstName = document.getElementById("first")
const lastName = document.getElementById("last")
const email = document.getElementById("email")
const date = document.getElementById("date")

/* Évenements formulaire ouverture et fermeture du formulaire */

// Fonction d'ouverture du formulaire
function launchModal() {
  modalbg.style.display = "block";
}
// Fonction de fermeture du formulaire
 function closeMyForm() {
  modalbg.style.display="none";
}
// methode qui appel les fonctions d'ouverture et de fermeture du formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeForm.addEventListener("click", closeMyForm)

/* Recuperation des données du formulaire et regex */



