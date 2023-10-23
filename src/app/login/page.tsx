"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"


const Login = () => {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);

            if (response.status === 200) {
                console.log("login success", response.data);
                toast.success("Login success");
                router.push("/profile");
            }

        } catch (err: any) {
            console.log("login failed", err);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }, [user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">{loading ? "Processing" : "Login"}</h1>
            <hr />
            <label className="p-2 m-2 mb-1" htmlFor="email">Email</label>
            <input
                className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
            <label className="p-2 m-2 mb-1" htmlFor="password">Password</label>
            <input
                className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="text"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <button onClick={onLogin} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                disabled={btnDisabled}
            >Login here</button>
            <Link href="/signup">Visit Signup Page</Link>
        </div>
    )
}

export default Login