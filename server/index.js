const express = requier('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => console.log(`Express server running Creature on port ${PORT}`));
