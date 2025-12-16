import Joi from "joi";

const createCartValidation = Joi.object({
    quantity :  Joi.number().positive().required(),
    productId :  Joi.number().positive().required()
})

export  {
    createCartValidation
}