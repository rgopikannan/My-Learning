var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    fName: {type: String, required: true},
    lName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    message: {type: String},
    userName: {type: String, required: true},
    userId: {type: String, required: true}
});

schema.post('friend', function (friend) {
    console.log()
    User.findById(friend.user, function (err, user) {
        user.friends.pull(friend);
        user.save();
    });
});

module.exports = mongoose.model('Friend', schema);