const circle = document.querySelector('.circle')
const playBtn = document.querySelector('.play-button')
const header = document.querySelector('.instruction')
const result = document.querySelector('.result')
const restartBtn = document.querySelector('.restart-button')





const app = () => {
    playBtn.addEventListener('click', x )   
}
restartBtn.addEventListener('click', restartGame )



  function x() {
      let x = 0
    const randomSeconds = Math.floor(Math.random()* 2000) +300
    header.classList.toggle('hide') && playBtn.classList.toggle('hide')
    setTimeout(() => {
        let startTime = new Date()
        circle.addEventListener('click', () => {
            x =  new Date() - startTime  
            result.innerHTML = `Your reaction time was <em font-size = "25px">${x} </em font-size = "25px"> milliseconds`
            circle.style.display = 'none'
            restartBtn.style.display = 'block'
        })
     circle.classList.toggle('display')
        setTimeout(() => {
            circle.classList.toggle('display')
        }, 1000);
    }, randomSeconds)    
}


function restartGame() { 
   window.location = '/'
}



app()
