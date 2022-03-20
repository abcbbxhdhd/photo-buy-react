import React from "react"

function CartItem(props) {
    return (
        <div className="cart--item">
            <div className="cart--item--left">
                <i onClick={props.removeImage} className="ri-delete-bin-line"></i>
                <img className="cart--item--image" src={props.url} />
            </div>
            <div className="cart--item--right">
                <span className="cart--item--price">$5.99</span>
            </div>
        </div>
    )
}

export default CartItem