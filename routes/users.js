const express = require('express');
const router = express.Router();

const {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
} = require('../controller/userController');

router.get('/',getUsers);
router.get('/',getUserById);
router.get('/',createUser);
router.get('/',deleteUser);
router.get('/',updateUser);

module.exports = router;