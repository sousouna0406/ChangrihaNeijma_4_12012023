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
    firstName.classList.add("border-green");
    return true;
  } else {
    nameError.innerHTML = "Veuillez entrer 2 caractères ou plus";
    nameError.style.display = "block";
    nameError.classList.add("error");
    firstName.classList.add("border-red");
    return false;
  }
}
firstName.addEventListener("change", firstNameFunction);

// FONCTION POUR TEST DU NOM
function lastNameFunction() {
  const theLastname = lastName.value;
  if (regexName(theLastname)) {
    lastName.classList.add("border-green");
    nameErrorlast.style.display = "none";
    return true;
  } else {
    nameErrorlast.style.display = "block";
    nameErrorlast.innerHTML = "Veuillez entrer 2 caractères ou plus";
    nameErrorlast.classList.add("error");
    lastName.classList.add("border-red");
    return false;
  }
}
lastName.addEventListener("change", lastNameFunction);

// FONCTION POUR TEST DE L EMAIL
function emailFunction() {
  const theEmail = email.value;
  if (regeXemail(theEmail)) {
    email.classList.add("border-green");
    msgErrorEmail.style.display = "none";

    return true;
  } else {
    msgErrorEmail.style.display = "block";
    msgErrorEmail.innerHTML = "Veuillez entrer un email valide";
    msgErrorEmail.classList.add("error");
    email.classList.add("border-red");
    return false;
  }
}
email.addEventListener("change", emailFunction);

// FONCTION POUR ANNIVERSAIRE

function birthdayFunction() {
  let date = birthday.value;
  let noDate = false;

  function calculateAge(date) {
    let birthdayFormat = new Date(date.split("/").reverse().join("-"));
    let dateMilliseconde = birthdayFormat.getTime();
    let dateAuj = Date.now();
    let age = dateAuj - dateMilliseconde;
    let ageDate = new Date(age);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  if (typeof date === "" || noDate == date) {
    msgErrorBirthday.style.display = "block";
    msgErrorBirthday.innerHTML = "Veuillez saisir une date valide ";
    msgErrorBirthday.classList.add("error");
    birthday.classList.add("border-red");

    return false;
  } else if (calculateAge(date) <= 18) {
    msgErrorBirthday.style.display = "block";
    msgErrorBirthday.innerHTML = "Il faut être majeur pour s'inscrire";
    msgErrorBirthday.classList.add("error");
    birthday.classList.add("border-red");
  } else {
    msgErrorBirthday.style.display = "none";
    birthday.classList.add("border-green");
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
    msgErrorQuantity.classList.add("error-nomargin");
    quantity.classList.add("border-red");
    return false;
  } else {
    msgErrorQuantity.style.display = "none";
    quantity.classList.add("border-green");
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
      msgErrorRadio.innerHTML = "Vous devez choisir une option";
      msgErrorRadio.classList.add("error-nomargin");
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
    msgErrorCondition.innerHTML =
      "Vous devez vérifier que vous acceptez les termes et conditions";
    msgErrorCondition.classList.add("error-nomargin");
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
    closeBtnValid.addEventListener("click", function relaodForm() {
      window.location.reload();
      closeMyForm();
    });
  } else {
    e.preventDefault();
  }
});
