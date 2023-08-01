const express = require("express");
const app = express ();
app.use(express.json());
const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get('/', (req, res) => {
  res.send('Hey this is my API running!')
})
