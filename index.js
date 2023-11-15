//index.js
require('dotenv').config(); // Import dotenv to load environment variables
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch((error) => {
    console.error('MongoDB connection failed:', error);
});

app.get('/', async (req, res) => {
    res.send('hello peter');
});

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
