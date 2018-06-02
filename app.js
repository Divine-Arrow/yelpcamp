var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("Welcome to the YelpCamp");
});

app.listen(3000, function() {
    console.log("Yelpcamp has been started !");
});