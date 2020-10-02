const express = require("express");
const Datastore = require('nedb')
const app = express();
const fetch = require("node-fetch")

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})

app.get('/api/:latlon', async (req, res) => {
    let latlon = req.params.latlon;
    console.log(latlon);
    latlon.split(",");
    console.log(latlon);


})



app.use(express.json());
app.use(express.static('public'));

