require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/users');
const env = process.env;
const port = process.env.PORT || 3000;

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// router
app.use('/user', userRoute);
app.use('/:id', userRoute);

// connect DB
const mongoUrl = env.MONG_URL;

if (!mongoUrl) {
    console.error('MONG_URL is not defined in your .env file!');
} else {
    mongoose.connect(mongoUrl)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
}

// listen for requests
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/users`);
});