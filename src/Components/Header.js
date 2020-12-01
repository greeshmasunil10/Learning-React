import React, { useState } from 'react'
import Navigation from './Navigation'

    

function Header(){

    return(
        <div>
                <header className=" border-b bg-gray-100 text-xl p-3 flex justify-between">
                    <span className="font-bold text-xl text-gray-600">
                         Mississauga
                    </span>
                    <Navigation />
                </header>
                
        </div>
    )
}

export default Header