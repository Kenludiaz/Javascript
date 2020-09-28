const { response } = require("express");
const express = require("express");
const app = express();

app.listen(3000, () => console.log("Listening at 3000"));
app.use(express.static("public"));
app.use(express.json());

let collection = [];
app.post('/api', (req,res) => {
    const data = req.body;
    collection.push(data);
    console.log(req);
    res.json({collection})
})