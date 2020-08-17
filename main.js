function computerPlay() {
    let r = 'Piedra', p = 'Papel', s = 'Tijera';
    let rps = [r, p, s];
    let result = rps[Math.floor(Math.random() * rps.length)];

    switch (result) {
        case 0: r;
            break;
        case 1: p;
            break;
        case 2: s;
            break;
    }
    return result;
}

function playRound(playerSelection, computerSelection) {

    //player selection == rock
    if (playerSelection === 'Piedra' && computerSelection == 'Tijera') { //rock vs scissors
        return `Has ganado "${playerSelection}" le gana "${computerSelection}"'`;
    } else if (playerSelection === 'Piedra' && computerSelection == 'Papel') { //rock vs paper
        return `Has perdido "${playerSelection}" no le gana "${computerSelection}"`;
    } else if (playerSelection === 'Piedra' && computerSelection == 'Piedra') { //rock vs rock
        return `Empate, "${playerSelection}" y "${computerSelection}" no pueden competir`;
    }
    //player selection == scissors
    else if (playerSelection === 'Tijera' && computerSelection == 'Piedra') { //scissors vs rock
        return `Has perdido "${playerSelection}" no le gana "${computerSelection}"`;
    } else if (playerSelection === 'Tijera' && computerSelection == 'Papel') { //scissors vs paper
        return `Has ganado "${playerSelection}" le gana "${computerSelection}"`;
    } else if (playerSelection === 'Tijera' && computerSelection == 'Tijera') { //scissors vs scissors
        return `Empate, "${playerSelection}" y "${computerSelection}" no pueden competir`;
    }
    //player selection == paper
    else if (playerSelection === 'Papel' && computerSelection == 'Piedra') { //paper vs rock
        return `Has ganado "${playerSelection}" le gana "${computerSelection}"`;
    } else if (playerSelection === 'Papel' && computerSelection == 'Tijera') { //paper vs scissors
        return `Has perdido "${playerSelection}" no le gana "${computerSelection}"`;
    } else if (playerSelection === 'Papel' && computerSelection == 'Papel') { //paper vs paper
        return `Empate, "${playerSelection}" y "${computerSelection}" no pueden competir`;
    } else {
        return `"${playerSelection}" no es piedra, papel, o tijera`;
    }
}

//Esto es codigo de prueba
let playerSelection = 'Papel';
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
//---------------------------------------

game();

function game() {

    const numberOfGames = 5;
    let gamesWon = 0;
    let menssage;
    for (let i = 0; i < numberOfGames; i++) {
        playerSelection = prompt('Que vas a elejir?\n r = Piedra\n p = Papel\n s = Tijera').toLowerCase();

        switch (playerSelection) {
            case 'r':
                playerSelection = 'Piedra'
                break;
            case 'p':
                playerSelection = 'Papel'
                break;
            case 's':
                playerSelection = 'Tijera'
                break;
            default:
                break;
        }
        let result = playRound(playerSelection, computerPlay());
        alert(result);
        console.log(result);

        let psWins = result.indexOf('Has ganado') + 1;

        if (psWins === 1) {
            gamesWon++;
        }
    }
    if (gamesWon === 0) {
        menssage = 'Que lastima, has perdido todas la partidas';
    } else if (gamesWon >= 3) {
        menssage = `Felizidades, has ganado "${gamesWon}" partidas de "${numberOfGames}"`;
    } else {
        menssage = `Que lastima, has perdido "${numberOfGames-gamesWon}" partidas de "${numberOfGames}"`;
    }
    alert(menssage);
    console.log(menssage);
}