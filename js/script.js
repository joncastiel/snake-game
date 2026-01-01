const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioposition =+window.getComputedStyle(mario).bottom.replace('px', '');


    
    console.log(marioposition);

    if (pipePosition <= 120 && pipePosition > 0 && marioposition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;
    }

}, 10)


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.keyCode === 38) {
        jump()
    }
})
