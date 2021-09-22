const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


const api = require('./src/api');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/v1', api);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("connection established!!!!!!!"));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));