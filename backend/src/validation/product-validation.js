
import Joi from "joi";

const createProductValidation = Joi.object({
  title: Joi.string().max(100).required(),
  description: Joi.string().max(1000),
  size: Joi.string().max(100),
  image: Joi.string().max(100),
  price: Joi.number().positive().default(0)
});

const getProductValidation = Joi.number().positive().required();

export {
  createProductValidation,
  getProductValidation
};