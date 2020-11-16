const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const hatesController = require('./controllers/hatesController');
const favesController = require('./controllers/favesControllers');

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/hates', hatesController);
app.use('/faves', favesController);

app.listen(8000, () => {
    console.log('Server has started!');
})