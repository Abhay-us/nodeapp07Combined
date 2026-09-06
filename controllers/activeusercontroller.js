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

exports.getUserByEmail = async (req, res) => {
    console.log(req.body);
    const { email } = req.body;
    try {
        const user = await activeTable.findOne({ email: email });
        res.json(user);
    } catch (error) {
        res.status(400).send("Unable To Fetch User");
    }
}

exports.update = async (req, res) => {
    const { name, email, isTermsFlag } = req.body;
    try {
        const user = await activeTable.findById(req.params.id);
        user.name = name;
        user.email = email;
        user.isTermsFlag = isTermsFlag;
        user.isDeleted = false;
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(400).send("Error");

    }
}

exports.updatePassword = async (req, res) => {
    const { password, repeatedPassword } = req.body;
    try {
        if (password !== repeatedPassword) {
            return res.status(400).send("Password Not Match")
        }
        const user = await activeTable.findById(req.params.id);

        if (!user) {
            return res.status(400).send("User Not found");
        }

        user.password = password;

        await user.save();

        res.json(user);

    } catch (error) {
        res.status(400).send("Error");
    }
}

exports.softDelete = async (req, res) => {
    try {
        const user = await activeTable.findById(req.params.id);
        user.isDeleted = true;
        await user.save();
        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        res.status(400).send("Unable to delete user");
    }
}

exports.hardDelete = async (req, res) => {
    try {
        const user = await activeTable.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "User permanently deleted"
        });

    } catch (error) {
        res.status(400).send("Unable to delete user");
    }
}