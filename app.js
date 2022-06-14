const express = require('express')

const app = express();
require('dotenv').config();

const PORT = process.env.PORT

app.get('/test', (req, res) => {
    console.log('Hello Word !')
    res.send('let\'s go !')
})

app.listen(PORT, () => {
    console.log('Server Listing ....')
})