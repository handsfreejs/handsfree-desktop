const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })
const robot = require('robotjs')

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    message = JSON.parse(message)

    if (message.status === 'moveMouse') {
      robot.moveMouse(message.x, message.y)
    }
  })
})
