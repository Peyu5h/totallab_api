const express = require('express');
const app = express();
//app.use(express.json());
const PORT = process.env.PORT || 3000;
const { MongoClient } = require("mongodb");
const uri = process.env['MONGO_URI'];
const client = new MongoClient(uri);
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
app.get('/', (req, res) => {
    res.send('<h1>Private Validation API</h1>');
});
app.post("/validate", async (request, response) => {
    try {
        const db = client.db('Utils');
        const coll = db.collection('Keys');
        const query = { key: request.body.key };
        const updateDoc = { $set: { used: true }, };
        const options = {};
        const q = await coll.findOne(query);
        if (q) {
            const result = await coll.updateOne(query, updateDoc, options);
            console.log('Valid');
            response.status(200).send('Validated');
        }
        else {
            console.log('Invalid');
            response.status(400).send('Invalid key');
        }
    }
    catch (err) {
        console.log(err);
    }
});
module.exports = app;
