const express = require('express');
const router = express.Router();
const QuoteController = require('../controllers/quote.controller');

router.get('/', async function(req, res) {
    await QuoteController.getQuote(req, res);
});

router.post('/create', async function(req, res) {
    await QuoteController.createQuote(req, res);
})

module.exports = router;