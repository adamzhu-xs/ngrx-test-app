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

module.exports = routes;
