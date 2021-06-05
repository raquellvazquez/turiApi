const { Router } = require('express');
const { commentsGet, commentsPost, commentsPut, commentsDelete} = require('../apiServices/comments/controller');

const router = Router();

router.get('/', commentsGet)
    .put('/:id', commentsPut )
    .post('/', commentsPost )
    .delete('/', commentsDelete );

module.exports = router;