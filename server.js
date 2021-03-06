const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//iniciando o app
const app = express();
app.use(express.json());


//iniciando o db
mongoose.connect(
    'mongodb://localhost:27017/teste',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

requireDir('./src/models');

//rotas
app.use("/", require("./src/routes"));

app.listen(3001);
