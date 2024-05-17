const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const app = express();
const port = 3002;

const route = require('./routes');
const db = require('../source/config/db');
//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources' ,'views'));

//route init
route(app);

app.use(morgan('combined'));
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
