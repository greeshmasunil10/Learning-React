import React, { useState } from 'react'
import Navigation from './Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
    

function Header(){

    return(
        <div>
                <header className=" border-b bg-gray-100 font-bold text-xl p-3 flex justify-between text-center">
                    <span className="font-bold">
                         Website Name
                    </span>
                    <Navigation />
                    
                </header>
                
        </div>
    )
}

export default Header