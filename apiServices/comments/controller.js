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
    const userAuthenticated = req.user;

    if (!userAuthenticated.id){
        return res.status(401).json({message: 'You dont have the authorization to post a comment'});
    } else {

        const { error , value } = schema.validate(req.body);

        if(!error ) {
            let add = createComment(value, userAuthenticated);
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
}

const commentsPut = (req, res) => {
    const userAuthenticated = res.locals.user;

    const comment = getById(req.params.id);

    comment.then( info => {

        if (userAuthenticated.id === info.userId.id || userAuthenticated.isAdmin === true){

            const { error , value } = schema.validate(req.body);
    
            if(!error ) {
                let result = updateComment(req.params.id, value);
    
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
        } else {
            return res.status(401).json({message: 'You dont have the authorization to edit this comment'});
        }
    } )
    .catch( err => {
        res.status(404).json({
            err
        });
    })
}

const commentsDelete = (req, res) => {
    const userAuthenticated = res.locals.user;

    const comment = getById(req.params.id);

    comment.then( info => {

        if (userAuthenticated.id === info.userId.id || userAuthenticated.isAdmin === true){

            let result = deleteComment(req.params.id);
            
            result.then(data => {
                res.status(200).json({message: 'Comment deleted'});
            })
            .catch(err => {
                res.status(404).json({
                    err
                })
            })
        } else {
            return res.status(401).json({message: 'You dont have the authorization to delete this comment'});
        }
    })
    .catch( err => {
        res.status(404).json({
            err
        });
    })
}

// Helpers
async function getComments() {
    let commentList = await Comment.find().populate("dataTownId", "name").populate("userId", "name").exec();
    return commentList;
};

async function getById(id) {
    let comment = await Comment.findById(id).populate("userId", "name").populate("dataTownId", "name").exec();
    return comment;
}

async function createComment(values, userAuthenticated) {
    let newComment = await new Comment({
        name : values.name,
        body : values.body,
        pts: values.pts,
        dataTownId : values.dataTownId,
        userId : userAuthenticated.id,
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