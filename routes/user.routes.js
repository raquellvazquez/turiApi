const { Router } = require('express');
const { usersGet, usersPost, usersPut, usersDelete, userGetById, LogInUser } = require('../apiServices/users/controller');
const jwtValidation = require('../auth/auth');
const authorization = require('../auth/authorization');
const router = Router();

const multer = require('../multer/multer');

router.get('/', usersGet)

router.put('/:id', jwtValidation, authorization, usersPut );

router.post('/',multer.single("image"), usersPost );

router.delete('/:id', jwtValidation, authorization, usersDelete );

router.get('/:id', userGetById );

router.post('/login', LogInUser );



module.exports = router;