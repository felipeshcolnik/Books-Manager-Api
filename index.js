require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./src/controller/userController');

const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());

// app.get('/user', userController.register);

app.listen(PORT, () => console.log(`conectado a porta ${PORT}`))