const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routes/Product');
const connection = require('./db/connection');

const app = express();
const port = process.env.PORT || 3000;

// Database connection
require('./db/connection');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/product', productRouter);

// 404 Not Found handler
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

// General error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
