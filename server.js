// Setting up our project dependencies
const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient, ObjectId } = require('mongodb')
require('dotenv').config()
const PORT = 8000

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'sample_mflix',
    collection

// Setting up our middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


// Setting up our connection to the database
MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to database`)
        db = client.db(dbName)
        collection = db.collection('movies')
    })

// Setting up our routing

// Search autocomplete functionality
app.get('/search', async (request, response) => {
    try {
        let result = await collection.aggregate([
            {
                "$search" : {
                    "autocomplete" : {
                        // Passing in a specific query (made by our user)
                        "query": `${request.query.query}`,
                        // It will look for our titles
                        "path": "title",
                        "fuzzy": {
                            // Allows the user to make two character errors without removing that query
                            "maxEdits":2,
                            // Autocomplete starts showing relevant results after three characters
                            "prefixLength": 3
                        }
                    }
                }
            }
        ]).toArray()
        response.send(result)
    } catch(error) {
        response.status(500).send({message: error.message})
    }
})

// Routing for when the user has chosen their desired movie (from the dropdown list)
app.get('/get/:id', async (request, response) => {
    try {
        let result = await collection.findOne({
            "_id": ObjectId(request.params.id)
        })
        response.send(result)
    } catch(error) {
        response.status(500).send({ message: error.message })
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})