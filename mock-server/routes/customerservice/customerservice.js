// base url /api/customerservice

const routes = require('express').Router();

var ocLanding = require('./ordercheck-landing.json');
routes.get('/ordercheck', (req, res) => {
    res.status(200).json(ocLanding);
});

var ocValidate = require('./ordercheck-validate.json');
routes.post('/ordercheck/validate', (req, res) => {
    res.status(200).json(ocValidate);
});

var ocConfirm = require('./ordercheck-confirm.json');
routes.post('/ordercheck', (req, res) => {
    res.status(200).json(ocConfirm);
});


var osLanding = require('./orderstatement-landing.json');
routes.get('/orderstatement', (req, res) => {
    res.status(200).json(osLanding);
});

var osValidate = require('./orderstatement-validate.json');
routes.post('/orderstatement/validate', (req, res) => {
    res.status(200).json(osValidate);
});

var osConfirm = require('./orderstatement-confirm.json');
routes.post('/orderstatement', (req, res) => {
    res.status(200).json(osConfirm);
});

module.exports = routes;
