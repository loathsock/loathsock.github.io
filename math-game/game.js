const questionDisplay = document.getElementById('span')
const options = document.querySelector('.options')
const count = document.querySelector('.count')
const winMessage = document.querySelector('.win')
const audioError = new Audio('error.mp3')
const audioCorrect = new Audio('476178__unadamlar__correct-choice.wav')
let counter = 0
let start = new Date().getTime()
restartGame()
generateMathProblem()

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



function generateMathProblem(){
     
      let myCounter = document.getElementById('counter')
      let time = document.querySelector('.time-span')
      myCounter.innerHTML = counter
      const numOne = Math.floor(Math.random() *11) +1
      const numTwo = Math.floor(Math.random() *11) +1
  
      const operator = [ '+', '-' , '*']
      const myOperator = operator [Math.floor(Math.random() * 3)]  
      let question = `${numOne} ${myOperator} ${numTwo}`
      let evaluted = +eval(question).toFixed(1) 
      const randomVarNum = Math.floor(Math.random()* 10) +1 
      const randomVarNumTwo = Math.floor(Math.random()* 44) +1 
      const optionsArray = [ randomVarNumTwo, evaluted + 1, randomVarNum, evaluted] 
      shuffle(optionsArray)
     

    questionDisplay.innerHTML =  question
    options.innerHTML = ''
    for (let option of optionsArray){
      options.innerHTML += `<button class = "option-btn"> ${option}</button>`
    } 
    document.querySelectorAll('.option-btn').forEach(element => {
      element.onclick = () => {
        if(count.classList.contains('animS') || count.classList.contains('animF')) {
          count.classList.remove('animS', 'animF')
        }
      
      if(element.innerText == evaluted) {
        audioCorrect.play()
        count.classList.add('animS')
       counter++
        generateMathProblem() 
        if(counter == 10) {
          let end = new Date().getTime()
          let res =  end - start 
          time.innerHTML = `Completed in ${res/1000}`
          console.log('it took: ' + (res/1000) +' seconds');
          winMessage.style.display = 'flex'
          winMessage.classList.add('win-message')
        }     
      } 
      
      else{
        audioError.play()
        count.classList.add('animF')
      counter--
      if(counter <= 0){
        counter = 0
      }
      generateMathProblem()   
      
    }
  }
}) 
}
function restartGame(){
  const restartButton = document.getElementById('restart')
  restartButton.addEventListener('click', ()=>{
    location.reload()
    
  })
}