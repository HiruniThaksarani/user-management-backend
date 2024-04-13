require('dotenv').config(); // Load environment variables from a .env file into process.env

const express = require('express');
const cors = require('cors');
const app = express();
const mongoose =require('mongoose');
const userRoutes =require('./routes/users');

const hostname='localhost';

//Middlewares
app.use(cors()); //to allow cross-origin requests (different domain from the API server)

app.use(
    express.urlencoded({ // Middleware to parse URL-encoded request body
        extended:true // Allow nested objects in query string
    })
);

app.use(express.json()); //Middleware to parser JSON request body

app.get('/',(req,res) => {
    res.send('Welcome to the User Management API')
});

app.use('/api/users', userRoutes); // Use the userRoutes for request to the /user endpoint

mongoose.connect(process.env.MONGO_URI)  //Connect to MongoDB
    .then(()=>{
        //Start the server
        app.listen(process.env.PORT,()=>{
            console.log(`Connect to db & running on ${process.env.PORT}`);
    })})
    .catch((err)=>{  //Catch and log any errors while connecting to MongoDB
        console.log(err);
    })

process.env
// const server=app.listen(port,hostname,()=>{
//     console.log(`Server running at ${port}`)
// });


