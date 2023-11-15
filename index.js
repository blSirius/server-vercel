const express = require('express')
const cors = require('cors')
// const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// mongoose.connect('mongodb+srv://siriusblackazka:azkabann@cluster0.ar5fu2f.mongodb.net/todos', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

app.get('/', async (req, res) => {
    res.send('hello peter')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});