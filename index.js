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

  // function Cast(name, role, bio) {
  //   this.name = name;
  //   this.role = role;
  //   this.bio = bio;
  // }
  // const megan = new Cast(
  //   "Megan Massie",
  //   "Marissa",
  //   "Megan Massie is an actor, director and voice over artist based in Louisville, Kentucky. She is represented by Heyman Talent Agency and The Talent Group."
  // );
  // const damon = new Cast(
  //   "Damon Sudduth",
  //   "Eric",
  //   "Damon Sudduth is an actor, writer, director, and martial artist, currently residing in Frankfort, Kentucky. He is experienced in multiple genres of film and theatre, as well as improv training and stage combat."
  // );
  // const johnny = new Cast(
  //   "Johnny Evans",
  //   "Jerry",
  //   "Johnny Evans is a musician, poet, standup comedian and all around performer who is making his first foray into film acting. Hailing from Birkenhead, England, he will single handedly be giving our film its European flair."
  // );

  // const cast = [megan, damon, johnny];

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
