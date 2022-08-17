const express = require('express')
const app = express()
const port = 3000
var data = require('./data/test.json');

app.set('view engine','ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static('images'));

app.get('/', (req, res) => {
  var title = "My Home Page";
  var heading = "My Website";
  //res.send('Ola from Express!')
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})

app.get('/about', (req, res) => {
  var title = "My About Page";
  var heading = "My Website";
  res.render('pages/about',{
    'title':title,
    'heading':heading
  })
})

app.get('/users', (req, res) => {
  var title = "My Users Page";
  var heading = "My Website";
  res.render('users/index',{
    'title':title,
    'heading':heading,
    'users':data
  })
})

app.get('/apps', (req, res) => {
  var title = "My Apps";
  var heading = "My Website";
  res.render('pages/apps',{
    'title':title,
    'heading':heading
  })
})



app.get('/contact', (req, res) => {
  var title = "My Contact Page";
  var heading = "My Website";
  res.render('pages/contact',{
    'title':title,
    'heading':heading
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data);
})
