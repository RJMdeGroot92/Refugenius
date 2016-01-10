/**
 * Created by Mathijs on 2-1-2016.
 * c
 */
//modules
var express = require('express');
var router = express.Router();
var sql= require("../database/sql");
var hash=require("node_hash");
//getters
router.get('/', function(req, res) {
    sess= req.session;
    res.render('index');

});
router.get('/news', function(req, res) {
    res.render('news',{
    username:req.session.username
});
});
router.get('/available', function(req, res) {
    res.render('available');
});
router.get('/jobsinarea', function(req, res) {
    res.render('jobsinarea');
});
router.get('/jobs', function(req, res) {
    res.render('jobs');
});
router.get('/myProfile', function(req, res) {
    res.render('myProfile');
});
router.get('/register', function(req, res) {
    res.render('register');
});
router.get('/createJob', function(req, res) {

        res.render('createJob',{
                 }
    );
});
//post
router.post('/', function(req, res){
    var user = req.body.username;
    var hashedPassword = hash.sha256(req.body.password);
    //console.log(hashedPassword);
    //console.log(user.toString()+"+"+hashedPassword.toString());
    sql.loginQuery(user, function(result){
        if(result.length>0 && hashedPassword == result[0].Password){
            req.session.username=user;
            console.log('succes');
            res.render('news',{

                username: user
            });
        }else{
            console.log('wrongpass');
        };

    });
});

module.exports = router;