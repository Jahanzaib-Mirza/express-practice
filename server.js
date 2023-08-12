const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const port = 9000;
app.listen(port, () => { console.log("listening on port : " + port) });
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.post("/", (req, res) => {
    var result = parseInt(req.body.num1)+parseInt(req.body.num2)
    res.send("hello : " + result)
})
app.get("/bmi", (req, res) => {
    res.sendFile(__dirname + "/bmi.html")
})
app.post("/bmi", (req, res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight/(height*height);
    res.send("Your BMI is " + result)
})
app.get("/about", (req, res) => {
    res.send("I'm Muhammad jahanzaib, 19 years old")
})
app.get("/contact", (req, res) => {
    res.send("Contact me at : jahanzaibm29@gmail.com")
})

