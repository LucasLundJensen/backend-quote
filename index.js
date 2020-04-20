const express = require('express');
const app = express();
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
require('./sequelize');
require('dotenv').config;

app.use(bodyParser.json({}));

const QuoteModel = require('./api/models/quote.model');
QuoteModel.sync({ force: false });

const QuoteRoute = require('./api/routes/quote.route');
app.use('/api/quotes', QuoteRoute);

app.listen(process.env.PORT, console.log(`Listening to port: ${process.env.PORT}`));