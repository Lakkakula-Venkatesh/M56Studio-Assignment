const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 8000;
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/cardsData").then(() => console.log("Connected to Database")).catch((err) => console.log(err.message));

const cardsSchema = new mongoose.Schema({
    cardNumber: Number,
    expiryDate: String,
    cvvCode: Number,
    name: String
})
const Card = mongoose.model('Card', cardsSchema);
app.post('/', (req, res) => {
    const {number, date, cvv, name} = req.body;
    const newCard = new Card ({
        cardNumber: number,
        expiryDate: date,
        cvvCode: cvv,
        name: name
    })
    newCard.save().then((newCard) => res.send(newCard));
    return;
})
app.listen(port, () => console.log(`Listening on Port ${port}`));