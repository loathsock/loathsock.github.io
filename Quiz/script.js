 let changeInnerDisplay = document.getElementById('display')
 const showCorrectOrFalse = document.getElementById('show')
 const nextButton = document.getElementById('next')
 const scoreDisplay = document.getElementById('score')
 nextButton.addEventListener('click', incrementByOne)

 

    const questions = [
       
        {
            question: "What is the fastest animal in the world?",
            options: ['Turtle', 'Falcon', 'Moose', 'Cheetah'],
            correct: 'Falcon'
        } ,

        {
            question: "what is the circumference of the earth?",
            options: ['40,075 km', '30, 000 km', '48, 500 km', '50, 000 km'],
            correct: '40,075 km'
        } ,

        {
            question: "Who created Javascript?",
            options: ['Brendan Eich', 'Yukihiro Matsumoto', 'Douglas Crockford', 'Dennis Ritchie'],
            correct: 'Brendan Eich'
        } ,

        {
            question: "What is the first commercially avialable programming language?",
            options: ['C', 'Lisp', 'Assembly', 'Fortran'],
            correct: 'Fortran'
        },

        {
            question: "Who is the worst president of the United States Of America",
            options: ['Ronald Reagan', 'Barack Obama', 'Sleepy Joe', 'Donald Trump'],
            correct: 'Donald Trump'
        } 
         
    ]
    
    let score = 0
    let question_number = 0
    let correct = questions[question_number].correct  
        document.addEventListener('DOMContentLoaded', displayQuestion)
        
        function displayQuestion(){  
            let correctAnswer = questions[question_number].correct
            document.querySelector('#display').innerHTML = questions[question_number].question
            const options = document.querySelector('#options')
            options.innerHTML = ''
            for (const option of questions[question_number].options){
                options.innerHTML += `<button class="options">${option} </button> `  
            }

        document.querySelectorAll('.options').forEach(option => {
            option.onclick =  () => {
              showCorrectOrFalse.style.fontSize = '30px'
              showCorrectOrFalse.style.margin = '30px'
              

               if(option.innerText == correctAnswer) {
                score++
                removeOptionButton() 
                changeInnerDisplay.innerHTML = ''
                document.body.style.backgroundColor = 'rgb(33, 216, 73)'
                showCorrectOrFalse.innerHTML = 'Correct'
                
               } else {
                removeOptionButton()
                changeInnerDisplay.innerHTML = ''
                showCorrectOrFalse.innerHTML = 'incorrect'
                document.body.style.backgroundColor = 'rgb(247, 63, 7)'
               }
            }       
        })
        
     }
     function incrementByOne() {

         if (question_number < questions.length -1) {
            document.body.style = "none"
            showCorrectOrFalse.innerHTML = ''
            question_number++
            displayQuestion()  
            
                   
         } else {
            changeInnerDisplay.classList.add("myStyle")
            changeInnerDisplay.innerHTML = `You answered ${score} correct out of ${questions.length}`
            removeOptionButton()
            showCorrectOrFalse.style.visibility = "hidden"
            document.body.style = "none"
            
            nextButton.remove(nextButton)
         }  
     }

   
     function removeOptionButton(){
        document.querySelectorAll('.options').forEach( elem => {
            elem.parentNode.removeChild(elem)
        }) 
     }






