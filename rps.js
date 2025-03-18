let scores = JSON.parse(localStorage.getItem('score'))


console.log(scores);

function playGame(playerMove) {

    computerMove = pickUpnumber()
    let result = ''
    if (playerMove == 'scissors') {
        if (computerMove === 'rock') {
            result = 'You Lose'
        }
        else if (computerMove === 'paper') {
            result = 'You Win'
        }
        else if (computerMove === 'scissors') {
            result = 'Tie'
        }
    }
    if (playerMove == 'paper') {
        if (computerMove === 'rock') {
            result = 'You Win'
        }
        else if (computerMove === 'paper') {
            result = 'Tie'
        }
        else if (computerMove === 'scissors') {
            result = 'You Lose'
        }

    }

    if (playerMove == 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie'
        }
        else if (computerMove === 'paper') {
            result = 'You Lose'
        }
        else if (computerMove === 'scissors') {
            result = 'You Win'
        }
    }

    if (result == 'You Win') {
        scores.wins += 1


    }
    else if (result == 'You Lose') {
        scores.loss += 1
    }
    else if (result == 'Tie') {
        scores.ties += 1 
    }

    // showResult() 
    // updatingscore()
    document.querySelector('.result-place').innerHTML = result
    document.querySelector('.js-scores').innerHTML = `win:${scores.wins},lose:${scores.loss},tie:${scores.ties}`
    document.querySelector('.js-moves').innerHTML = `your move is ${playerMove} ,computer move is ${computerMove}`
    // showResult()
    // document.querySelector('.js-move').innerHTML=`your move is ${playerMove} ,computer move is ${computerMove}`
    localStorage.setItem('score', JSON.stringify(scores))
    // console.log(JSON.stringify(scores));





    // if (computerMove === 'rock') {
    //     result = 'Tie'
    // }
    // else if (computerMove === 'paper') {
    //     result = 'You Lose'
    // }
    // else if (computerMove === 'scissors') {
    //     result = 'You Win'
    // }


    // console.log(scores);

    // alert(`your move is ${playerMove} ,computer move is ${computerMove}\n${result} \nwin:${scores.wins},lose:${scores.loss},tie:${scores.ties}`)



}

// function handleResult(){
//     displayResult=document.querySelector('.result-place').innerHTML={result}
// }
function pickUpnumber() {
    const randomNumber = (Math.random());

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        console.log(randomNumber);

        computerMove = 'rock'
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        console.log(randomNumber);
        computerMove = 'paper'
    }


    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors'
        console.log(randomNumber);

    }
    console.log(computerMove)
    return computerMove;

}
function showResult() {
    displayResult = document.querySelector('.result-place').innerHTML = result
}
function updatingscore() {
    document.querySelector('.js-scores').innerHTML = `your Move <img class="rps-image" src="./assests/${playerMove}.png" width="50px" alt="">    
                <img class="rps-image" src="./assests/${computerMove}.png" width="50px" alt="">Computer Move`;

}
function resetScore() {

    scores = { wins: 0, loss: 0, ties: 0 }
    document.querySelector('.js-scores').innerHTML = `win:${scores.wins},lose:${scores.loss},tie:${scores.ties}`
    updatingscore()
}