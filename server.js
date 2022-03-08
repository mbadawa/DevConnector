const express = require('express');
const connectDB = require('./config/db');
var bodyParser = require('body-parser')

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello World!'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/post'));
const PORT = process.env.PORT || 5000;

// init middleware
app.use(express.json({ extended: false }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));