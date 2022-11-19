async function getPerson () {
    const response = await fetch("https://swapi.dev/api/people/")
    const data = await response.json()

    const name = data.results[2].name
    const homeworldUrl = data.results[2].homeworld

    getHomeworld(homeworldUrl, name)
}

getPerson()

async function getHomeworld(homeworld, name){
    const response = await fetch(`${homeworld}`);
    const data = await response.json();
    const homeworldName = data.name;
    
    const personName = name;

    createPeopleList(homeworldName, personName);
}

async function createPeopleList (homeworld, name) {
    document.getElementById("trivia-cards").innerHTML = `
    <div class="card" style="width: 18rem;" id="quiz-card">
    <div class="card-body">

       <h5 class="card-title">What is ${name}'s homeplanet?</h5>
       
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <button href="#" class="card-link">${homeworld}</button>
       <button href="#" class="card-link">wrong answer</button>
     </div>

    `
}
