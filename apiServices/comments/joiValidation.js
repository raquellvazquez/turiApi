const Joi = require('joi');

const schema = Joi.object({
    body: Joi.string()
        .min(1)
        .required(),

    pts: Joi.number()
        .required(),

    dataTownId: Joi.string()
        .required(),

    userId: Joi.string()
        .required(),

    img: Joi.string()
    .required(),
})

module.exports = schema;