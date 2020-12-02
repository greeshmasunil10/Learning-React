import React, {useState,  useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequest';

function Home(){
    let content = null
    const { id } = useParams()
    const url =`http://localhost:5000/api/courses?page=1&limit=2`
    let products = useAxiosGet(url)

    if(products.loading){
        content = <div className="flex justify-center ">
                        <div className="loader" ></div>
                    </div>
    }
    if(products.error){
        content = <div className="flex justify-center ">
                        <div className="text-red-300" >An error occured</div>
                    </div>
    }
    if(products.data){
            content= products.data.map((product) => 
            <div key={product.id}>
                <ProductCard product= {product}/>
            </div>
        )
    }

    return(
        <div className="container mx-auto">
           <div className="ml-28">
                <h1 className="font-bold text-xl mb-3 text-red-500">Black Friday Sale</h1>
                <header className="font-bold p-4 text-l">Shop now!</header>
           </div>
            <div className="ml-24 mr-24 grid md:grid-cols-4 grid-cols-1 items-stretch">
                {content}
            </div>
        </div>
    )
}

export default Home