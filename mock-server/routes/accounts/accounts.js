// base url /api/accounts

const routes = require('express').Router();

var categories = require('./categories.json');
var accountsCASA = require('./accounts-CASA.json');
var accountsINV = require('./accounts-INV.json');
routes.get('/', (req, res) => {
    if (req.query.groupBy == 'category') {
        res.status(200).json(categories);
    } else if (req.query.category == 'CASA') {
        res.status(200).json(accountsCASA);
    } else if (req.query.category == 'INV') {
        res.status(200).json(accountsINV);
    } else {
        res.status(404).json({});
    }
});

var account1234 = require('./account-1234.json');
var account2222 = require('./account-2222.json');
var account4567 = require('./account-4567.json');
var account7890 = require('./account-7890.json');
routes.get('/:accountId', (req, res) => {
    if (req.params.accountId == '1234') {
        res.status(200).json(account1234);
    } else if (req.params.accountId == '2222') {
        res.status(200).json(account2222);
    } else if (req.params.accountId == '4567') {
        res.status(200).json(account4567);
    } else if (req.params.accountId == '7890') {
        res.status(200).json(account7890);
    } else {
        res.status(404).json({});
    }
});

var transactions = require('./transactions.json');
routes.get('/:accountId/transactions', (req, res) => {
    if (req.params.accountId == '1234') {
        res.status(200).json(transactions);
    } else if (req.params.accountId == '2222') {
        res.status(200).json(transactions);
    } else if (req.params.accountId == '4567') {
        res.status(200).json(transactions);
    } else if (req.params.accountId == '7890') {
        res.status(200).json(transactions);
    } else {
        res.status(404).json({});
    }
});

module.exports = routes;