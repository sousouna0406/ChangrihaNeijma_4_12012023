// Élements du DOM

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelector(".close");
const form = document.getElementById("form");
const divValid = document.getElementById("div-valid");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const date = document.getElementById("date");
const nameError = document.getElementById("NameErrorMsg");
const nameErrorlast = document.getElementById("NameErrorMsglast");
const msgErrorEmail = document.getElementById("emailErrorMsg");
const birthday = document.getElementById("birthdate");
const msgErrorBirthday = document.getElementById("birthdayErrorMsg");
const quantity = document.getElementById("quantity");
const msgErrorQuantity = document.getElementById("quantityErrorMsg");
const radio = document.getElementsByName("location");
const msgErrorRadio = document.getElementById("radioErrorMsg");
const conditionGeneral = document.getElementById("checkbox1");
const msgErrorCondition = document.getElementById("conditionErrorMsg");
const btnValid = document.querySelector(".btn-submit");
const validMsg = document.querySelector(".msg-valid");
const closeBtnValid = document.getElementById("input-valid");
const classError = document.querySelector(".error");

// Paragraphe d'erreur masqué

nameError.style.display = "none";
nameErrorlast.style.display = "none";
msgErrorEmail.style.display = "none";
msgErrorQuantity.style.display = "none";
msgErrorRadio.style.display = "none";
msgErrorCondition.style.display = "none";

// FONCTION REGEX EMAIL/PRENOM/NOM
const regexName = (value) => {
  return /^(?=.{2,})([a-zA-Z\s-])+$/.test(value);
};
const regeXemail = (value) => {
  return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(
    value
  );
};

// FONCTION MENU NAV
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// FONCTION POUR OUVRIR LA MODALE
function launchModal() {
  modalbg.style.display = "block";
}
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// FONCTION POUR FERMER LA MODALE
function closeMyForm() {
  modalbg.style.display = "none";
}
closeForm.addEventListener("click", closeMyForm);

// FONCTION POUR TEST DU PREMON
function firstNameFunction() {
  const theFirstName = firstName.value;
  if (regexName(theFirstName)) {
    nameError.style.display = "none";
    firstName.style.color = "green";
    firstName.style.border = "green solid 3px";
    return true;
  } else {
    nameError.style.display = "block";
    nameError.innerHTML = "Veuillez entrer deux caractères minimum";
    nameError.style.fontSize = "13px";
    nameError.style.color = "red";
    firstName.style.color = "red";
    firstName.style.border = "red solid 2px";
    return false;
  }
}
firstName.addEventListener("change", firstNameFunction);

// FONCTION POUR TEST DU NOM
function lastNameFunction() {
  const theLastname = lastName.value;
  if (regexName(theLastname)) {
    lastName.style.color = "green";
    nameErrorlast.style.display = "none";
    lastName.style.border = "green solid 3px";
    return true;
  } else {
    nameErrorlast.style.display = "block";
    nameErrorlast.innerHTML = "Veuillez entrer deux caractères minimum";
    nameErrorlast.style.fontSize = " 13px";
    nameErrorlast.style.color = "red";
    lastName.style.border = "red solid 2px";
    lastName.style.color = "red";
    return false;
  }
}
lastName.addEventListener("change", lastNameFunction);

// FONCTION POUR TEST DE L EMAIL
function emailFunction() {
  const theEmail = email.value;
  if (regeXemail(theEmail)) {
    email.style.color = "green";
    msgErrorEmail.style.display = "none";
    email.style.border = "green solid 3px";
    return true;
  } else {
    msgErrorEmail.style.display = "block";
    msgErrorEmail.innerHTML = "Veuillez entrer un email valide";
    msgErrorEmail.style.fontSize = "13px";
    msgErrorEmail.style.color = "red";
    email.style.color = "red";
    email.style.border = "red solid 2px";
    return false;
  }
}
email.addEventListener("change", emailFunction);

// FONCTION POUR ANNIVERSAIRE
function birthdayFunction() {
  let noDate = false;
  let date = birthday.value;

  if (typeof date === "" || noDate == date) {
    msgErrorBirthday.style.display = "block";
    msgErrorBirthday.innerHTML = "Veuillez saisir une date";
    msgErrorBirthday.style.fontSize = "13px";
    msgErrorBirthday.style.color = "red";
    birthday.style.color = "red";
    birthday.style.border = "red solid 2px";
    return false;
  } else {
    birthday.style.color = "green";
    msgErrorBirthday.style.display = "none";
    birthday.style.border = "green solid 3px";
    return true;
  }
}
birthday.addEventListener("change", birthdayFunction);

// FONCTION POUR NOMBRE DE TOURNOIS
function quantityFunction() {
  const quantityValue = quantity.value;
  if (
    quantityValue < 0 ||
    quantityValue > 99 ||
    quantityValue % 1 !== 0 ||
    quantityValue == ""
  ) {
    msgErrorQuantity.style.display = "block";
    msgErrorQuantity.innerHTML = "Veuillez entrer un nombre entre 0 et 99";
    msgErrorQuantity.style.fontSize = "13px";
    msgErrorQuantity.style.color = "red";
    quantity.style.color = "red";
    quantity.style.border = "red solid 2px";
    return false;
  } else {
    quantity.style.color = "green";
    msgErrorQuantity.style.display = "none";
    quantity.style.border = "green solid 3px";
    return true;
  }
}
quantity.addEventListener("change", quantityFunction);

// FONCTION POUR BOUTON RADIO
function radioFunction() {
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      msgErrorRadio.style.display = "none";
      return true;
    } else {
      msgErrorRadio.style.display = "block";
      msgErrorRadio.innerHTML = "Veuillez cocher une ville";
      msgErrorRadio.style.fontSize = "13px";
      msgErrorRadio.style.color = "red";
    }
  }
}
radio.forEach((radio) => radio.addEventListener("change", radioFunction));

//FONCTION POUR LES CONDIDTIONS GÉNERALES
function conditionFunction() {
  if (conditionGeneral.checked) {
    msgErrorCondition.style.display = "none";
    return true;
  } else {
    msgErrorCondition.style.display = "block";
    msgErrorCondition.innerHTML = "Veuillez accepter les conditons génerales";
    msgErrorCondition.style.fontSize = "13px";
    msgErrorCondition.style.color = "red";
    conditionGeneral.style.color = "red";
    return false;
  }
}
conditionGeneral.addEventListener("change", conditionFunction);

//FONCTION DE VALIDATION DU FORMULAIRE
function validate() {
  if (
    firstNameFunction(firstName) &
    lastNameFunction(lastName) &
    emailFunction(email) &
    birthdayFunction(birthday) &
    quantityFunction(quantity) &
    radioFunction(radio) &
    conditionFunction(conditionGeneral)
  ) {
    return true;
  } else {
    return false;
  }
}

// BOUTON QUI APPEL LA FONCTION VALIDATE ET PERMET L'AFFICHAGE DE LA FENETRE CONFIRMATION
btnValid.addEventListener("click", function (e) {
  if (validate(form)) {
    e.preventDefault();
    form.style.display = "none";
    divValid.style.display = "flex";
    validMsg.innerHTML = "Merci pour votre inscription";
    closeBtnValid.addEventListener("click", closeMyForm);
  } else {
    e.preventDefault();
  }
});
