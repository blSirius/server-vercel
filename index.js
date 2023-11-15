const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb+srv://siriusblackazka:azkabann@cluster0.mou1mqu.mongodb.net/Auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res) => {
    res.send('Harry Potter')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
