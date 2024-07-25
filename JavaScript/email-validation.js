// let newsletterBtn = document.getElementById("newsletter-btn");

// newsletterBtn.addEventListener("click", ValidateEmail);

// //Validates email using RegEx
// function ValidateEmail(inputText){
// let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.form1.email.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form1.email.focus();
// return false;
// }
// }

const newsletterForm = document.getElementById("form1");
const emailBox = document.getElementById("newsletter-email");
const validModal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

// first, remove default - use prevent default method
//are these two the same thing??
newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
  const email = formData.get("email");
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailFormat)) {
    emailBox.style.border = "3px solid red";
    emailBox.classList.add("shake");
    
    // const alertPara = document.createElement("p");
    // alertPara.classList.add("invalid-email-alert");
    // alertPara.textContent = "Try putting in a valid e-mail.";
    // emailBox.appendChild(alertPara);

    return console.log("Invalid email!!");
  }
  emailBox.style.border = "3px solid green";
  validModal.style.display = "flex";

  return console.log("valid email");
});

span.onclick = function() {
    validModal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == validModal) {
      validModal.style.display = "none";
    }
  } 

/**
 * after a user submits a valid email, change input for email to have a border of a green color
 * invalid email show a red border
 * under input, show <p> with validation error to let user know what went wrong
 *
 * when it is invalid, show red border, make input shake
 * if it is valid, show a modal pop up on screen that shows green check mark, says "thank you" and has animation
 *
 
 */
