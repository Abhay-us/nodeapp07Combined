const user1Table = require('../models/usermodel');

exports.getUser = async (req, res) => {
    try {
        const user = await user1Table.find();
        res.json(user);

    } catch (error) {
        res.status(400).send("Error")
    }

}

exports.getUserById = async (req, res) => {
    try {
        const user = await user1Table.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(400).send("Error")
    }
}

exports.postUser = async (req, res) => {
    const { name, email, phoneNumber, gender, status } = req.body;
    try {
        const user = new user1Table({
            name, email, phoneNumber, gender, status
        });
        await user.save();

        res.json(user);
    } catch (error) {
        res.status(400).send("Error");
    }
}

exports.putUser = async (req, res) => {
    const { name, email, phoneNumber, gender, status } = req.body;
    try {
        const user = await user1Table.findById(req.params.id);
        user.name = name;
        user.email = email;
        user.phoneNumber = phoneNumber;
        user.gender = gender;
        user.status = status;

        // const updateUser = await user.save();
        // res.json(updateUser);

        await user.save();
        res.json(user);


    } catch (error) {
        res.status(400).send("Error");

    }
}
exports.deleteUser = async (req, res) => {
    try {
        const user = await user1Table.findById(req.params.id);

        await user.deleteOne();

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(400).send("Error");
    }
};