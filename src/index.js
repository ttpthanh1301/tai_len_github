const path=require('path')
const express = require('express');
const morgan = require('morgan');
const app = express();
const handlebars = require('express-handlebars');

const engine = handlebars.create();
app.engine('handlebars', engine.engine);
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'resources/views'))

const port = 3000;
app.use(express.static(path.join(__dirname,'public')))
// app.use(morgan('combined'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.get('/', (req, res) => {
  res.render('home');

});
app.get('/news', (req, res) => {
  res.render('news');

});
app.get('/searchs', (req, res) => {
  res.render('searchs');

});
app.post('/searchs', (req, res) => {
  console.log(req.body)
  res.send('');

});



app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`);
});
