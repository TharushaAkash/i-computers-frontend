import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ProductCard from "../src/components/productCard";

export default function ProductsPage(){

    const [products, setProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(
        () => {
            if(!productsLoading){
                //call backend Api
                axios.get(import.meta.env.VITE_API_URL+"/products", {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }).then(
                    (response) => {
                        setProducts(response.data.products);
                        setProductsLoading(true);
                    }
                ).catch(
                    (error) => {
                        toast.error("Error fetching products. Plz try again");
                        console.error("Error fetching products: ", error);
                    }
                )
            }
        },[productsLoading]
    )
    return(
        <div className="w-full h-full flex justify-center flex-wrap pb-24 overflow-y-auto">
            {
                products.map(
                    (product, index) => {
                        return(
                           <ProductCard key={index} product={product} />

                        )
                    }
                )
            }
    
        </div>
    )
}