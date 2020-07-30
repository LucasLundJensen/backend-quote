# Daily Quote App - Backend
The backend for the IOS & Android Daily Quote app.

## Setup
1. Clone the [repo](https://github.com/LucasLundJensen/backend-quote) with `git clone https://github.com/LucasLundJensen/backend-quote`
2. Change directory into the newly installed repository.
3. Run `npm install` to download the dependencies.
4. Create a `.env` file in the root directory of the repository and use the example below with your own database details & port number.
5. Run `node /index.js` to start the server, default port is 3000

## .env Example
```
DB_MAME=QuoteDatabase               // The name of the database to use for the backend.
DB_USER=QuoteUser                   // The user which Sequelize uses
DB_PASSWORD=SuperSecretPassword     // The password which Sequelize uses
DB_ADDRESS=10.10.10.10              // The IP address for the database.
PORT=3000                           // The port which to launch the backend on.
```
