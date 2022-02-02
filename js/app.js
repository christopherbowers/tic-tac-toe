let player = 'X'
let board = ['', '', '', '', '', '', '', '', '']
let gameOver = false

let square = document.querySelectorAll('.square')
const winner = document.querySelector('.winner')


let playerXScore = 0
let playerOScore = 0
let drawScore = 0


// Switch between X's and O's turn
const toggleTurn = () => {
  if (player === 'X') {
    player = 'O'
  } else if (player === 'O') {
    player = 'X'
    }
}

// Check is board array is filled and there are no more moves left
const isBoardFull = () => {
  for (let i = 0; i < board.length; i++) {
    if(board[i] === '') return false
  }
  winner.innerText = 'It\' a Draw!'
  document.querySelector('.reset').innerText = 'Play Again?'
  drawScore ++
  document.getElementById('draw-score').innerText = drawScore
  document.querySelector('.score-board').style.display = 'block'
}

// Compare the array for win scenarios
const checkForWin = () => {
  if (
    board[0] + board[1] + board[2] === 'XXX' || board[0] + board[3] + board[6] === 'XXX' ||
    board[0] + board[4] + board[8] === 'XXX' || board[1] + board[4] + board[7] === 'XXX' ||
    board[2] + board[4] + board[6] === 'XXX' || board[2] + board[5] + board[8] === 'XXX' ||
    board[3] + board[4] + board[5] === 'XXX' || board[6] + board[7] + board[8] === 'XXX'
  ) {
    gameOver = true
    winner.innerText = 'X Wins!'
    playerXScore ++
    document.getElementById('x-score').innerText = playerXScore
    document.querySelector('.score-board').style.dispaly = 'block'
    }
  if (
    board[0] + board[1] + board[2] === 'OOO' || board[0] + board[3] + board[6] === 'OOO' ||
    board[0] + board[4] + board[8] === 'OOO' || board[1] + board[4] + board[7] === 'OOO' ||
    board[2] + board[4] + board[6] === 'OOO' || board[2] + board[5] + board[8] === 'OOO' ||
    board[3] + board[4] + board[5] === 'OOO' || board[6] + board[7] + board[8] === 'OOO'
  ) {
    gameOver = true
    winner.innerText = 'O Wins!'
    playerOScore ++
    document.getElementById('o-score').innerText = playerOScore
    document.querySelector('.score-board').style.display = 'block'
//     console.log(gameOver)
    }
}

// Game play
const gamePlay = () => {
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', (e) => {
      if (!gameOver){
        square[i].innerText = `${player}`
        board[i] = player
        toggleTurn()
        document.querySelector('h2').innerText = `${player}\'s Turn`
      }
      checkForWin()
      isBoardFull()
    }, { once: true })
  }
}

gamePlay()

// Reset the board and variables to start the game over
const resetGame = () => {
      for (let i = 0; i < square.length; i++) {
        square[i].innerText = ''
      }
      gameOver = false
      player = 'X'
      for (let i = 0; i < board.length; i++) {
        board[i] = ''
      }
      winner.innerText = 'X Goes First'
      document.querySelector('.reset').innerText = 'Reset'
      gamePlay()
}

document.querySelector('.reset').addEventListener('click', resetGame)
