var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    
    var campgrounds = [
        {name:"Salmon Creek", image: "https://farm4.staticflickr.com/3297/3518227895_339a010a78.jpg"},
        {name:"Granite Hill", image: "https://farm4.staticflickr.com/3457/3871440451_181099e545.jpg"},
        {name:"Mountain Goat's rest", image: "https://farm4.staticflickr.com/3060/3021047498_eaab93a32b.jpg"},
    ];

    res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, function() {
    console.log("Yelpcamp has been started !");
});