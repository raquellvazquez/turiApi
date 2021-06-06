const { Router } = require('express');
const { townsGet, townsPost, townsPut, townsDelete} = require('../apiServices/towns/controller');
const jwtValidation = require('../auth/auth');
const router = Router();

router.get('/', townsGet)
    .put('/:id', jwtValidation, townsPut )
    .post('/', jwtValidation, townsPost )
    .delete('/', townsDelete );

module.exports = router;