const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path')
const app = express()
require('dotenv').config()

const { connect } = require('./db/conection');

app.set('port', process.env.PORT || 8989);
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'https://localhost:4200'}))

app.use('../frontend/assets', express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');

app.use('', require('./routes/route'));

async function startServer() {
    try {
        await connect();
        app.listen(app.get('port'), () => {
            console.log('Server activo', app.get('port'))
        });
    } catch (err) {
        console.error('Error: ' + err);
    }
}

startServer()