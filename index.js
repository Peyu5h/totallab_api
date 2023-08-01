const express = require('express');
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running!')
})

app.get(“/status”, (request, response) => {
   const status = {
      “Status”: “Running”
   };
   
   response.send(status);
});

// Export the Express API
module.exports = app;
