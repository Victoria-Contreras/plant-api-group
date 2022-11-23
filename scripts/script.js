let characterName;
let homeworldName;
let characterImage; 

const wrongPlanetArr = ["Tatooine", "Alderaan", "Hoth", "Dagobah", "Endor"]
let wrongAnswer;



document.addEventListener('DOMContentLoaded', function () {
    
})

const myForm = document.getElementById('search-form');
myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchString = document.getElementById('search-result').value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    fetch("https://swapi.dev/api/people/?search=" + urlEncodedSearchString).then(response => {
        return response.json();
    }).then(data => {
        getPerson(data.results[0].url)
    })
})

async function getPerson(url) {
    const response = await fetch(`${url}`)
    const data = await response.json()
    characterName = data.name
    const homeworldUrl = data.homeworld

    getHomeworld(homeworldUrl)
    getImage()
    console.log(characterImage)
}



async function getHomeworld(homeworld){
    const response = await fetch(`${homeworld}`);
    const data = await response.json();
    homeworldName = data.name;
    
    getRandomWrongAnswer()
    createPeopleList(homeworldName, characterName);
}

function getRandomWrongAnswer() {
    wrongAnswer = wrongPlanetArr[Math.floor(wrongPlanetArr.length * Math.random())];
    
    if (wrongAnswer == homeworldName) {
        getRandomWrongAnswer();
    }
}


function createPeopleList (homeworld, name) {
    document.getElementById("trivia-cards").innerHTML = `
    <div class="card col-12 col-lg-4" id="quiz-card">
    <div class="card-body align-text-center">

       <h5 class="card-title">What is ${name}'s homeplanet?</h5>
       
        <img id="image" class="card-img-top"  height="auto"/>
       <button href="#" class="card-link" id="correct">${homeworld}</button>
       <button href="#" class="card-link" id="wrong">${wrongAnswer}</button>
     </div>

    `
    document.getElementById('image').src = characterImage;
    const correctButton = document.getElementById("correct");
    const wrongButton = document.getElementById("wrong");

    correctButton.addEventListener("click", function () {
        correctButton.style.backgroundColor = 'green';
        correctButton.style.color = 'white';
    })
    
    wrongButton.addEventListener("click", function () {
        wrongButton.style.backgroundColor = 'red';
        wrongButton.style.color = 'white';
    })

    
}

async function getImage() {
    const response = await fetch('https://akabab.github.io/starwars-api/api/all.json');
    const data = await response.json();
    
    for (i = 0; i < data.length; i++){
        
        if (data[i].name == characterName) {
            console.log(data[i].image)
            return characterImage = data[i].image;
        }
    }
}
