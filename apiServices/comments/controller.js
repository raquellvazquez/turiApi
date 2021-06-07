const Comment = require('./model');
const schema = require ('./joiValidation');

const commentsGet = (req, res) => {
    
    let result = getComments();

    result.then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(404).json({
            err
        })
    })
}

const commentsGetById = (req, res) => {

    let result = getById(req.params.id)

    result.then(comment => {
        res.status(200).json(comment)
    })
    .catch(err => {
        res.status(400).json({
            err
        })
    })
    
}

const commentsPost = (req, res) => {

    const { error , value } = schema.validate(req.body);

    if(!error ) {

        let add = createComment(value);
        add.then( data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(404).json({
                err
            });
        })
    }
    else {
        const msg = error.details[0].message;
        res.status(400).json({message: msg})
    }
    
}

const commentsPut = (req, res) => {

    const { error , value } = schema.validate(req.body);

    if(!error ) {
        let result = updateComment(req.params.id , value);

        result.then( data => {
            res.status(201).json({message: 'comment was updated correctly'});
        })
        .catch(err => {
            res.status(404).json({
                err
            });
        })
    }
    else {
        const msg = error.details[0].message;
        res.status(400).json({message: msg})
    }
}

const commentsDelete = (req, res) => {

    let result = deleteComment(req.params.id);
    
    result.then(data => {
        res.status(200).json({message: 'Comment deleted'});
    })
    .catch(err => {
        res.status(404).json({
            err
        })
    })
}

// Helpers
async function getComments() {
    let commentList = await Comment.find();
    return commentList;
};

async function getById(id) {
    let comment = await Comment.findById(id).exec();
    return comment;
}

async function createComment(values) {
    let newComment = await new Comment({
        name : values.name,
        body : values.body,
        pts: values.pts,
        dataTownId : values.dataTownId,
        userId : values.userId,
        img:  values.img
    });
    return newComment.save();
}

async function updateComment(id, values) {
    let updated = await Comment.findByIdAndUpdate(id, {
        $set: {
            body : values.body,
            pts: values.pts,
            img:  values.img
        }
    }, { new : true});
    return updated;
}

async function deleteComment(id) {
    let eliminated = await Comment.findByIdAndRemove(id);
    return eliminated;
}


module.exports = {
    commentsGet,
    commentsGetById,
    commentsPost,
    commentsPut,
    commentsDelete,
}