import React, {useState,  useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useAxiosGet } from '../Hooks/HttpRequest';

function Product(){
    const { id } = useParams()
    const url =`http://localhost:5000/api/courses/${id}`
     let content = null
     let product = useAxiosGet(url)

    if(product.loading){
        content = <div className="flex justify-center ">
                        <div className="loader" ></div>
                    </div>
    }
    if(product.error){
        content = <div className="flex justify-center ">
                        <div className="text-red-300" >An error occured</div>
                    </div>
    }
    if(product.data){
        return(
            content= 
                    <span>
                        <h1 className="text-2xl font-bold mb-3">
                            {product.data.name}
                        </h1>

                        <div> 
                            <img src={product.data.imageUrl}
                                    alt={product.name}
                                    width="400" height="400"
                                />
                        </div>

                        <div className="text-2xl font-bold mb-3">
                            {product.data.price} CAD.
                        </div>

                        <div>
                            {product.data.description}
                        </div>
                    </span> 
        )
    }
    return(
        <div>
            {content}
        </div>
        )

}
export default Product

