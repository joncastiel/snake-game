const mario = document.querySelector('.mario')

const jump = () => {
    mario.classList.add('jump')
    
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.keyCode === 38) {
        jump()
    }
})














