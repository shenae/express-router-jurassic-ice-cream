const express = require('express')
const { Dinosaur, Flavor } = require('./models')
const app = express()

app.get('/', (req, res) => {
    res.send('index!')
})

app.get('/dinos/all', async (req, res) => {
    const dinos = await Dinosaur.findAll({})
    res.json(dinos)
})

app.get('/flavors/all', async (req, res) => {
    const flavors = await Flavor.findAll({})
    res.json(flavors)
})

app.get('/dinos/id/:id', async (req, res) => {
    const dino = await Dinosaur.findOne({ where: { id: req.params.id } })
    res.json(dino)
})

app.get('/dinos/name/:name', async (req, res) => {
    const dino = await Dinosaur.findOne({ where: { name: req.params.name } })
    res.json(dino)
})

app.get('/flavors/show/:id', async (req, res) => {
    const flavor = await Flavor.findOne({ where: { id: req.params.id } })
    res.json(flavor)
})

app.get('/flavors/name/:name', async (req, res) => {
    const flavor = await Flavor.findOne({ where: { name: req.params.name } })
    res.json(flavor)
})

app.listen(3000, () => {
    console.log(`running on port 3000!`)
})