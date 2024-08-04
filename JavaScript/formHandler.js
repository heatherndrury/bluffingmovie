// to send information collected in contact form

const contactModal = document.getElementById("contact-modal");
const oopsModal = document.getElementById("oops-modal");
const invalidModal = document.getElementById("invalid-modal");
const contactEmail = document.getElementById("contact-email");

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    const email = formData.get("email");
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailFormat)) {
      contactEmail.style.border = "3px solid red";
      contactEmail.classList.add("shake");
      invalidModal.style.display = "flex";
      return console.log("Invalid email!!");
    }
    try {
      const formDataJsonString = JSON.stringify(formData);
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formDataJsonString,
        redirect: "follow",
      };

      fetch(
        "https://getpantry.cloud/apiv1/pantry/ba8cf629-adc0-4a4f-b88f-27c711b5c2ad/basket/contactFormBasket",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result));

      contactModal.style.display = "flex";
      contactForm.reset();
    } catch (error) {
      console.log("error", error);
      // oopsModal.style.display = "flex";
    }
  });
});
// //Pantry ID - ba8cf629-adc0-4a4f-b88f-27c711b5c2ad

window.onclick = function (event) {
  if ((event.target !== contactModal, invalidModal)) {
    contactModal.style.display = "none";
    invalidModal.style.display = "none";
    contactEmail.style.border = "none";
  }
};
