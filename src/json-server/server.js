const express = require('express');
const app = express();
const path = require('');

// Serve the JSON file
app.get('users', (req, res) => {
  res.sendFile(path.join(__dirname, 'users.json'));
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PORT = 3000; // listen to requests from this port
app.listen(PORT, () => {
  console.log(`JSON server running on http://localhost:${PORT}`);
});