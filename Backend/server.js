
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/book-routes.js');
const port = process.env.PORT || 3001;
const db = mongoose.connection;

const app = express();
app.use(express.json());
app.use(cors());



mongoose.connect(process.env.DATABASE_URL);

db.on("connected", () => {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}...`);
});

app.use("/books",router);    

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
