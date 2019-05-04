const express = require('express')
const { Dinosaur, Flavor } = require('./models')
const app = express()

app.get('/', (req, res) => {
    res.send('index!')
})

// Create a route that displays all dinos
app.get('/dinos', async (request, response) => {
    try {
      const allDinos = await Dinosaur.findAll();
      response.send(allDinos);
    } catch(error) {
      console.log(`Something bad is happening: ${error}`);
    } finally {
        }
  });

// Create a route that displays all flavors
app.get('/flavors', async (request, response) => {
    try {
      const allFlavors = await Flavor.findAll();
      response.send(allFlavors);
    } catch(error) {
      console.log(`Something bad is happening: ${error}`);
    } finally {
        }
  });

// Create a route that displays a single dino by id Ex: /dinos/id/1 should display json of the dino with an id of 1
app.get('/dinos/:id', async (request, response) => {
    try {
      const dinosById = await Dinosaur.findByPk(request.params.id);

      response.json(dinosById);
    } catch(error) {
      console.log(`Something bad is happening: ${error}`);
    } finally {
        }
  });

// Create a route that displays a single dino by name Ex: /dinos/name/barney should display json of barney the dinosaur
app.get('/dinos/name/barney', async (request, response) => {
    try {
      const dinosByName = await Dinosaur.findAll
      ({where: {
                name: 'barney'}
        });

      response.json(dinosByName);
    } catch(error) {
      console.log(`Something bad is happening: ${error}`);
    } finally {
        }
  });

// Create a route that displays a single flavor by id Ex: /flavors/id/1 should display json of the flavor with an id of 1
app.get('/flavors/id/:id', async (request, response) => {
    try {
      const flavorsById = await Flavor.findByPk(request.params.id);

      response.json(flavorsById);
    } catch(error) {
      console.log(`Something bad is happening: ${error}`);
    } finally {
        }
  });

// Create a route that displays a single flavor by name Ex: /flavors/name/lemon should display json of the lemon flavor
app.get('/flavors/name/lemon', async (request, response) => {
    try {
      const flavorsByName = await Flavor.findAll
      ({
        where: {
                name: 'lemon'}
        });

      response.json(flavorsByName);
    } catch(error) {
      console.log(`Something bad is happening: ${error}`);
    } finally {
        }
  });

app.listen(3000, () => {
    console.log(`running on port 3000!`)
})
