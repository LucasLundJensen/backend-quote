module.exports = async function (http) {
    const io = require('socket.io')(http);
    const Quote = require('./api/models/quote.model');
    const Sequelize = require('sequelize');
    var dailyQuote;

    async function getQuote() {
        const quote = await Quote.findOne({ order: [
            [Sequelize.fn('RAND')]
        ] });
        if(quote) {
            dailyQuote = quote;
        }
    }

    getQuote();

    io.on('connection', async (socket) => {
        console.log('User connected');
        io.emit('daily quote', dailyQuote);
        socket.on('disconnect', () => {
            console.log('User disconnected');
        })
    });

    setInterval(async function() {
        getQuote();
    }, 21600000);

    return io;
}