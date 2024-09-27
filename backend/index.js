const express = require('express');
const dotenv = require('dotenv');

//db connection import
const connectToDatabase = require('./db');

//routes import
const orgRouter = require('./routes/org');
const participantRouter = require('./routes/participant');

//config integration
dotenv.config();

// Connect to MongoDB
connectToDatabase();

const app = express();
app.use(express.json());

//initialising routes
app.use('/org', orgRouter);
app.use('/participant', participantRouter);


app.get('/', (req, res) => {
  res.send('Certificate Backend is running');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});