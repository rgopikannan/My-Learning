var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    desc: {type: String, required: true},
    amt: {type: String, required: true},
    paidByYou: {type: Boolean},
    splitEqually: {type: Boolean},
    email: {type: String, required: true},
    billDate: {type: Number, required: true},
    userName: {type: String, required: true},
    userId: {type: String, required: true}
});

schema.post('bill', function (bill) {
    User.findById(bill.user, function (err, user) {
        user.bills.pull(bill);
        user.save();
    });
});

module.exports = mongoose.model('Bill', schema);