import React from 'react'
import {
    Link
  } from "react-router-dom";


function NavigationMenu(props){
    return(
    <div>

        <div className="font-bold py-3">
            Menu
        </div>
        <ul className="p-3" onClick={props.closeMenu}>
            <li>
                <Link to="/" className="text-blue-500 py-3 border-t border-b block">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/products" className="text-blue-500 py-3 border-b block">
                    Products
                </Link>
            </li>
            <li>
                <Link to="/about" className="text-blue-500 py-3 border-b block">
                    About Us
                </Link>
            </li>
        </ul>

    </div>
    )
}
export default NavigationMenu