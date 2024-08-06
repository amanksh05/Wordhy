"use client"
import { FaGoogle } from "react-icons/fa6";
import { useState } from "react"
import { loginGoogle } from "@/Appwrite/Auth";

function page() {
    const [email, setEmail] = useState("")

    const handleLogin = async () => {
        await loginGoogle()
    }


    return (
        <main className="flex min-h-screen flex-col items-center justify-center">

            <div className=" border-2 flex flex-col items-center justify-center w-1/4  p-8 rounded-lg gap-6 border-neutral-800">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="text-2xl font-semibold">
                        Create an account
                    </div>
                    <div className="text-base font-medium text-neutral-500">
                        Enter your email below to create your account
                    </div>
                </div>

                <div className="flex flex-col w-full gap-3">
                    <input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 pl-4 rounded-lg bg-transparent border-2 border-neutral-700"
                    />
                    <button className="bg-neutral-100 text-black p-2 text-lg font-semibold rounded-lg">Sign In with Email</button>
                </div>

                <div className="uppercase text-sm text-neutral-400">
                    or continue with
                </div>

                <div className="w-full">
                    <button
                        onClick={handleLogin}
                        className="bg-transparent border-2 w-full flex flex-row items-center justify-center gap-4 p-2 rounded-lg border-neutral-700 text-neutral-100"
                    >
                        <FaGoogle />Google
                    </button>
                </div>
            </div>
        </main>
    )
}

export default page