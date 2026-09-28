const mongoose = require('mongoose');

const activeUsers = mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    oldPassword: { type: String, default: "admin123" },
    isTermsFlag: { type: Boolean, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

const activeTable = mongoose.model('activeusers', activeUsers);

module.exports = activeTable;