var express = require("express"),
    app = express();
bodyParser = require("body-parser"),
    mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");

//  Schema setup

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

//  adding a campground Data into database

// Campground.create({
//         name: "Salmon Creek",
//         image: "https://farm4.staticflickr.com/3297/3518227895_339a010a78.jpg",
//         description: "salmon creek is a awsome place for campground, every second is holding fun here !"
//     },
//     function (err, addedData) {
//         if (err) {
//             console.log("Something went wrong while CREATING data \n", err);
//         } else {
//             console.log("SUCCESS on CREATING \n", addedData);
//         }
//     });





app.get("/", function (req, res) {
    res.render("landing");
});

// Index route -- to show all campground
app.get("/campgrounds", function (req, res) {

    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log("Something Went Wrong ! \n", err);
        } else {
            res.render("campgrounds", {
                campgrounds: allCampgrounds
            });
        }
    });
});

// Create route -- add new campground into database
app.post("/campgrounds", function (req, res) {
    // res.send("You are on POST page !");
    var name    = req.body.name;
    var image   = req.body.image;
    var desc    = req.body.description;
    var newCampground = {
        name: name,
        description: desc,
        image: image
    };

    Campground.create(newCampground, function (err, newAddedCampground) {
        if (err) {
            console.log("Something went wrong while adding new Campgound in DB : \n", err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

// New route  --show form to create new campground
app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});


// Show route --shows the perticular campground with all and main information
app.get("/campgrounds/:id", function (req, res) {
    // res.send("This will be the SHOW page one DAy!");
    // res.params.id
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log("Error while finding data by ID", err);
        } else {
            res.render("show", { campground : foundCampground});
        }
    });
})
app.listen(3000, function () {
    console.log("Yelpcamp has been started !");
});



//  mongo db starting code

//   "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --dbpath "C:\data\db"