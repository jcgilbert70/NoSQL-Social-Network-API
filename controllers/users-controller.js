const { Users } = require('../models');

const usersController = {

    // create user
    createUser({ body }, res) {
        Users.create(body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.json(err));
    },

    
    /*
        createUsers
    
        getAllUsers
    
        getUsersById
    
        updateUsers
    
        deleteUsers
    
        addFriend
    
        deleteFriend
    */

};

module.exports = usersController;