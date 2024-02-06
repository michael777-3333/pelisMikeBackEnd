import Stripe from "stripe";
import { updateUser } from "./user.controllers.js";
const stripe = new Stripe(
  "sk_test_51OgU4IBgqdyiErOwlJznxKZyQKRBVgETQxtmxKTsxLcQNAHFUSKzyk93W7oVEHMaNE66EUHMHOuJqjH5e0ryrUbM0071hZuzUw"
);

export const createOrder = async (req, res) => {
    
    const data= req.body
    console.log(data);
 const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          product_data: {
            name: data.title,
            description: data.description,
          },
          currency:data.currency,
          unit_amount:data.unit_amount
        },
        quantity:1
      },
    ],

    mode:'payment',
    success_url:'https://pelis-mike-e6rr.vercel.app/#/start/movies',
    cancel_url:'https://pelis-mike-e6rr.vercel.app/#/start'
  });

  return res.json(session)
};

