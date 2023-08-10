const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Totallab Validation API homepage!");
});

app.get("/api/status", (req, res) => {
  res.send("Status: Online");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
