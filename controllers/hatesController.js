const hatesController = require('express').Router()

hatesController.get('/animals', (req, res) => {
    const animals = ['rats', 'crocodiles']

    res.render('hateAnimals', { animals })
})

hatesController.get('/foods', (req, res) => {
    const foods = ['brussel sprouts', 'seitan', 'sea urchin']

    res.render('hateFoods', { foods })
})

module.exports = hatesController;