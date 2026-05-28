import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "../src/utils/api";
import LoadingAnimation from "../src/components/loadingAnimation";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
import ImageSlideShow from "../src/components/imageSlideShow";
import priceFormat from "../src/utils/priceFormat";

export default function OverviewPage(){
    const parameters  = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [productLoading, setProductLoading] = useState(false);
    const [status, setStatus] = useState("loading")

    useEffect(
        () => {
            //Call Backend
            api.get("/products/"+parameters.productId).then(
                (response) => {
                    setProduct(response.data.product);
                    console.log(response.data.product);
                    setStatus("success");
                    console.log(status)
                }
            ).catch(
                (error) => {
                    setStatus("error");
                    toast.error(error?.response?.data?.message || "Error fetching product. Plz try again");
                    console.error("Error fetching product: ", error);
                }
            )
        },[]
    )

    return(
        <div className="w-full h-full flex justify-center items-center">
            {
                status === "loading" &&
                <LoadingAnimation />

            }

            {
                status === "error" &&
                <div className="w-full h-[300px] flex flex-col items-center justify-center">
                    <TbError404 className="text-9xl text-accent" />
                    <h1 className="text-2xl font-bold mb-4">
                        Failed to load product
                    </h1>
                    <Link to="/products" className="px-4 py-2 bg-accent text-white rounded">Back to Products</Link>
                </div>

            }

            {
                status == "success" && <div className="w-full h-full flex">
                    {/* Left Side */}
                    <div className="w-1/2 h-full flex justify-center items-center">
                        <ImageSlideShow  images={product.images}/>
                    </div>


                    {/* Right Side */}
                    <div className="w-1/2 h-full flex flex-col p-5">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <span className="mb-4">
                            {product.altNames.map(
                                (name, index) => {
                                    return(
                                        <span key={index} className="text-xl text-gray-500 font-bold">| {name}</span>
                                    )
                                }
                            )}
                        </span>

                        <h2 className="text-sm text-gray-500 m">{product.productId}</h2>
                        {/* Price section */}
                        <div className="w-full mt-5 flex flex-col">
                            <p className="text-3xl text-accent font-bold">
                            {
                                priceFormat(product.price)
                            }
                            </p>

                            {
                                product.labeledPrice > product.price &&
                                <span className="text-xl text-gray-500 line-through">
                                    {priceFormat(product.labeledPrice)}
                                </span>
                            }
                        </div>

                        {/* Brand and Model */}
                        <div className="flex mt-5">
                            <div className="bg-green-500/50 px-2 rounded-lg">
                                <span className="text-lg font-bold">Model:</span>
                                <span className="text-lg ml-2 text-gray-500 font-semibold">{product.model}</span>
                            </div>
                            <div className="bg-green-500/50 px-2 rounded-lg ml-5">
                            <span className="text-lg font-semibold ml-5">Category: </span>
                            <span className="text-lg text-gray-500 font-semibold">{product.category}</span>
                            </div>
                        </div>


                        {/* Discription */}
                        <p className="text-lg mt-5">{product.description}</p>
                        <div className="flex mt-5 gap-5">
                        <button className="w-62.5 h-16 bg-green-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-green-700 transition-colors duration-300">Add to Cart</button>
                        <button className="w-62.5 h-16 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-700 transition-colors duration-300">Buy Now</button>
                        <button ></button>
                        </div>





                    </div>



                </div>
                

            }
            
        </div>
    )
}