import { getProductValidation } from "../validation/product-validation.js";
import { validate } from "../validation/validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";

const get = async (username, id) => {
  id = validate(getProductValidation, id);

  const product = await prismaClient.product.findFirst({
    where: {
      id: parseInt(id),
      user_id: username
    },
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
      size: true,
      image: true
    }
  });

  if (!product) {
    throw new ResponseError(404, "Product not found");
  }

  return product;
};

export default { get };
