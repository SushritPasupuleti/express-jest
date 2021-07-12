const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello There!').status(200);
})

app.listen(port, () => {
  console.log(`Server running on Port ${port} 🚀`)
})

module.exports = app;