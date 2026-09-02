const mongoose = require('mongoose');

const activeUsers = mongoose.Schema({

    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isTermsFlag: { type: Boolean, require: true },
    isDeleted: { type: Boolean, require: true, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

const activeTable = mongoose.model('activeusers', activeUsers);

module.exports = activeTable;