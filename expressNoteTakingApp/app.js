const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
res.render('card', { prompt: "Who is burried in Grant's Tomb?", hint: "Think about whose tomb it is."});
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});