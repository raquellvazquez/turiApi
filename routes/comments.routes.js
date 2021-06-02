const { Router } = require('express');
const { commentsGet, commentsPost, commentsPut, commentsDelete} = require('../controllers/coments.controllers');

const router = Router();

router.get('/', commentsGet)
    .put('/:id', commentsPut )
    .post('/', commentsPost )
    .delete('/', commentsDelete );

module.exports = router;