"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; 
import { CircleHelp } from 'lucide-react';

export default function LoginForm () {
    
    const [number, setNumber] = useState("");
    const [password, setPassWord] = useState("");
    const [error, setError] = useState(""); // error handling 
    const router = useRouter(); // routing after auth 

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const trimmedNum = number.trim();
        const trimmedPwd = password.trim();

        if (!trimmedNum || !trimmedPwd) { // prevent blanks 
            return;
        }

        // optional 
        if (!trimmedNum.startsWith('2513')) {
            setError("Account email must end with uwo.ca.");
            return; 
        }

        const response = await fetch("http:://localhost:5000/api/account/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                studentNumber: parseInt(trimmedNum, 10), 
                password: trimmedPwd, 
            }),
        });

        if (response.ok) {
            router.push('/dashboard');
        } else {
            const data = await response.json(); // returning JSON 
            setError(data.message);
        }

    };

    // TODO: Add question mark for FAQ pop in 
    // TODO: Adjust size of the login elements; login margins 
    // TODO: Add API route to handle login (+middleware?) and auth logic 
    return (
        <div className="mx-auto flex flex-col justify-start items-center h-[30rem] bg-white dark:bg-black/50 rounded-lg w-96 my-20">
            <div className="relative w-96 flex flex-row justify-center items-center mx-auto my-8">
            <h1 className="text-black dark:text-white text-5xl font-bold">LOGIN</h1>
            < CircleHelp className="absolute right-0 mr-10 text-black dark:text-white" />
            </div>
            <form className="flex flex-col justify-center items-center gap-y-4" onSubmit={handleLogin}>
                
                <div className="flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black dark:text-white text-xl">Student Number</h1></div>
                <input placeholder="123456789" value={number} onChange={(e) => setNumber(e.target.value)} 
                className="text-black dark:text-white dark:bg-black/0 mb-2 h-12 w-80 rounded-md border border-black dark:border-white px-2" required />
                </div>

                <div className="flex flex-col justify-center items-center">
                <div className="self-start mb-2"><h1 className="text-black text-lg dark:text-white">Password</h1></div>
                <input type="password" placeholder="mypassword" value={password} onChange={(e) => setPassWord(e.target.value)} 
                className="text-black dark:text-white dark:bg-black/0 h-12 w-80 rounded-md border border-black dark:border-white px-2" required />
                <Link  href="/forgotpassword" className="underline text-black dark:text-white p-2">Forgot password?</Link>
                </div>
               
                <div className="text-white bg-black dark:bg-gradient-to-r from fuschia-800 via-fuschia-700 to-purple-400 rounded-full text-center my-3">
                <button className="px-10 h-10 text-4xl" type="submit">LOGIN</button>
                </div>
            </form>

            {error && <p className="text-md text-red-500">{error}</p>} 
            <Link href="/signup" className="underline text-black dark:text-white mb-2 text-lg">Sign up</Link>
        </div>
    ); 
}
