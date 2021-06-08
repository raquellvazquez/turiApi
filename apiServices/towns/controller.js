const Town = require('./model');
const schema = require ('./joiValidation');

const townsGet = (req, res) => {
    
    let result = getTowns();

    result.then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(404).json({
            err
        })
    })
}

const townsGetById = (req, res) => {

    let result = getById(req.params.id)

    result.then(town => {
        res.status(200).json(town)
    })
    .catch(err => {
        res.status(400).json({
            err
        })
    })
    
}

const townsPost = (req, res) => {

    const { error , value } = schema.validate(req.body);

    if(!error ) {

        let add = createTown(value);
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
        res.status(400).send(msg)
    }
    
}

const townsPut = (req, res) => {

    const { error , value } = schema.validate(req.body);

    if(!error ) {
        let result = updateInfoTown(req.params.id , value);

        result.then( data => {
            res.status(201).send(`Info for ${data.name} was updated correctly `);
        })
        .catch(err => {
            res.status(404).json({
                err
            });
        })
    }
    else {
        const msg = error.details[0].message;
        res.status(400).send(msg)
    }
}

const townsDelete = (req, res) => {

    let result = deleteTown(req.params.id);
    
    result.then(data => {
        res.status(200).send(`${data.name} Deleted`)
    })
    .catch(err => {
        res.status(404).json({
            err
        })
    })
}

// Helpers
async function getTowns() {
    let townList = await Town.find();
    return townList;
};

async function getById(id) {
    let town = await Town.findById(id).exec();
    return town;
}

async function createTown(values) {
    let newTown = await new Town({
        name : values.name,
        state : values.state,
        infoState: values.infoState,
        img : values.img,
        pts : values.pts,
        attractions:  values.attractions
    });
    return newTown.save();
}

async function updateInfoTown(id, values) {
    let updated = await Town.findByIdAndUpdate(id, {
        $set: {
            name : values.name,
            state : values.state,
            infoState: values.infoState,
            img : values.img,
            pts : values.pts,
            attractions:  values.attractions
        }
    }, { new : true});
    return updated;
}

async function deleteTown(id) {
    let eliminated = await Town.findByIdAndRemove(id);
    return eliminated;
}

module.exports = {
    townsGet,
    townsGetById,
    townsPost,
    townsPut,
    townsDelete,
}