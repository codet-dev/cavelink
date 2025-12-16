import Joi from "joi";

const registerUserValidation = Joi.object({
    username : Joi.string().min(3).max(100).required(),
    password: Joi.string().min(3).max(100).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    name: Joi.string().min(3).max(100).required(),
})
const loginUserValidation = Joi.object({
    username : Joi.string().min(3).max(100).required(),
    password: Joi.string().min(3).max(100).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

const getUserValidation = Joi.string().min(3).max(100).required()


const updateUserValidation = Joi.object({
    username : Joi.string().min(3).max(100).required(),
    password: Joi.string().min(3).max(100).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).optional(),
    name: Joi.string().min(3).max(100).optional(),
})

export {
    registerUserValidation,
    loginUserValidation,
    getUserValidation,
    updateUserValidation
}