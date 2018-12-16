var mongoose = require('mongoose');

var User = mongoose.model('Users', {
    user: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

// var newUser = new User({
//     user: 'Kristopher   ',
//     email: 'kmontgomery91@gmail.com  '
// })

// newUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('unable to save user', e);
// });


module.exports = {User};