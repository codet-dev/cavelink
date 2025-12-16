import productService from "../service/user-product-service.js";

const get = async (req, res, next) => {
  try {
    const { username, id } = req.params;
    const result = await productService.get(username, id);
    res.status(200).json({ data: result });
  } catch (e) {
    next(e);
  }
};

export default { get };