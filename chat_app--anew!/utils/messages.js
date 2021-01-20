const moment = require('moment')

const users = []

  function userJoin(id, username, room) {
    const user = {id, username, room}
    users.push(user)
    return user
  }


function formatMessage(username, text){
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }
}

// Get room users
function getRoomUsers(room) {
    return users.filter(user => user.room === room);
    }


    function userLeaves(id) {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
    return users.splice(index, 1)[0];
    }
}



module.exports = {
    formatMessage,
    getRoomUsers,
    userLeaves,
    userJoin
    
} 

