import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProductElement from '../components/Cart/CartProductElement';
import { getUserCart } from '../store/slices/cart.slice';
import getConfig from '../utils/getConfig';



const Cart = () => {

    const dispatch = useDispatch()

   const cartProducts = useSelector(state => state.cart)

   
   console.log(cartProducts);

  

   const handleCheclOut = () => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
    const data = {
        street: "Plantamura",
        colony: "South",
        zipCode: 5500,
        city: "Mendoza",
        references: "Some references"
       }
    axios.post(URL, data, getConfig())
    .then(res => {
        console.log(res.data)
        dispatch(getUserCart()) 
    } )
    .catch(err => console.log(err))
   }

  return (
    <section>
        <h2>Cart</h2>
        <div>
            {
               cartProducts?.map(product => (
                <CartProductElement
                    key={product.id}
                    product={product}
                />
               ))
            }
        </div>
        <footer>
            <span>Total:</span>

            {/* podria usarse un useEffect. para el calculo del total. */}
            <p>
                {
                    cartProducts ?
                    cartProducts.reduce((acc, cv) => {
                        return cv.price * cv.productsInCart.quantity + acc
                    }, 0)
                    :
                    0
                }
            </p>
            <button onClick={handleCheclOut}>CheckOut</button>
        </footer>

    </section>
  )
}

export default Cart