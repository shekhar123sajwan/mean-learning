const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
require('dotenv').config();
const DB = process.env.ALTS_URI;
mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('Err ' + err));

const app = express();
const port = process.env.PORT || 4000;

const users = require('./routes/users');
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());

app.use('/users', users);

app.get('/', (req, res, next) => {
    res.status(200).send('Invalid')
})
app.listen(port, () => {
    console.log(` listening PORT ${port}`);
})