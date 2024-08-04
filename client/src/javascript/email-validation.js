const newsletterForm = document.getElementById("form1");
const emailBox = document.getElementById("newsletter-email");
const validModal = document.getElementById("valid-modal");
const invalidModal = document.getElementById("invalid-modal");


// validate newsletter email

newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
  const email = formData.get("email");
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailFormat)) {
    emailBox.style.border = "3px solid red";
    emailBox.classList.add("shake");
    invalidModal.style.display = "flex";
    return console.log("Invalid email!!");
  }
  emailBox.style.border = "3px solid green";
  validModal.style.display = "flex";

  return console.log("valid email");
});

// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if ((event.target !== validModal, invalidModal)) {
    validModal.style.display = "none";
    invalidModal.style.display = "none";
    emailBox.style.border = "none";
  }
};



