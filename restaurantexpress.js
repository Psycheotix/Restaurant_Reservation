var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var tables = [];
var waitlist= [];


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });

  app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
    console.log(newReservation);
   
    tables.push(newReservation);
   
    res.json(newReservation);
   });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
