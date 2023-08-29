const UserModel = require("../models/User");

exports.addUser = (req, res, next) => {
    const user = new UserModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    });
    user.save()
        .then(() => {
            res.status(201).json({
                userId: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
            });
        })
        .catch((error) => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
    UserModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Utilisateur supprimé" }))
        .catch((error) => res.status(401).json({ error }));
};

exports.editUser = (req, res, next) => {
    UserModel.updateOne(
        { _id: req.params.id },
        {
            $set: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
            },
        }
    )
        .then(() => res.status(200).json({ message: "Utilisateur modifié" }))
        .catch((err) => res.status(400).json({ err }));
};

exports.getUsers = (req, res, next) => {
    UserModel.find()
        .then((users) => res.status(200).json(users))
        .catch((error) => res.status(400).json({ error }));
};

exports.searchUser = (req, res, next) => {
    const searchString = req.params.query;
    UserModel.find({
        $or: [
            { firstname: { $regex: searchString, $options: "i" } },
            { lastname: { $regex: searchString, $options: "i" } },
        ],
    })
        .then((users) => res.status(200).json(users))
        .catch(() =>
            res.status(404).json({ message: "Mongoose n'a rien trouvé" })
        );
};
