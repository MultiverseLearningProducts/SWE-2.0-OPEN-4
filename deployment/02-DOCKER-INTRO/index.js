const express = require('express');
const app = express();
const morgan = require('morgan');
const { PORT = 3000 } = process.env;

const hats = [
  { id: 1, name: 'Cowboy', price: '$100' },
  { id: 2, name: 'Baseball Cap', price: '$40' },
  { id: 3, name: 'Beanie', price: '$20' },
  { id: 4, name: 'Fedora', price: '$30' },
]
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('Hello World! See hats <a href="/hats">here</a>');
});

app.get('/hats', (req, res, next) => {
  res.send(hats);
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});