const { Users } = require('../models');

const usersController = {

    // create a user
    createUser({ body }, res) {
        Users.create(body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.json(err));
    },

    // get all users
    getAllUsers(req, res) {
        Users.find({})
            .populate({
                path: "friends",
                select: "-__v",
            })
            .select("-__v")
            .sort({ _id: -1 })
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // get a user by id
    getUserById({ params }, res) {
        Users.findOne({ _id: params.id })
            .populate({
                path: "thoughts",
                select: "-__v",
            })
            .populate({
                path: "friends",
                select: "-__v",
            })
            .select("-__v")
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res
                        .status(404)
                        .json({ message: "No user with this id" });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // update a user by id
    updateUser({ params, body }, res) {
        Users.findOneAndUpdate({ _id: params.id }, body, {
            new: true,
            runValidators: true,
        })
            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({ message: "No user with this id" });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => res.json(err));
    },



    /*    
       
    
        updateUsers
    
        deleteUsers
    
        addFriend
    
        deleteFriend
    */

};

module.exports = usersController;