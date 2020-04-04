/* Traversy Media Tuts Followed 
https://www.youtube.com/watch?v=OnuC3VtEQks

https://medium.com/@therealchrisrutherford/nodejs-authentication-with-passport-and-jwt-in-express-3820e256054f

https://itnext.io/implementing-json-web-tokens-passport-js-in-a-javascript-application-with-react-b86b1f313436
*/
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
const port = process.env.PORT || 3000;
const users = require('./routes/users');
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(express.json());
app.use('/users', users);

app.get('/', (req, res, next) => {
    res.status(200).send('Invalid')
})
app.listen(port, () => {
    console.log(`listening PORTS ${port}`);
})