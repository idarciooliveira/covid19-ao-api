require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.listen(process.env.PORT || 3333);

app.use(require('./routes/index'));
app.use(require('./routes/state'));
app.use(require('./routes/quarentineCenter'));

module.exports = app ;