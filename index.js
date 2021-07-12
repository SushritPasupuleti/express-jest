const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello There!').status(200);
})

app.get('/hello-there', (req, res) => {
    res.send('General Kenobi!').status(200);
  })

server = app.listen(port, () => {
  console.log(`Server running on Port ${port} 🚀`)
})

module.exports = server;