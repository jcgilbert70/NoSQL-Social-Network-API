const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUser,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
  } = require('../../controllers/users-controller');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router