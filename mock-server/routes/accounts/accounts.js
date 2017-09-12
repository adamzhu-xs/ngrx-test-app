// base url /api/accounts

const routes = require('express').Router();

var accounts = require('./accounts.json');
routes.get('/', (req, res) => {
    res.status(200).json(accounts);
});

var account1234 = require('./account-1234.json');
routes.post('/:accountId', (req, res) => {
    res.status(200).json(account1234);
});

module.exports = routes;