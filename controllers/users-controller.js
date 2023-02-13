const { Users } = require('../models');

const usersController = {

    // create user
    createUser({ body }, res) {
        Users.create(body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.json(err));
    },

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




    /*    
        getUsersById
    
        updateUsers
    
        deleteUsers
    
        addFriend
    
        deleteFriend
    */

};

module.exports = usersController;