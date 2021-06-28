const { Router } = require('express');
const { commentsGet, commentsGetById, commentsPost, commentsPut, commentsDelete} = require('../apiServices/comments/controller');
const jwtValidation = require('../auth/auth');
const authorization = require('../auth/authorization');
const router = Router();

router.get('/', commentsGet)
    .get('/:id', commentsGetById)
    .put('/:id', jwtValidation, authorization, commentsPut )
    .post('/', jwtValidation, commentsPost )
    .delete('/:id', jwtValidation, authorization, commentsDelete );

module.exports = router;