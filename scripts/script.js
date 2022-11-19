async function start () {
    const response = await fetch("https://swapi.dev/api/people")
    const data = await response.json()
  console.log(data)
}

start()

function createPeopleList (PeopleList) {
    document.getElementById("triva-cards").innerHTML = `
    <div class="card" style="width: 18rem;" id="quiz-card">
    <div class="card-body">
       <h5 class="card-title">Card title</h5>
       
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <button href="#" class="card-link">Luke Skywalker</button>
       <button href="#" class="card-link">Darth Vader</button>
     </div>

    `
}