const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUsers,
    addFriend,
    deleteFriend
  } = require('../../controllers/users-controller');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUsers);
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router