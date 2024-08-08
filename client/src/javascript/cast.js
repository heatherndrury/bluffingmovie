const init = async () => {
  const getCast = async () => {
    const response = await fetch("/bluffingmovie/assets/json/cast.json");
    /**
     * ALWAYS check response status codes from network calls. Status.OK means the response status is between 200 and 299.
     * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200
     */
    console.log(response);
    if (!response.ok || !response.body) {
      /**
       * If no body returned or no status code then wtf? That is poor etiquette. Let's just return a Promise that resolves to
       * an empty cast array.
       *
       * Reasoning behind returning an empty Promise here is because then we guarantee that no matter what we
       * are returning the same type of data no matter what in an predicable way.
       *
       * If we were sometimes getting a String back and then other times getting a Object back and then other times getting an Array back, now it's more
       * unpredictable and not safe for other people to use.
       *
       * If they were expecting an Array that they wanted to use Array.forEach on and then got back a Number,
       * when they do Number.forEach, it would fail because the .forEach method does not exist on the data type of Number.
       *
       * If we did not do this then anyone who consumes the data returned from the function would have to check for the data type first
       * before using the data to be safe and do "data gymnastics" and start to have trust issues with your code.
       *
       */
      return Promise.resolve({ cast: [] });
    }
 
    /**
     * Destructuring cast from response.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
     */
    const { cast } = await response.json();
    console.log(cast);
    return cast;
    
  };

  const cast = await getCast();
  const castList = document.getElementById("castList");

  cast.forEach((castMember) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cast-div");

    const newImg = document.createElement("img");
    newImg.src = castMember?.img || "https://placehold.co/400x600";
    newImg.classList.add("cast-img");
    //newImg.textContent = castMember.img;

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
    newDiv.appendChild(newImg);
    newDiv.appendChild(newH2);
    newDiv.appendChild(newH3);
    newDiv.appendChild(newPara);
  });
};

init();
