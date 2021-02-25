import Joi = require('@hapi/joi');

export const createCatSchema = {
    name: Joi.string().required(),
    age: Joi.number().required(),
    breed: Joi.string().required(),
};
