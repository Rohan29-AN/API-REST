const express = require('express');
const routes = require('./routes');
const { logger } = require('./middlewares/logger');
require('dotenv').config();
const PORT = process.env.PORT 

const app = express();

// Middleware
app.use(express.json());
app.use(logger)

// Routes
app.use('/api', routes);

app.listen(PORT,()=>{
    console.log("Server is running on PORT ",PORT)
})

module.exports = app;
