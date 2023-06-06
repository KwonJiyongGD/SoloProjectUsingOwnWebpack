const express = require('express');
const app = express();

app.get('/contact', (req, res) => {
  // Handle the GET request for the /api/navbar route
  // Add your desired functionality here

  // For example, you can send a response back to the client
  res.json({ message: 'Navbar route accessed successfully' });
});

const port = 5000; // Choose a port number (e.g., 5000)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
