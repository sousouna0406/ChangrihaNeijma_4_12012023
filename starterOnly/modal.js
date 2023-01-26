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
const nameError = document.getElementById("NameErrorMsg")
const nameErrorlast = document.getElementById("NameErrorMsglast")
const msgErrorEmail = document.getElementById("emailErrorMsg")

const btnValid = document.querySelector(".btn-submit")
/* Évenements formulaire ouverture et fermeture */

// Fonction d'ouverture du formulaire
function launchModal() {
  modalbg.style.display = "block";
}
// Fonction de fermeture du formulaire
 function closeMyForm() {
  modalbg.style.display="none";
}
// Methode qui appel les fonctions d'ouverture et de fermeture du formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeForm.addEventListener("click", closeMyForm)


const regexName =(value)=>{
  return /^(?=.{2,})([a-zA-Z\s-])+$/.test(value);
}
const regeXemail = (value) => {
  return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(
    value
  );
};

nameError.style.display="none"
nameErrorlast.style.display="none"
msgErrorEmail.style.display="none"

firstName.addEventListener("change", function(label){
  const lePrenom = firstName.value;
   if (regexName(lePrenom)) {
    console.log("ok")
    nameError.style.display="none"  
    firstName.style.color="green"  
   } else {
    console.log("ko")
    nameError.style.display="block"
    nameError.innerHTML = "Veuillez entrer deux caractères minimum"
    nameError.style.fontSize ="15px"
    nameError.style.color ="red"
    firstName.style.color="red"
   }
})
lastName.addEventListener("change", function(input,label){
  const leNom = lastName.value;
  if (regexName(leNom)) {
   console.log("ok")
   lastName.style.color="green"
   nameErrorlast.style.display="none"    
  } else {
   console.log("ko")
    nameErrorlast.style.display="block"
    nameErrorlast.innerHTML = "Veuillez entrer deux caractères minimum"
    nameErrorlast.style.fontSize ="15px"
    nameErrorlast.style.color ="red"
   lastName.style.color="red"
   //errorFirstName.innerHTML = "Veuillez entrer deux caractères minimum"
  }
})

email.addEventListener("change", function(input,label){
  const lemail = email.value;
  if (regeXemail(lemail)) {
   console.log("ok")
   email.style.color="green"
   msgErrorEmail.style.display="none" 
   
  } else {
   console.log("ko")
   msgErrorEmail.style.display="block"
   msgErrorEmail.innerHTML = "Veuillez entrer un email valide"
   msgErrorEmail.style.fontSize ="15px"
   msgErrorEmail.style.color ="red"
   email.style.color="red"
  }
})












