import React from "react"
import {Link, useLocation} from "react-router-dom"

function Header() {

    const {pathname} = useLocation()

    const colors = {
        titleColor: pathname === "/" ? "white" : "purple",
        cartColor: pathname === "/cart" ? "white" : "purple"
    }

    return (
        <header>
            <Link style={{textDecoration: 'none', color: colors.titleColor}} to="/"><h1 className="header--title">Photo Buy</h1></Link>
            <Link style={{textDecoration: 'none', color: colors.cartColor}} to="/cart"><h1 className="header--cart">Cart</h1></Link>
        </header>
    )
}

export default Header