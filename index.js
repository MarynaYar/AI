let form = document.querySelector("#form");
form.addEventListener("submit", generateHike);
let hikeBox = document.querySelector("#hike");


function generateHike(event) {
  event.preventDefault()

  hikeBox.innerHTML = '  '
  let myText = "Hello, world! This is a typewriter effect. Hello, world! This is a typewriter effect. Hello, world! This is a typewriter effect.";
  typeWriter(myText, 'hike', 50);
}

function typeWriter(text, elementId, speed) {
  let i = 0;
  const elem = document.getElementById(elementId);

  function typing() {
    if (i < text.length) {
      elem.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}






/* let joke = document.querySelector("#joke")
let loadingMessage = document.querySelector("#loadingMessage")
let mainButton = document.querySelector("#main-button");
mainButton.addEventListener("click", handleClick)

function handleClick(event) {
  event.preventDefault();
  let apiKey = "a4o42d4123dtaddfba780dacafeb203f";
  let context = "you are a funny API who knows a lot of interesting jokes, please be polite and provide a very short funny and answer. Please answer in very basic HTML (<p>)";
  let prompt = "Tell me one funny joke."
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  joke.innerHTML = "Generating...";
  axios.get(apiUrl).then(showAnswer)
}

function showAnswer(response) {
  console.log(response.data.answer)

  joke.innerHTML = response.data.answer

} */
