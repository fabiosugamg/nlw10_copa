const btnChangeColor = document.querySelector("#btn-color")

let bgdColors = ["blue", "root", "red"]
let position = 0

btnChangeColor.addEventListener("click", function (event) {
  position = (position + 1) % bgdColors.length
  event.target.parentNode.parentNode.parentNode.className = bgdColors[position]
})

  let player1alt = player1.slice(-1) === "a" ? "da" : "do"
  let player2alt = player2.slice(-1) === "a" ? "da" : "do"

  return `

<li>
<p> Grupo ${group} </p>
</li>

<li> 
<img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
<strong>${hour}</strong>          
<img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />          
</li>

<div class="nome-times">
<h1>${player1}</h1>
<h1>${player2}</h1>
</div>

`
}

function appresentation(text) {
  return `

  <div class="text">
  <p>  ${text}
  </p>
  </div>`
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4;

  return `
<div class="card" style="animation-delay: ${delay}s">
<h2> ${date} <span> ${day} </span></h2>

<ul>
${games}
</ul>
</div>
`
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "Domingo", createGame("qatar", "13:00", "equador", "A")) +
  createCard(
    "21/11",
    "Segunda",
    createGame("inglaterra", "10:00", "iran", "B") +
    createGame("senegal", "13:00", "holanda", "A")+
    createGame("eua", "16:00", "pais de gales", "B")       
  ) +
  createCard(
    "22/11",
    "Terça",
    createGame("argentina", "07:00", "arabia saudita", "C") +
    createGame("dinamarca", "10:00", "tunisia", "D")+
    createGame("mexico", "13:00", "polonia", "C") +
    createGame("frança", "16:00", "australia", "D")
  ) +
  createCard(
    "23/11",
    "Quarta",
    createGame("marrocos", "07:00", "croacia", "F") +
    createGame("alemanha", "10:00", "japao", "E") +
    createGame("espanha", "13:00", "costa rica", "E")+
    createGame("belgica", "16:00", "canada", "F") 
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGame("suiça", "07:00", "camaroes", "G") +
    createGame("uruguai", "10:00", "coreia do sul", "H") +
    createGame("portugal", "13:00", "gana", "H")+
    createGame("brasil", "16:00", "servia", "G") 
  ) +
  createCard(
    "25/11",
    "Sexta",
    createGame("pais de gales", "07:00", "iran", "B") +
    createGame("qatar", "10:00", "senegal", "A") +
    createGame("holanda", "13:00", "equador", "A")
    createGame("inglaterra", "16:00", "eua", "B") 
  ) +
  createCard(
    "26/11",
    "Sábado",
    createGame("tunisia", "07:00", "australia", "D") +
    createGame("polonia", "10:00", "arabia saudita", "C")+
    createGame("frança", "13:00", "dinamarca", "D") +
    createGame("argentina", "16:00", "mexico", "C")
  ) +
  createCard(
    "27/11",
    "Domingo",
    createGame("japao", "07:00", "costa rica", "E") +
    createGame("belgica", "10:00", "marrocos", "F") +
    createGame("croacia", "13:00", "canada", "F")+
    createGame("espanha", "16:00", "alemanha", "E") 
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("camaroes", "07:00", "servia", "G") +
    createGame("coreia do sul", "10:00", "gana", "H") +
    createGame("brasil", "13:00", "suiça", "G") +
    createGame("portugal", "16:00", "uruguai", "H")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("camaroes", "07:00", "servia", "G") +
    createGame("coreia do sul", "10:00", "gana", "H") +
    createGame("brasil", "13:00", "suiça", "G") +
    createGame("portugal", "16:00", "uruguai", "H")
  ) +
  createCard(
    "29/11",
    "Terça",
    createGame("equador", "12:00", "senegal", "A") +
    createGame("holanda", "12:00", "qatar", "A") +
    createGame("iran", "16:00", "eua", "B") +
    createGame("pais de gales", "16:00", "inglaterra", "B")
  ) +
  createCard(
    "30/11",
    "Quarta",
    createGame("tunisia", "12:00", "frança", "D") +
    createGame("australia", "12:00", "dinamarca", "D") +
    createGame("polonia", "16:00", "argentina", "C") +
    createGame("arabia saudita", "16:00", "mexico", "C")
  ) +
  createCard(
    "01/12",
    "Quinta",
    createGame("croacia", "12:00", "belgica", "F") +
    createGame("canada", "12:00", "marrocos", "F") +
    createGame("japao", "16:00", "espanha", "E") +
    createGame("costa rica", "16:00", "alemanha", "E")
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame("coreia do sul", "12:00", "portugal", "H") +
    createGame("gana", "12:00", "uruguai", "H") +
    createGame("servia", "16:00", "suiça", "G") +
    createGame("camaroes", "16:00", "brasil", "G")
  )