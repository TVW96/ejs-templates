const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static('images'));

app.get('/', (req, res) => {
  var title = "My Home Page";
  var heading = "My Website";
  var image = 'img src="images/sipurple.png" width="200" height="200"/';
  //res.send('Ola from Express!')
  res.render('pages/index',{
    'title':title,
    'heading':heading,
    'image':image
  
  })
})

app.get('/about', (req, res) => {
  var title = "My About Page";
  var heading = "My Website";
  var image = 'img src="images/siBlack.png" width="200" height="200"/';
  res.render('pages/about',{
    'title':title,
    'heading':heading,
    'image':image
  })
})

app.get('/apps', (req, res) => {
  var title = "My Apps";
  var heading = "My Website";
  var image = 'img src="images/sired.png" width="200" height="200"/';
  res.render('pages/apps',{
    'title':title,
    'heading':heading,
    'image':image
  })
})



app.get('/contact', (req, res) => {
  var title = "My Contact Page";
  var heading = "My Website";
  var image = 'img src="images/copmuhead.jpeg" width="200" height="200"/';
  res.render('pages/contact',{
    'title':title,
    'heading':heading,
    'image':image
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
