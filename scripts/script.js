let characterName;
let homeworldName;

async function getPerson() {
    const response = await fetch("https://swapi.dev/api/people/")
    const data = await response.json()

    characterName = data.results[1].name
    const homeworldUrl = data.results[1].homeworld

    getHomeworld(homeworldUrl)
}

getPerson()

async function getHomeworld(homeworld){
    const response = await fetch(`${homeworld}`);
    const data = await response.json();
    homeworldName = data.name;
    

    createPeopleList(homeworldName, characterName);
}

function createPeopleList (homeworld, name) {
    document.getElementById("trivia-cards").innerHTML = `
    <div class="card col-12 col-lg-4" id="quiz-card">
    <div class="card-body">

       <h5 class="card-title">What is ${name}'s homeplanet?</h5>
       
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <button href="#" class="card-link">${homeworld}</button>
       <button href="#" class="card-link">wrong answer</button>
     </div>

    `
}
