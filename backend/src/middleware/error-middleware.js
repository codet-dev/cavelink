import { ResponseError } from "../error/response-error.js";
import { logger } from "../application/logging.js"; // kalau kamu sudah bikin logger pakai winston

const errorMiddleware = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res.status(err.status).json({
      errors: err.message,
    }).end();
  } else {
    logger.error(err.stack || err.message); 
    res.status(500).json({
      errors: err.message,
    }).end();
  }
};

export { errorMiddleware };
