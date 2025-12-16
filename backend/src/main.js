import {web} from "./application/express.js"
import { logger } from "./application/logging.js"

web.listen(3000, ()=>{
    logger.info("App Start")
})