const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import Routes
const authRoutes = require('./routes/users');
const postRoutes = require('./routes/profile');
const livreurRoutes = require('./routes/livreur');
const restaurantRoutes = require('./routes/restaurent');
const repaRoutes = require('./routes/repas');

console.log(process.env.APP_SECRET);

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
app.use('/api', authRoutes);
app.use('/api', postRoutes);
app.use('/api', livreurRoutes);
app.use('/api', restaurantRoutes);
app.use('/api', repaRoutes);

app.listen(3000, ()=> console.log('Server running'));

