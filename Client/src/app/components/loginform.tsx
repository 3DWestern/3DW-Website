"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; 
import { CircleHelp } from 'lucide-react';
import UsePostRequest from './hooks/postrequest';

export default function LoginForm () {
    
    const [formData, setFormData] = useState({number: '', password: ''});
    const [error, setError] = useState(""); // error handling 
    const router = useRouter(); // routing after auth 
    
    type data = {
        studentNumber: number;
        password: string;
    };
    
    // TODO: Change handling response depending on format of JSON returned by server!  
    const { postReq, response, error: postError } = UsePostRequest<data, { ok: boolean; message?: string }>(); // hook for POST 

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const trimmedNum = formData.number.trim();
        const trimmedPwd = formData.password.trim();

        if (!trimmedNum || !trimmedPwd) { // prevent blanks 
            return;
        }

        // optional 
        if (!trimmedNum.startsWith('2513') || trimmedNum.length != 9) {
            setError("Student number is not a UWO student number.");
            return; 
        }

        await postReq('http://localhost:5000/api/account/login', {
            studentNumber: parseInt(trimmedNum, 10),
            password: trimmedPwd,
        });
        
        if (response?.ok) { // change this depending on the format of the JSON
            router.push('/dashboard'); // TODO: build this using backend slugs? 
        } else {
            setError(postError || response?.message || "An error occurred.");
        }

    };

    // TODO: Add question mark for FAQ pop in 
    // TODO: Adjust size of the login elements; login margins 
    // TODO: Add API route to handle login (+middleware?) and auth logic; rate limiter?
    // optional: add shine border for login
    return (
        <div className="mx-auto flex flex-col justify-start items-center bg-white dark:bg-black/50 rounded-lg w-3/4 sm:w-96 my-20">
            <div className="relative mt-5 w-96 flex flex-row justify-center items-center sm:mx-auto sm:my-8">
            <h1 className="text-black dark:text-white text-4xl sm:text-5xl font-bold">LOGIN</h1>
            < CircleHelp className="absolute right-0 mr-20 sm:right-0 sm:mr-10 text-black dark:text-white" />
            </div>

            <form className="w-5/6 mt-4 sm:mt-2 flex flex-col justify-center items-center gap-y-4" onSubmit={handleLogin}>
                <div className="w-full sm:w-80 flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black dark:text-white text-xl sm:text-2xl">Student Number</h1></div>
                <input placeholder="123456789" value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value})} 
                className="text-black dark:text-white dark:bg-black/0 mb-2 h-12 w-full sm:w-80 rounded-md border border-black dark:border-white px-2" required />
                </div>

                <div className="w-full sm:w-80 flex flex-col justify-center items-center">
                <div className="self-start mb-2"><h1 className="text-black text-xl sm:text-2xl dark:text-white">Password</h1></div>
                <input type="password" placeholder="mypassword" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value})} 
                className="text-black dark:text-white dark:bg-black/0 h-12 w-full sm:w-80 rounded-md border border-black dark:border-white px-2" required />
                <Link  href="/forgotpassword" className="underline text-black dark:text-white p-2 text-lg mt-1">Forgot password?</Link>
                </div>
               
                <div className="text-white bg-black dark:bg-gradient-to-r dark:from-fuchsia-800 dark:via-fuchsia-700 dark:to-purple-400 rounded-full text-center my-1 sm:my-3">
                <button className="px-10 h-10 sm:text-4xl text-3xl" type="submit">LOGIN</button>
                </div>
            </form>

            {error && <p className="text-md text-red-500">{error}</p>} 
            <Link href="/signup" className="underline text-black dark:text-white my-5 sm:mb-3 text-lg sm:text-xl">Sign up</Link>
        </div>
    ); 
}
