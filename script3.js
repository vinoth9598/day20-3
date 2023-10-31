
let fetchJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            // console.log(data.value);
            jokeText.textContent = data.value;
        })
        .catch((error) => {
            console.log(error);
        })
}

let getJokeButton = document.getElementById('getJokeButton');
let jokeText = document.getElementById('jokeText');

getJokeButton.addEventListener('click', fetchJoke);

fetchJoke();

