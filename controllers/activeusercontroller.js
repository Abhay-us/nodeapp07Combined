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
    const { password, confirmPassword } = req.body;
    console.log(password, confirmPassword);
    try {
        if (!password || !confirmPassword) {
            return res.status(404).send("Password & confirmPassword is required");
        }

        if (password !== confirmPassword) {
            return res.status(404).send("Password Not Match")
        }

        // const user = await activeTable.findById(req.params.id);
        const user = await activeTable.findOne({ _id: req.params.id, isDeleted: false });

        if (!user) {
            return res.status(404).send("User Not found");
        }

        user.oldPassword = user.password;
        user.password = password;
        user.updatedAt = new Date();

        await user.save();

        res.status(200).json(user);

    } catch (error) {
        res.status(500).send("Error: Password did not Update!");
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