import Joi = require('joi');

const createCatSchema = {
    name: Joi.string().required(),
    age: Joi.number().required(),
    breed: Joi.string().required(),
};
