
import { createProductValidation, getProductValidation } from "../validation/product-validation.js";
import { validate } from "../validation/validation.js";
import { prismaClient } from "../application/database.js";


const create = async (user, request) => {
    const product =  validate(createProductValidation, request);

    product.user_id = user.username

    return prismaClient.product.create({
        data: product,
        select: {
            id: true,
            title: true,
            description: true,
            price: true,
            size: true,
            image: true
        }
    })
}


const get = async(user, id) =>{
    id = validate(getProductValidation, id);
    

    const product = await prismaClient.product.findFirst({
        where: {           
            id : parseInt(id),
            user_id : user.username
             
        },
        select: {
            id: true,
            title: true,
            description: true,
            price: true,
            size: true,
            image: true
        }
    })

    if(!product){
        throw new ResponseError(404,'product is not found')
    }

    return product


}

export default {
    create,
    get
}