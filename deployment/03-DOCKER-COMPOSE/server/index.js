const express = require('express');
const app = express();
const morgan = require('morgan');
const {
  PORT = 3000,
  apiURL = 'http://localhost:3000',
} = process.env;
const cors = require('cors');

app.use(cors());

const hats = [
  { id: 1, name: 'Cowboy', price: '$100', image: `${apiURL}/cowboy.jpg` },
  { id: 2, name: 'Baseball Cap', price: '$40', image: `${apiURL}/baseball-cap.jpg` },
  { id: 3, name: 'Beanie', price: '$20', image: `${apiURL}/beanie.jpg` },
  { id: 4, name: 'Fedora', price: '$30', image: `${apiURL}/fedora.jpg` },
]
app.use(morgan('dev'));

app.use(express.json());

app.get('/hats', (req, res, next) => {
  res.send(hats);
});

app.post('/hats', (req, res, next) => {
  const { name, price, image } = req.body;
  const newHat = { id: hats.length + 1, name, price, image };
  hats.push(newHat);
  res.send(newHat);
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});