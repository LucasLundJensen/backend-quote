const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');

const Quote = sequelize.define('quote', {
    quote: {
        type: Sequelize.STRING,
        required: true
    },
    source: {
        type: Sequelize.STRING,
        required: true
    },
    link: {
        type: Sequelize.STRING,
        required: true
    }
});


module.exports = Quote;