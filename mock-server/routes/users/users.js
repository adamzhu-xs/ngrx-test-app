// base url /api/user

const routes = require('express').Router();

var login = false;
var user = require('./user.json');

routes.get('/', (req, res) => {
    if (login) {
        res.status(200).json(user);
    } else {
        res.status(200).json({
            authenticated: false
        });
    }
});

routes.post('/:userId/signin', (req, res) => {
    login = true;
    res.status(200).json(user);
});

var profile = require('./profile.json');
routes.post('/profile', (req, res) => {
    if (login) {
        res.status(200).json(profile);
    } else {
        res.status(200).json({
            authenticated: false
        });
    }
});

routes.post('/:userId/signout', (req, res) => {
    login = false;
    res.status(200).json({
        authenticated: false,
        sessionDuration: 60000
    });
});

module.exports = routes;
