import React, { useState } from 'react'
import Navigation from './Navigation'

    

function Header(){

    return(
        <div>
                <header className=" border-b bg-gray-100 text-xl p-5 flex justify-between">
                    <span className="font-bold text-xl text-gray-600">
                         My Toy Store
                    </span>
                    <Navigation />
                </header>
                
        </div>
    )
}

export default Header