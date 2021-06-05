const { Router } = require('express');
const { commentsGet, commentsGetById, commentsPost, commentsPut, commentsDelete} = require('../apiServices/comments/controller');

const router = Router();

router.get('/', commentsGet)
    .get('/:id', commentsGetById)
    .put('/:id', commentsPut )
    .post('/', commentsPost )
    .delete('/:id', commentsDelete );

module.exports = router;