const { response } = require("express");
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
    // console.log(latlon);
    latlon.split(",");
    // console.log(latlon);
    let lat = latlon[0];
    let lon = latlon[1];

    const API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&id=524901&APPID=e3e7261bccb6e158fae3081c9fed0167`
    
    let weather = await fetch(API_URL);
    let format = await weather.json();
    console.log(format);
    response.json(format);



    app.use(express.json());
    app.use(express.static('public'));

})