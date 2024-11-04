document
  .getElementById("newCatButton")
  .addEventListener("click", loadRandomCat);

function loadRandomCat() {
  fetch("https://dog.ceo/api/breeds/image/random")
  //https://api.thecatapi.com/v1/images/search
    .then((response) => response.json())
    .then((data) => {
      const catImageContainer = document.getElementById("catImageContainer");
      if (data.length > 0 && data[0].url) {
        catImageContainer.innerHTML = `<img src="${data[0].url}" alt="A random cat">`;
      } else {
        catImageContainer.innerHTML = "<p>No cats found :(</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      const catImageContainer = document.getElementById("catImageContainer");
      catImageContainer.innerHTML =
        "<p>Error loading cat picture. Try again later.</p>";
    });
}

// Initially load a random cat image
loadRandomCat();