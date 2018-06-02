var express = require("express");
var bodyParser = require("body-parser");

var app = express();


//  Temporary Database as array..
var campgrounds = [
        {
            name: "Salmon Creek",
            image: "https://farm4.staticflickr.com/3297/3518227895_339a010a78.jpg"
        }, 
        {
            name: "Granite Hill",
            image: "https://farm4.staticflickr.com/3457/3871440451_181099e545.jpg"
        }, 
        {
            name: "Mountain Goat's rest",
            image: "https://farm4.staticflickr.com/3060/3021047498_eaab93a32b.jpg"
        },
        {
            name: "Salmon Creek",
            image: "https://farm4.staticflickr.com/3297/3518227895_339a010a78.jpg"
        }, 
        {
            name: "Granite Hill",
            image: "https://farm4.staticflickr.com/3457/3871440451_181099e545.jpg"
        }, 
        {
            name: "Mountain Goat's rest",
            image: "https://farm4.staticflickr.com/3060/3021047498_eaab93a32b.jpg"
        },
        {
            name: "Salmon Creek",
            image: "https://farm4.staticflickr.com/3297/3518227895_339a010a78.jpg"
        }, 
        {
            name: "Granite Hill",
            image: "https://farm4.staticflickr.com/3457/3871440451_181099e545.jpg"
        }, 
        {
            name: "Mountain Goat's rest",
            image: "https://farm4.staticflickr.com/3060/3021047498_eaab93a32b.jpg"
        }
];

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", {
        campgrounds: campgrounds
    });
});


app.post("/campgrounds", function (req, res) {
    // res.send("You are on POST page !");
    var name = req.body.name;
    var image = req.body.image;
    var newCampGround = {
        name: name,
        image: image
    };

    campgrounds.push(newCampGround);
    res.redirect("/campgrounds");
});


app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});

app.listen(3000, function () {
    console.log("Yelpcamp has been started !");
});