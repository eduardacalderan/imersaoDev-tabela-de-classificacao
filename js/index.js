const scores = {
  victory: 4,
  draws: 2,
  defeats: -1
}

const maria = {
  name: 'Maria',
  victory: 0,
  draws: 0,
  defeats: 0,
  points: 0
}

const joao = {
  name: 'João',
  victory: 0,
  draws: 0,
  defeats: 0,
  points: 0
}

const julia = {
  name: 'Júlia',
  victory: 0,
  draws: 0,
  defeats: 0,
  points: 0
}

const paulo = {
  name: 'Paulo',
  victory: 0,
  draws: 0,
  defeats: 0,
  points: 0
}

function calculatePoints(player) {
  const points =
    player.victory * scores.victory +
    player.draws * scores.draws +
    player.defeats * scores.defeats
  return points
}

//    objeto
maria.points = calculatePoints(maria)
joao.points = calculatePoints(joao)
julia.points = calculatePoints(julia)
paulo.points = calculatePoints(paulo)

let competitors = [maria, joao, julia, paulo]

function displayPlayers(competitors) {
  let element = ''

  for (let i = 0; i < competitors.length; i++) {
    element += `<tr><td> ${competitors[i].name} </td>`
    element += `<td>${competitors[i].victory}</td>`
    element += `<td>${competitors[i].draws}</td>`
    element += `<td>${competitors[i].defeats}</td>`
    element += `<td>${competitors[i].points}</td>`
    element += `<td><button onClick="addVictory(${i})">Vitória</button></td>`
    element += `<td><button onClick="addDraws(${i})">Empate</button></td>`
    element += `<td><button onClick="addDefeats(${i})">Derrota</button></td>`
    element += `</tr>`
  }

  let playersTable = document.getElementById('players-table')
  playersTable.innerHTML = element
}

displayPlayers(competitors)

function addVictory(i) {
  let players = competitors[i]
  players.victory++
  players.points = calculatePoints(players)
  displayPlayers(competitors)
}

function addDraws(i) {
  let players = competitors[i]
  players.draws++
  players.points = calculatePoints(players)
  displayPlayers(competitors)
}

function addDefeats(i) {
  let players = competitors[i]
  players.defeats++
  players.points = calculatePoints(players)
  displayPlayers(competitors)
}
