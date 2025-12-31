const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const gameOver = document.querySelector('.game-over')

let gameRunning = true

const jump = () => {
    if (!gameRunning) return
    
    // Remove a classe jump se já estiver pulando para permitir novo pulo
    mario.classList.remove('jump')
    
    // Força o navegador a recalcular o estilo
    void mario.offsetWidth
    
    // Adiciona a classe jump novamente
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 2000)
}

const checkCollision = () => {
    if (!gameRunning) return
    
    // Verifica se o Mario está pulando
    const isJumping = mario.classList.contains('jump')
    
    // Se estiver pulando, não verifica colisão
    if (isJumping) return
    
    const marioPosition = mario.getBoundingClientRect()
    const pipePosition = pipe.getBoundingClientRect()
    const gameBoard = document.querySelector('.game-board')
    const gameBoardRect = gameBoard.getBoundingClientRect()
    
    // Posições relativas ao game-board
    const marioLeft = marioPosition.left - gameBoardRect.left
    const marioRight = marioPosition.right - gameBoardRect.left
    const pipeLeft = pipePosition.left - gameBoardRect.left
    const pipeRight = pipePosition.right - gameBoardRect.left
    
    // Verifica se há colisão horizontal (Mario está na mesma área do cano)
    const horizontalCollision = marioRight > pipeLeft && marioLeft < pipeRight
    
    if (horizontalCollision) {
        // Colisão detectada!
        gameRunning = false
        gameOver.classList.add('show')
        mario.style.animation = 'none'
        pipe.style.animation = 'none'
    }
}

// Verifica colisão a cada 10ms
setInterval(checkCollision, 10)

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.keyCode === 38) {
        event.preventDefault() // Previne comportamento padrão da tecla
        jump()
    }
})














