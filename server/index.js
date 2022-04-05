const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import Routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');



// Connect to db
const DB = 'mongodb://localhost:27017/DelieryFood';
mongoose.connect(DB).then(() => {
    app.listen(3001, () => {
        console.log('server is runing at  http://localhost:3001');
    });
    console.log('Connection Successed !!');
}).catch(err => {
    console.log(err);
});

// Middlewares
app.use(express.json());


// Route Middlewares
app.use('/api/user', authRoutes);
app.use('/api/post', postRoutes);

app.listen(3000, ()=> console.log('Server running'));