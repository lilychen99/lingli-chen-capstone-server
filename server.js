const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

const logRoutes = require('./routes/logRoutes');

const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use(cors());


app.use('/api/logs', logRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
