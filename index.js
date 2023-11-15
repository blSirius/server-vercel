require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;

// Use async function for connecting to MongoDB
async function connectToDatabase() {
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log("Connected to MongoDB");
        return client;
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err; // Rethrow the error for proper handling
    }
}

app.use(cors());

app.get("/", async (req, res) => {
    res.send('Hello Peter');
});

// Move the MongoDB connection logic outside the route handler
connectToDatabase().then((client) => {
    app.locals.db = client.db(); // Store the MongoDB client in app.locals
    app.listen(PORT, () => {
        console.log("Listening for requests on port", PORT);
    });
});

// Handle graceful shutdown by closing the MongoDB connection
process.on('SIGINT', async () => {
    try {
        await app.locals.db.client.close();
        console.log('MongoDB connection closed.');
        process.exit(0);
    } catch (err) {
        console.error('Error closing MongoDB connection:', err);
        process.exit(1);
    }
});
