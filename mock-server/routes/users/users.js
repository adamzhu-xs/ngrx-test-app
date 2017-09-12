// base url /api/user

const routes = require('express').Router();

var login = false;
var adam = require('./user.json');

routes.get('/', (req, res) => {
    if (login) {
        res.status(200).json(adam);
    } else {
        res.status(200).json({
            authorized: false
        });
    }
});

routes.post('/:userId/signin', (req, res) => {
    login = true;
    res.status(200).json(adam);
});

routes.post('/:userId/signout', (req, res) => {
    login = false;
    res.status(200).json({
        authorized: false
    });
});

module.exports = routes;