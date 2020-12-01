import React from 'react'

function Footer(){
    return(
        <div>
                <footer  className="text-center text-xs bg-gray-200 p-3 absolute bottom-0 w-full z-0 ">
                {/* <footer  className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full border-t z-50"> */}
                    <span className="font-bold">
                    &copy; Copyright 2020
                    </span>
                </footer >
        </div>
    )
}

export default Footer