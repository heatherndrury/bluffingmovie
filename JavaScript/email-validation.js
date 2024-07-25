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

// first, remove default - use prevent default method
//are these two the same thing??
newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
  const email = formData.get("email");
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailFormat)) {
      return alert("Invalid email!!");
    }
    return console.log("valid email");
});

/**
 * after a user submits a valid email, change input for email to have a border of a green color
 * invalid email show a red border
 * under input, show <p> with validation error to let user know what went wrong
 *
 * when it is invalid, show red border, make input shake
 * if it is valid, show a modal pop up on screen that shows green check mark, says "thank you" and has animation
 *
 *
 */
