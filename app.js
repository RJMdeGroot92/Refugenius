/**
 * Created by Mathijs on 2-1-2016.
 */
//modules
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser=require('cookie-parser');
var session = require('express-session');

//express
var app = express();

//middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: false
}));

//routes
app.use(require("./controller/router"));
app.use("/css",express.static(__dirname + "/css"));
//start server
var port = process.env.PORT || 1337;
app.listen(port, function () {
    console.log('ready on port ' + port);
});