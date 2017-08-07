const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

// Catch incorrect url addresses and return 404 error
app.use((req, res, next) => {
  const err = new Error("Not Found!!")
  err.status = 404
  next(err)
})

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    error: err.message
  })
})


const port = process.env.port || 3000
app.listen(port, () => {
  console.log("Listening on port " + port);
})
