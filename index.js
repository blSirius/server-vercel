const express = require('express')


const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', async (req, res) => {
    try {
        // Your code here
        res.send('Success');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;