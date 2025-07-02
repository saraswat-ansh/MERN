const express = require('express');
const path=require('path');
const app = express();
app.use(express.json());

// Import and use the router
const userRoutes = require('./src');
app.use('/api', userRoutes);  // now routes are prefixed with /api
// app.use('/', userRoutes);
 
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
    // console.log('You are Done...');
    // res.send('Welcome to the Home Route');
});

app.listen(3920, () => {
    console.log('Server is running on port  http://localhost:3920');
});