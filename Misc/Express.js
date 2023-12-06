
const express         = require('express')
const cors            = require('cors')

const App             = express()

App.set('view engine', 'ejs')
App.set('views', './Website/Views')
App.use(express.static('./Website'))
App.use(cors())
App.use(express.json())
App.use(express.urlencoded({ extended: true }));

App.get('/', (req, res) => {
  res.render('Index', {})
})

/* */
/*
const Login = require('../API/Templates/Login')

App.post('/API', (req, res) => {
  console.log(req.body)
  const { token } = req.body;
  if(!token) return res.status(400).send('Missing token')


  //

  Login.run(token); 
  res.status(200).send('OK')
})*/

module.exports = App