const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/faves/animals', (req, res) => {
    const animals = ['giraffe', 'aligator', 'peacock', 'unicorn']

    res.render('faveAnimals', { animals })
})

app.get('/hates/animals', (req, res) => {
    const animals = ['rats', 'crocodiles']

    res.render('hateAnimals', { animals })
})

app.get('/faves/foods', (req, res) => {
    const foods = ['chicken', 'bread', 'cinnamon rolls', 'BBQ']

    res.render('faveFoods', { foods })
})

app.get('/hates/foods', (req, res) => {
    const foods = ['brussel sprouts', 'seitan', 'sea urchin']

    res.render('hateFoods', { foods })
})
app.listen(8000, () => {
    console.log('Server has started!');
})