const express = require('express');
const usuarioRouter = require('./routers/usuarioRouter');
const app = express();

app.use(express.json());       
app.use(express.urlencoded());



app.use('/usuario',usuarioRouter);

app.listen(5500);