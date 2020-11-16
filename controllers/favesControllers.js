const favesController = require('express').Router()

favesController.get('/animals', (req, res) => {
    const animals = ['giraffe', 'aligator', 'peacock', 'unicorn']

    res.render('faveAnimals', { animals })
})

favesController.get('/foods', (req, res) => {
    const foods = ['chicken', 'bread', 'cinnamon rolls', 'BBQ']

    res.render('faveFoods', { foods })
})

module.exports = favesController;