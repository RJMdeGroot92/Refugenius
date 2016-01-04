/**
 * Created by Mathijs on 2-1-2016.
 */
//modules
var express = require('express');

//express
var app = express();

//middleware
app.set('view engine', 'ejs');

//routes
app.use(require("./controller/router"));
app.use("/css",express.static(__dirname + "/css"));
//start server
var port = process.env.PORT || 1337;
app.listen(port, function () {
    console.log('ready on port ' + port);
});