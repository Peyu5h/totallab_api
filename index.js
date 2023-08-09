const express = require('express');
const app = express();

// Define a simple route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Handle 404 - Route not found
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req,res) => {
  res.send("Hello World!")
});
