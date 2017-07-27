const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()

app.use(express.static('public'))

app.engine('mst', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mst')


const authenticate = (request, response, next) => {
  if (request.query.username === "username" && request.query.password === "password") {
    next()
  } else {
    response.redirect('/login')
  }
}

app.get('/login', (request, response) => {
  response.render('login')
})

app.use(authenticate)
app.get('/', (request, response) => {
  response.render('index')
})


app.listen(3000, () => {
  console.log('All your requests are belong to us - on port 3000')
})
