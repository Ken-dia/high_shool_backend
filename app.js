require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const classeRouter = require('./api/modules/classes/classes.routes');
const eleveRouter = require('./api/modules/eleves/eleves.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { PORT, MONGO_URL } = process.env;

mongoose.connect(MONGO_URL).then((result) => {
    console.log('Yes I am connected to database');
    initApp();

}).catch( (err) => {
    console.log('Error :' +err )
})

function initApp() {
    app.use('/api/classes', classeRouter);
    app.use('/api/eleves', eleveRouter);
    app.listen(PORT, () => {
        console.log('Server Listing ....')
    })
}

