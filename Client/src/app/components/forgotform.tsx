"use client";
import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import Link from 'next/link'; 

// forgot password form: send them an email and a link to reset it?
export default function ForgotForm () {
    
    const [account, setAccount] = useState("");
    const [error, setError] = useState(""); // error handling 

    const handleLogin = async (e: React.FormEvent) => { // TODO: Ask about API for forgot password 
        e.preventDefault();
       
        const trimmedAccount = account.trim();

        if (!trimmedAccount) { // prevent blanks 
            return;
        }

        // check suffix of email
        if (!trimmedAccount.endsWith('uwo.ca')) {
            setError("Account email must end with uwo.ca.");
            return; 
        }
        // TODO: Handle response 
    };


    return (
        <div className="mx-auto flex flex-col justify-start items-center bg-white dark:bg-black/50 rounded-lg w-3/4 sm:w-96 my-20">
            <div className="relative w-full flex flex-row justify-center items-center mx-auto my-8">
            <h1 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold">Forgot Password</h1>
            </div>
            <form className="relative w-5/6 flex flex-col justify-center items-center gap-y-4" onSubmit={handleLogin}>
                
                <div className="w-full sm:w-80 flex flex-col justify-center items-center px-2 sm:px-0">
                    <div className="self-start mb-2"><h1 className="text-black dark:text-white text-xl sm:text-2xl">UWO email</h1></div>
                <input type="email" placeholder="3dwestern@uwo.ca" value={account} onChange={(e) => setAccount(e.target.value)} 
                className="text-black dark:text-white dark:bg-black/0 sm:mb-2 h-12 sm:h-12 w-full sm:w-80 rounded-md border border-black dark:border-white px-2" required />
                </div>

               
                <div className="text-white bg-black dark:textwhite dark:bg-gradient-to-r dark:from-fuchsia-800 dark:via-fuchsia-700 dark:to-purple-400 rounded-full text-center my-3">
                <button className="px-5 h-12 text-lg sm:text-2xl" type="submit">Reset Password</button>
                </div>
            </form>

            {error && <p className="text-md text-red-500">{error}</p>} 
            <Link href="/login" className="underline text-black dark:text-white mb-10 text-md sm:text-lg">Back to login</Link>
        </div>
    ); 
}