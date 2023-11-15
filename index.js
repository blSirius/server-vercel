require('dotenv').config()
const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

app.use(cors())

app.get("/", async (req, res) => {
    res.send('hello peter')
})

client.connect(err => {
    if(err){ console.error(err); return false;}
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
});