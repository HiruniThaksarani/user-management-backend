const express = require('express');
const cors = require('cors');
const app = express();
const controller=require('./controller');

app.use(cors()); //to allow cross-origin requests (different domain from the API server)

app.use(
    express.urlencoded({ /// Middleware to parse URL-encoded request body
        extended:true // Allow nested objects in query string
    })
);

app.use(express.json()); //Middleware to parser JSON request body

// Routes
app.get('/', (req, res) => { // Define a route handler for the root URL
    res.json({
        message: 'API endpoint is working!'
    }); // Send a JSON response
});

app.get('/users', (req, res) => { // Define a route handler for the /users URL
    const users = controller.getUsers(); // Get the list of users
    res.json(users); // Send the list of users as a JSON response
});

app.get('/user/:id',(req,res) => { // Define a route handler for the /user/:id URL example: /user/3
    const id=req.params.id; // Get the user ID from the URL path
    const user =controller.getUserById(id); // Get the user details by ID
    res.json(user); // Send the user details as a JSON response
})

module.exports =app; //Export the app object for use in other modules