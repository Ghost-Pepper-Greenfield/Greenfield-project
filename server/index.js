const setupServer = require('./server')
const PORT = process.env.PORT || 4000;
const server = setupServer();

(()=> {
    server.listen(PORT, () => {
        console.log(`App is listening at http://localhost:${PORT}`);
    });
})();