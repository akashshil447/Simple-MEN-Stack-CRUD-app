const express = require('express');
const router = express.Router();
const {getUser,postUser,deleteUser} = require('../controllers/user-controller')


router.get('/', getUser)

router.post('/',postUser )

router.delete('/:id',deleteUser)


module.exports = router;