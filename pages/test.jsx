import { useState } from "react"
import { FaUser } from "react-icons/fa";

export default function TestPage(){

    return(
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="w-[100px] h-[100px] bg-red-900 m-2 p-2">
                <p className="font-bold text-white">Hello world</p>
            </div>
            <div className="w-[100px] h-[100px] bg-green-600">
                <FaUser />
            </div>
        </div>
    )
}