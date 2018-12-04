# Router Practice with Jurassic Ice Cream
_Introduction_

For this exercise, we will build a small Express app split up into 2 Routers that are mounted to `app`. The two Routers will be for `dinosaurs` and `ice_cream_flavors`.  Try to work on each piece of the app in isolation.  Once each route is working try to test it from the browser or with `insomnia`.

## Set Up
- Fork and clone this repo
- run `npm init -y`
- Using npm, install `express`, `morgan`, `nodemon`, `sequelize`, and `pg`
    - `npm install --save express morgan nodemon sequelize pg pg-hstore`
- Update `package.json` with `scripts` for `start`, `dev`, `resetDb`, `seed`, and `debug`
    - here is a [link](https://git.generalassemb.ly/wdi-nyc-octonion/express-react-crud-school/blob/master/package.json) as how to write the scripts in your `package.json` file
- create a database called `jurassic_ice_cream_db`

## The Models
- Define two models:
	- dinosaurs
		-	`dinosaurs` should have name, height, and period (e.g., "jurassic" or "cretaceous") columns
	- ice_cream_flavors
		- `ice_cream_flavors` should have name, color, and on_sale columns

- Fill out resetDb.js
- Add a `seed.js` file with seed data for the two models
- run `npm run resetDb` and `npm run seed`

## Server.js
- Inside `server.js` set up an `app` and call .listen() on it.  Don't forget to attach the morgan logger as middleware
- Write a single root route that returns a welcome message about the Jurassic Ice Cream App

## The First Router
- Create a `routes` directory and add `ice_cream.js` and `dino.js`
- Inside `dinos.js` create a `dinoRouter` and export it
- Add an `index` route (get all) and a `show` route (get one by id) for dinos to the `dinoRouter`; make the appropriate db calls inside each route handler
- Back in `server.js` import the `dinoRouter` and mount it to app under the `/dinosaurs` prefix

## The Second Router
- Inside `routes/ice_cream.js` create an `iceCreamRouter` and export it
- Add an `index` route and `show` route for the `iceCreamRouter`; make the appropriate db calls inside each route handler
- Import the `iceCreamRouter` in `server.js` and mount it under the `/icecream` prefix.
