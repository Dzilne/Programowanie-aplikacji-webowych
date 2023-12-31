const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const prisma = require('./prisma'); // Prisma client

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
