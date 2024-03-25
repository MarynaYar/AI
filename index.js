let joke = document.querySelector("#joke")
let loadingMessage = document.querySelector("#loadingMessage")
let mainButton = document.querySelector("#main-button");
mainButton.addEventListener("click", handleClick)

function handleClick(event) {
  event.preventDefault();
  let apiKey = "a4o42d4123dtaddfba780dacafeb203f";
  let context = "you are a funny API who knows a lot of interesting jokes, please be polite and provide a very short funny and answer. Please answer in very basic HTML (<p>)";
  let prompt = "Tell me one funny joke."
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showAnswer)
}

function showAnswer(response) {
  console.log(response.data.answer)
  loadingMessage.style.display = 'block'
  setTimeout(() => {
    loadingMessage.style.display = 'none';
    joke.innerHTML = response.data.answer

  }, 2000)
}
