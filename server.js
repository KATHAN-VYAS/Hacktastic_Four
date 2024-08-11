const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // You can change the port if needed

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '.')));

// Route for index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for map.html
app.get('/map', (req, res) => {
  res.sendFile(path.join(__dirname, 'map.html'));
});

// Route for json.geojson
app.get('/json.geojson', (req, res) => {
  res.sendFile(path.join(__dirname, 'json.geojson'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
