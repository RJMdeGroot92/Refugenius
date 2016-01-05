/**
 * Created by Mathijs on 2-1-2016.
 */
//modules
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});
router.get('/news', function(req, res) {
    res.render('news');
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
    res.render('createJob');
});

module.exports = router;