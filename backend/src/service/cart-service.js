
import { validate } from "../validation/validation.js";
import { createCartValidation } from "../validation/cart-validation.js";
import { prismaClient } from "../application/database.js";


const create = async (request, sessionId) =>{
    let cart = validate(createCartValidation, request)

    let findCart = await prismaClient.cart.findFirst({
        where : {
            sessionId : sessionId
        }
    })

    if(!findCart){
        findCart = await prismaClient.cart.create({
            data: {
                sessionId : sessionId
            }
        })
    }
    const productId = cart.productId

    const existingItem = await prismaClient.cartItem.findFirst({
        where: { 
            cartId: findCart.id, 
            productId: productId
        },
    });

    const quantity = cart.quantity

    if (existingItem) {
      await prismaClient.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
      });
    } else {
        await prismaClient.cartItem.create({
            data: { 
                cartId: findCart.id, 
                productId, 
                quantity 
            }
        });
    }

    return prismaClient.cart.findUnique({
        where: { id: findCart.id },
        include: { items: { include: { product: true } } }
      });


}



const getCart = async (sessionId) => {
  if (!sessionId) {
    throw new Error("Session ID tidak ditemukan");
  }

  const cart = await prismaClient.cart.findFirst({
    where: { sessionId: sessionId },
    include: {
      items: {
        include: { product: true },
      },
    },
  });

  if (!cart || cart.items.length === 0) {
    return { message: "Cart kosong", items: [], total: 0 };
  }

  const items = cart.items.map((item) => ({
    name: item.product.title,
    quantity: item.quantity,
    price: item.product.price,
    subtotal: item.product.price * item.quantity,
  }));

  const total = items.reduce((sum, item) => sum + item.subtotal, 0);

  return { items, total };
};

export default {
    create,
    getCart
}