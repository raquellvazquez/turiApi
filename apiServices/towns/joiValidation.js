const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .min(1)
        .required(),

    state: Joi.string()
        .min(1)
        .required(),

    infoState: Joi.string()
        .required()
        .min(1),

    img: Joi.string()
        .required(),

    attractions: Joi.array()
        .max(3)
        .min(1)
        .items(
            Joi.object({
                name: Joi.string(),
                info: Joi.string(),
                img: Joi.string(),
                cost: Joi.string(),
                distance: Joi.string(),
                type: Joi.string(),
            })
        )
        .required(),
})

module.exports = schema; 