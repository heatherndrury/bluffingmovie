
document.addEventListener("DOMContentLoaded", () => {
  const newsletter = document.getElementById("form1");

  newsletter.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(newsletter);
    const data = Object.fromEntries(formData.entries());

   
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
        "https://getpantry.cloud/apiv1/pantry/ba8cf629-adc0-4a4f-b88f-27c711b5c2ad/basket/newsletterBasket",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result));

      
      newsletter.reset();
    } catch (error) {
      console.log("error", error);
      // oopsModal.style.display = "flex";
    }
  });
});
// //Pantry ID - ba8cf629-adc0-4a4f-b88f-27c711b5c2ad


