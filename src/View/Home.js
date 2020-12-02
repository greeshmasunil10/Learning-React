import React, {useState,  useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductCard from '../Components/ProductCard';

function Home(){
    let content = null
    const { id } = useParams()
    const url =`http://localhost:5000/api/courses?page=1&limit=2`
    const [products,setProducts] = useState({
        loading:false,
        data:null,
        error: false
    })

    useEffect(() =>{
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setProducts({
                    loading:false,
                    data: response.data,
                    error: false
                })
            }).catch( () => {
                setProducts({
                    loading:false,
                    data: null,
                    error: true
                })
            })
    }, [url])

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
           <div>
                <h1 className="font-bold text-xl mb-3 text-red-500">Black Friday Sale</h1>
                <header className="font-bold p-4 text-l">Shop now!</header>
           </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default Home