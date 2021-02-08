var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
var hbs = require("hbs");
const path = require("path");

//Add background image
app.use(express.static('public/assets/images'));
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// app.use(express.static('views/images')); 
app.use(express.static(__dirname+'/public'));
// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set Handlebars.
var exphbs = require("express-handlebars");
hbs.registerPartials(path.join(__dirname + "/views/partials"));
app.engine("handlebars", exphbs({ defaultLayout: "main", partialsDir: "views/partials"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");
app.use(routes);
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
