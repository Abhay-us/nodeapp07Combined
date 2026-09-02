const activeTable = require('../models/activemodel');

exports.postUser = async (req, res) => {
    const { name, email, password, isTermsFlag } = req.body;
    try {
        const user = new activeTable({
            name: name, email: email, password: password, isTermsFlag: isTermsFlag, isDeleted: false,
        });
        await user.save();
        res.json(user);

    } catch (error) {
        res.status(400).send("Unable to Register User");
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await activeTable.find();
        res.json(user);
    } catch (error) {
        res.status(400).send("Unable to Get User");
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await activeTable.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(400).send("Unable to Get User");
    }
}


exports.update = async (req, res) => {
    const { name, email, password, isTermsFlag } = req.body;
    try {
        const user = await activeTable.findById(req.params.id);
        user.name = name;
        user.email = email;
        user.password = password;
        user.isTermsFlag = isTermsFlag;
        isDeleted = false;
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(400).send("Error");

    }
}