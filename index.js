const express = require('express');
const app = express();
const cors = require('cors');
require('./database');
const authRoutes = require('./routes/auth');
const audioRoutes = require('./routes/audiobooks');
const usersRoutes = require('./routes/user');


app.use(cors())
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/audiobooks", audioRoutes);
app.use("/api/users", usersRoutes); 



app.listen(3000, ()=> {
    console.log('App running at 3000');
});




