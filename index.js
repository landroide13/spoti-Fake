const express = require('express');
const app = express();
const cors = require('cors');
require('./database');


app.use(cors())
app.use(express.json());




app.listen(3000, ()=> {
    console.log('App running at 3000');
});






