import React, { useState } from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

    

function Header(){

    return(
        <div>
                <header className=" border-b bg-gray-200 text-xl p-5 flex justify-between ">
                    <span className="font-bold text-xl text-gray-600 ">
                    <Link to="/">
                         My Toy Store <FontAwesomeIcon 
                            icon={faGamepad} 
                            />
                     </Link>
                    </span>
                    <Navigation />
                </header>
                
        </div>
    )
}

export default Header