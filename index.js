const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// mongoose.connect('mongodb://localhost:27017/< Your database name >', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

app.get('/',(req,res)=>{
    res.send(`Server is running on http://localhost:${PORT}`)
})

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Internal Server Error');
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;