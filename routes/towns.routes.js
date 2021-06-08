const { Router } = require('express');
const { townsGet, townsPost, townsPut, townsDelete, townsGetById} = require('../apiServices/towns/controller');

const router = Router();

router.get('/', townsGet)
    .get('/:id', townsGetById)
    .put('/:id', townsPut )
    .post('/', townsPost )
    .delete('/:id', townsDelete );

module.exports = router;