const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  // TODO: build get request handler
});

app.post('/', (req, res) => {
  // TODO: build post handler
});

app.delete('/', (req, res) => {
  // TODO: build delete handler
});

app.put('/', (req, res) => {
  // TODO: build put handler
});

app.listen(PORT, () => console.log(`Express server running Creature on port ${PORT}`));
