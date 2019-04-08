var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Friend = require('../models/friend');

router.get('/', function (req, res, next) {
    Friend.find()
        .populate('user', 'firstName')
        .exec(function (err, friends) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: friends
            });
        });
});

router.post('/', function (req, res, next) {
    var friend = new Friend({
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        message: req.body.message,
        userName: req.body.userName,
        userId: req.body.userId

    });
    friend.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: '500 error',
                error: err
            });
        }
        res.status(201).json({
            message: 'Friend Added',
            obj: result
        });
    });
});
module.exports = router;
