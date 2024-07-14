//To get data from json file
async function getCast() {
  const cast = await fetch("./json/cast.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    });

  let castList = document.getElementById("castList");

  cast.forEach((castMember) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cast-div");

    // const newImg = document.createElement("img");
    // Img.src = castMember.img;
    // newImg.classList.add("cast-img");
    // newImg.textContent = castMember.img;

    const newH2 = document.createElement("h2");
    newH2.classList.add("cast-name");
    newH2.textContent = castMember.name;

    const newH3 = document.createElement("h3");
    newH3.classList.add("cast-role");
    newH3.textContent = castMember.role;

    const newPara = document.createElement("p");
    newPara.classList.add("cast-bio");
    newPara.textContent = castMember.bio;


    castList.appendChild(newDiv);
    newDiv.appendChild(newH2);
    newDiv.appendChild(newH3);
    newDiv.appendChild(newPara);
  });
}
getCast();
