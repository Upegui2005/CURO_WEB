const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@curo.gpgsdmi.mongodb.net/?retryWrites=true&w=majority`

function connect() {
    mongoose.connect(uri)
    .then(() => {
        console.log('Conectada');
    })
    .catch(err => {
        console.error('Error: ' + err);
    })
}

module.exports = { connect }