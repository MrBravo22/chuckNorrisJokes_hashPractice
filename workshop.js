const jokeButton = document.getElementById("jokeButton");
const jokeDiv = document.getElementById("jokeDiv");

jokeButton.addEventListener("click", async () => {
  const jokeData = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await jokeData.json();
  displayJoke(joke.value);

  window.location.hash = "joke";
});

function displayJoke(joke) {
  jokeDiv.innerHTML = `
    <div> 
        <h2>Chuck Norris Joke</h2>
        <p>${joke}</p>
    </div>
  `;
}


window.addEventListener("hashchange", () => {
  const currentHash = window.location.hash.substring(1);
  if (currentHash === "joke") {

  }
});





