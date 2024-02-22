const jokeContainer = document.getElementById('joke');
const btn = document.querySelector('.button-50');
const url = "https://v2.jokeapi.dev/joke/Any?type=single";


btn.addEventListener( 'click', getJoke);

 async function getJoke(){
    const res = await fetch(url)
    const data = await res.json()
    jokeContainer.innerHTML = data.joke
 }

