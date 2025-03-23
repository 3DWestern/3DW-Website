"use client";
/* import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; */
// import { error } from 'console'; // not used 
import ComingSoon from ".././components/comingsoon";


export default function LoginForm () {
    return (
        <ComingSoon />
    );









/*  Commented out code for login 
    const [account, setAccount] = useState("");
    const [password, setPassWord] = useState("");
    const [error, setError] = useState(""); // error handling 
    const router = useRouter(); // routing after auth 

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!account.trim() || !password.trim()) { // prevent blanks 
            return;
        }

        // optional 
        if (!account.endsWith('uwo.ca')) {
            setError("Account email must end with uwo.ca.");
            return; 
        }

        const response = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ account, password }),
        });

        if (response.ok) {
            router.push('/dashboard');
        } else {
            const data = await response.json(); // returning JSON 
            setError(data.message);
        }

    };

    // TODO: Add question mark for FAQ pop in 
    // TODO: Add API route to handle login (+middleware?) and auth logic 
    return (
        <div className="mx-auto flex flex-col justify-start items-center h-[30rem] bg-white rounded-lg w-96 my-20">
            <div className="relative w-96 bg-red-700 flex flex-row justify-center items-center mx-auto my-8">
            <h1 className="text-black text-5xl font-bold">LOGIN</h1>
            <h1 className="absolute right-0 mr-10">Test</h1>
            </div>
            <form className="flex flex-col justify-center items-center gap-y-4" onSubmit={handleLogin}>
                
                <div className="flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black text-xl">Uwo email</h1></div>
                <input type="email" placeholder="3dwestern@uwo.ca" value={account} onChange={(e) => setAccount(e.target.value)} 
                className="text-black mb-2 h-12 w-80 rounded-md border border-black px-2" required />
                </div>

                <div className="flex flex-col justify-center items-center">
                <div className="self-start mb-2"><h1 className="text-black text-lg">Password</h1></div>
                <input type="password" placeholder="mypassword" value={password} onChange={(e) => setPassWord(e.target.value)} 
                className="text-black h-12 w-80 rounded-md border border-black px-2" required />
                <Link  href="/forgotpassword" className="underline text-black p-2">Forgot password?</Link>
                </div>
               
                <div className="text-white bg-black rounded-full text-center my-3">
                <button className="px-10 h-10 text-4xl" type="submit">LOGIN</button>
                </div>
            </form>

            {error && <p className="text-md text-red-500">{error}</p>} 
            <Link href="/signup" className="underline text-black mb-2 text-lg">Sign up</Link>
        </div>
    ); */
}