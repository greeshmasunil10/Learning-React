import React, {useState,  useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Product(){
    const { id } = useParams()
    const url =`http://localhost:5000/api/courses/${id}`
    const [product,setProduct] = useState(null)
    let content = null

    useEffect(() =>{
        axios.get(url)
            .then(response => {
                setProduct(response.data)
            })
    }, [url])
    
    if(product){
        return(
            content= 
                    <span>
                        <h1 className="text-2xl font-bold mb-3">
                            {product.name}
                        </h1>

                        <div> 
                            <img src={product.imageUrl}
                                    alt={product.name}
                                    width="400" height="400"
                                />
                        </div>

                        <div className="text-2xl font-bold mb-3">
                            {product.price} CAD.
                        </div>

                        <div>
                            {product.description}
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
// {/* <div>
//     <h1 className="text-2xl font-bold mb-3">
//         {product.name}
//     </h1>
//     <div>
//         <img src={product.images[0].imageUrl}
//             alt={product.name}
//         />
//     </div>
//     <div className="text-2xl font-bold mb-3">
//         {product.price} CAD.
//     </div>
//     <div>
//         {product.description}
//     </div>
// </div> */}

export default Product

