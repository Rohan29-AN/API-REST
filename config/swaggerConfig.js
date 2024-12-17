const swaggerJSDoc = require("swagger-jsdoc")

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API REST',
            version: '1.0.0',
            description: 'A simple API to demonstrate Swagger integration'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server'
            }
        ]
    },
    apis:['./routes/*.js']
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

module.exports = swaggerSpec