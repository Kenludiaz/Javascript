const { response } = require("express");
const express = require("express");
const app = express();
const Datastore = require('nedb');


app.listen(3000, () => console.log("Listening at 3000"));
app.use(express.static("public"));
app.use(express.json());

const database = new Datastore('./public/database.db')
database.loadDatabase();

app.get('/api', (req, res) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    })
})


app.post('/api', (req,res) => {
    const data = req.body;

    let timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);

    res.json({
        status: 'success',
        timestamp: timestamp,
        latitude: data.lat,
        longitude: data.lon
    })
})