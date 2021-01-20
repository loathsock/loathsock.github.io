const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const server = http.createServer(app)
const PORT = process.env.PORT || 8000
const socketio = require('socket.io')
const {formatMessage,
   getRoomUsers, 
   userLeaves, 
   userJoin} = require('./utils/messages.js')


app.use(express.static(path.join(__dirname, 'public')))

  const io = socketio(server)

    io.on('connection', socket => {
    socket.on('join-room', ({username, room }) => {
    const user = userJoin(socket.id, username, room) 

    socket.join(user.room)
    socket.broadcast.to(user.room).emit('user-joined', formatMessage(username, user.id))
    
      
    io.to(user.room).emit('user-room', {
        room: user.room,
        users: getRoomUsers(user.room) 
    })

    socket.on('chat-message', msg => {       
        io.sockets.to(user.room).emit('chat-message',  msg, formatMessage(user.username))
    })
  }) 

    socket.on('disconnect', () => {

       const user = userLeaves(socket.id)     
       if(user) {
        io.to(user.room).emit('user-disconnected', `${user.username} has disconnected`)  
        io.to(user.room).emit('user-room', {
          room: user.room,
          users: getRoomUsers(user.room)
        });
       }
    })
})  

server.listen(PORT, () => {
    console.log('server started on ' + PORT);
})




