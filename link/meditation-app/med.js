const container = document.querySelector('.container')
const text = document.getElementById('text')
const totalTime = 7500
const breathOut = (totalTime/5) *2
const hold = totalTime / 5
breathAnim()


function breathAnim(){
    container.className = 'container grow'
    text.innerText = 'Inhale'
    setTimeout(() => {
        text.innerText = 'Hold'
        setTimeout(() => {
            text.innerText = 'Exhale'
            container.className = 'container shrink'
        }, hold);
    }, breathOut);
}


setInterval(breathAnim, totalTime)