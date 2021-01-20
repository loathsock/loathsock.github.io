const socket = io()
const chatForm = document.querySelector('.chat-form')
const chatMessages =  document.querySelector('.message-section')
const indexForm = document.querySelector('.index-form')
const userList = document.getElementById('users')


// get username and room from url && look up how to do it correctly later!!

const {username, room} = Object.fromEntries(new URLSearchParams(location.search));




// join chat room
socket.emit('join-room', ({username, room}))

socket.on('chat-message', (message, data) => {
    appendMessage(` <span class = "username-style"> ${data.username} </span> <span class= "time">${data.time} </span> <br>  <span class= "message-span"> ${message}<span>` )
    chatMessages.scrollTop = chatMessages.scrollHeight
})


socket.on('user-joined', data => { 
    console.log(data);
    appendMessage( ` <p class= "name-heighlighted">${data.username} ${data.time} </p>  has joined the chat`)
})



socket.on('user-room', ({room, users}) => {
    outPutUsers(users)
    appendRoom(room)
    
})



socket.on('user-disconnected', message => {  
    appendMessage(message) 
})

chatForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const msg = e.target.elements.msg.value
    socket.emit('chat-message', msg)
})



function appendMessage(message){
 const div = document.createElement('div')
 let msg = document.getElementById('msg')
 div.innerHTML = `<p class = "paragraph"> ${message}</p>`
 div.classList.add('message')
 chatMessages.appendChild(div)
  msg.value = '' 
  msg = msg.focus()
}

function appendRoom(room){
    const roomName = document.querySelector('.room-name')
    roomName.innerHTML = room
}



// add users to DOM
function outPutUsers(users){
    userList.innerHTML = `
    ${users.map(user => `<li> ${user.username} </li>`).join('')}
    
    `
}