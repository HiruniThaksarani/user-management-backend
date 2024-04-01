const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); //to allow cross-origin requests (different domain from the API server)

app.use(
    express.urlencoded({ /// Middleware to parse URL-encoded request body
        extended:true // Allow nested objects in query string
    })
);

app.use(express.json); //Middleware to parser JSON request body

module.exports =app; //Export the app object for use in other modules