function createGame() {
    return `
    <li>
        <img src="./assets/icon_brazil.svg" alt="Bandeira do Brasil">
        <strong>16:00</strong>
        <img src="./assets/icon_serbia.svg" alt="Bandeira da Servia">        
    </li>
    `
}

function createCard(date, day, games) {
    return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}  
        </ul>
    </div>
    `
}



document.querySelector("#app").innerHTML = `
<header>
    <img src="./assets/logo.svg" alt="Logo da NLW">
</header>
<main id="cards">
    ${createCard("24/11", "quinta", createGame())}
    ${createCard("28/11", "segunda", createGame())} 
    ${createCard("02/12", "sexta", createGame())}   
</main>
`