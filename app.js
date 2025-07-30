const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
  res.cookie('name', "harshita");
  res.end('Cookie has been set!');
});

app.get('/read', (req, res) => {
  
  res.end('read page!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// Export the app for testing purposes