let form = document.querySelector("#form");
form.addEventListener("submit", generateHike);
let hikeBox = document.querySelector("#hike");


function generateHike(event) {
  event.preventDefault()

  let userPrompt = document.querySelector("#user-prompt");
  let apiKey = "a4o42d4123dtaddfba780dacafeb203f";
  let context = `You are a funny API who knows a lot of interesting jokes, please be polite and provide a very short funny and answer. Make the answer in one string. Sing in the end  "HikingAI" inside the <br><strong>HikingAI</strong> HTML element.`;
  let prompt = `Tell me one funny joke about${userPrompt.value}.`
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  hikeBox.classList.remove("hidden");
  hikeBox.innerHTML = `<span class="blink"> Generating...</span>`

  setTimeout(() => {
    axios.get(apiUrl).then(showAnswer);
  }, 5000)

}

function showAnswer(response) {
  console.log(response.data.answer)
  hikeBox.innerHTML = '  '
  let myText = response.data.answer;
  typeWriter(myText, 'hike', 50);
}

function typeWriter(text, elementId, speed) {
  let i = 0;
  let isTag = false;
  let textBuffer = '';
  const elem = document.getElementById(elementId);

  function typing() {
    if (i < text.length) {
      if (text[i] === '<') {
        isTag = true;
      } else if (text[i] === '>') {
        isTag = false;
      }

      textBuffer += text[i];

      if (!isTag || text[i] === '>') {
        elem.innerHTML = textBuffer;
      }

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
