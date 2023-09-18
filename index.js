require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoUri = process.env.MONGO_URI;
const app = express();
const client = new MongoClient(mongoUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();
    await client.db("Users").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

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
  //res.status(404).json({ error: "Route not found" });
  //res.status(404).sendFile(__dirname + '/404.svg'); // works
  res.status(404).send("<img src="/404.svg"/>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
