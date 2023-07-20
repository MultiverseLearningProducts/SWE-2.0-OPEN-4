
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('dist'));

// for react router: send back index.html when requesting any route
// react-router will pick up the route and render the correct component
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(1234, () => {
  console.log('Server listening at http://localhost:1234');
});