const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./Connection/connect');
const { login, register } = require('./controllers/authController');
const { addCar } = require('./controllers/addcar');
const { getProducts } = require('./controllers/getProducts');
const { findProduct } = require('./controllers/findone');
const { updateProduct } = require('./controllers/updatecar');
const { deleteCar } = require('./controllers/deletecar');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/getproducts', getProducts)

app.post('/login', login) // Login middleware 

app.post('/register', register) // Middleware for register

app.post('/addcar', addCar)

app.patch('/updatecar', updateProduct)

app.delete('/deletecar', deleteCar)

app.post('/findone', findProduct)

connectDB(); // Making Connection with Database

app.listen(5050, () => {
    console.log("database connected")
})