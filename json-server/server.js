const express = require('express');
const app = express();
const path = require('path');

// Serve the JSON file
app.get('/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`JSON server running on http://localhost:${PORT}`);
});