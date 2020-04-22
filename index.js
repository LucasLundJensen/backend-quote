const express = require('express');
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const io = require('./socket')(http);
require('./sequelize');
require('dotenv').config;

app.use(bodyParser.json({}));

const QuoteModel = require('./api/models/quote.model');
QuoteModel.sync({ force: false });

const QuoteRoute = require('./api/routes/quote.route');
app.use('/api/quotes', QuoteRoute);

http.listen(process.env.PORT, console.log(`Listening to port: ${process.env.PORT}`));