// base url /api/accounts

const routes = require('express').Router();

var accounts = require('./accounts.json');
routes.get('/', (req, res) => {
    res.status(200).json(accounts);
});

var account1234 = require('./account-1234.json');
var account4567 = require('./account-4567.json');
var account7890 = require('./account-7890.json');
routes.get('/:accountId', (req, res) => {
    if (req.params.accountId == '1234') {
        res.status(200).json(account1234);
    } else if (req.params.accountId == '4567') {
        res.status(200).json(account4567);
    } else if (req.params.accountId == '7890') {
        res.status(200).json(account7890);
    } else {
        res.status(404).json({});
    }
});

module.exports = routes;