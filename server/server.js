const express = require('express');

function setupServer () {
    const app = express();

    app.use(express.json());

    app.get('/', (req, res) => {
        res.status(200).send('banana🍌');
    });

    return app;
};

module.exports = setupServer;