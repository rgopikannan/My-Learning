var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Bill = require('../models/bill');

router.get('/', function (req, res, next) {
    Bill.find()
        .populate('user', 'email')
        .exec(function (err, bills) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: bills
            });
        });
});

router.post('/', function (req, res, next) {
    var bill = new Bill({
        desc: req.body.desc,
        amt: req.body.amt,
        paidByYou: req.body.paidByYou,
        email: req.body.email,
        splitEqually: req.body.splitEqually,
        billDate: req.body.billDate,
        userName: req.body.userName,
        userId: req.body.userId

    });
    bill.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: '500 error',
                error: err
            });
        }
        res.status(201).json({
            message: 'Bill Added',
            obj: result
        });
    });
});
module.exports = router;
