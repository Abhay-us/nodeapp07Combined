const mongoose = require('mongoose');

const user1Schema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    gender: { type: String, required: true, default: "male" },
    status: { type: Boolean, required: true, default: true }
});

const user1Table = mongoose.model('user1Table', user1Schema);

module.exports = user1Table;
