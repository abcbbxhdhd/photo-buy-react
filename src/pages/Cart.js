import React, { useContext } from "react"
import {ImageContext} from "../context/imageContext"
import CartItem from "../components/CartItem"

function Cart() {
    const {cart, removeImage, emptyCart} = useContext(ImageContext)

    function checkout() {
        setTimeout(() => {
            emptyCart()
            console.log("Successfully ordered..")
        }, 2000)
    }
    console.log(cart)
    const cartItems = cart.map(cartItem => {
        return (
            <CartItem key={cartItem.id} url={cartItem.url} removeImage={() => removeImage(cartItem.id)}/>
        )
    })

    return (
        <div className="cart--page">
            <h1 className="checkout--title">Check out</h1>
            {cart.length > 0 && cartItems}
            <h2 className="price--total">Total: ${cart.length > 0 ? `${cart.length * 5.99}` : "0.00"}</h2>
            {cart.length > 0 && <button onClick={checkout} className="button--checkout">Place Order</button>}
            {cart.length === 0 && <h3 className="no--items">You have no items in your cart.</h3>}
        </div>        
    )
}

export default Cart