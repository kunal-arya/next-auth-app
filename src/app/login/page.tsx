"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import { axios } from "axios"

const Login = () => {
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })


    const onLogin = async () => {
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">Login</h1>
            <hr />
            <label className="p-2 m-2 mb-1" htmlFor="email">Email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
            <label className="p-2 m-2 mb-1" htmlFor="password">Password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="text"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup here</button>
            <Link href="/signup">Visit Signup Page</Link>
        </div>
    )
}

export default Login