const Sequelize = require('sequelize');
const Quote = require('../models/quote.model');

async function getQuote(req, res) {
    try {
        const quote = await Quote.findOne({ order: [
            [Sequelize.fn('RAND')]
          ] });
        if(!quote) {
            res.status(404).json({ message: 'No quote found.' });
        } else {
            res.status(200).json({ quote });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Interal Server Error' });
    }
}

async function createQuote(req, res) {
    try {
        const { quote, link, source } = req.body;

        const newQuote = await Quote.create({
            quote,
            link,
            source
        });

        if(!newQuote) {
            res.status(404).json({ message: 'Something went wrong in the creation of a new quote.' });
        } else {
            res.status(200).json({ message: `Quote ${newQuote.id} has been created` });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Interal Server Error' });
    }
}

module.exports = {
    getQuote,
    createQuote
}