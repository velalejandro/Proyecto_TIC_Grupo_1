const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./db/config');
//const cors = require('cors');

const app = express();

/** Database */
dbConnection();

//app(cors());

app.use(express.static('public'));



app.use(express.json());

/** Routes */

app.use('/api/users',require('./routes/users'));
app.use('/api/products',require('./routes/products'));
app.use('/api/auth',require('./routes/auth'));


/**Start server */
app.listen(process.env.Port, () => {
    console.log(`Servidor ejecutandose por el puerto ${process.env.Port}`);
});