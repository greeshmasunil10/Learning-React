import React from 'react'
import {Link} from 'react-router-dom'

function ProductCard(props){
    return(
        <div className=" relative h-72 w-72 border border-opacity-25 m-4 rounded overflow-auto p-3 bg-white h-96 justify-center hover:bg-white hover:shadow-2xl transparent" >
            <Link to={`/products/${props.product.id}`}>
                <div
                    style= {{
                        'backgroundImage' : `url('${props.product.imageUrl}')`,
                    }}
                    className="w-52 h-52 bg-auto bg-blue bg-cover"
                >
                </div>
            </Link>
            <div className="static ml-3">
                <div className="font-bold text-l mb-3">
                    <Link to={`/products/${props.product.id}`}> 
                        {props.product.name}
                    </Link>
                </div>
                    <div className="font-bold mb-3  text-gray-500">
                            Price: <t className="font-bold text-gray-600">${props.product.price}</t>
                </div>
                <div>
                    <Link
                        to={`/products/${props.product.id}`}    
                        className="bg-blue-800 w-4/5 rounded text-white p-2 flex justify-center  absolute bottom-4 "
                    >
                        View
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard