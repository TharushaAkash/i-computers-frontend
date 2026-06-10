import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../utils/api"

export default function UserData() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    useEffect(
        () => {
            const token = localStorage.getItem("token")
            if (token) {
                api.get("users/me", {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                })
                    .then(response => {
                        setUser(response.data)
                    }).catch(error => {
                        console.log(error)
                    })
            }
        }
        , [])
    return (
        <div>
            {
                user ? (
                    <div className="flex">
                        <img src={user.image} className="w-[30px] aspect-square" />

                        <select className="ml-2 bg-gray-200 text-center" onChange={(e) => {
                            if (e.target.value === "option2") {
                                navigate("/my-orders")
                            } else if (e.target.value === "option3") {
                                navigate("/settings")
                            } else if (e.target.value === "option4") {
                                localStorage.removeItem("token")
                                navigate("/login")
                            }
                            e.target.value = "option1"
                        }}>
                            <option value="option1" className="bg-second">{user.user.firstName}</option>
                            <option value="option2" className="bg-second">My Order</option>
                            <option value="option3" className="bg-second">Settings</option>
                            <option value="option4" className="bg-second">Logout</option>
                        </select>
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="text-white text-lg font-semibold mr-4">Login</Link>
                        <Link to="/register" className="text-white text-lg font-semibold">Register</Link>
                    </>
                )}



        </div>
    )
}