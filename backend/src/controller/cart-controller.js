
import cartService from "../service/cart-service.js";

const create = async (req, res, next) => {
    try {
        const request = req.body;
        const sessionId = req.params.username
        const result = await cartService.create(request, sessionId);
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e);
    }
}

const get = async (req, res, next) => {
  try {
    const sessionId = req.params.username
    const result = await cartService.getCart(sessionId);
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};



export default{
    create,
    get
}