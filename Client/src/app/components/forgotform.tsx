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
        <div className="mx-auto flex flex-col justify-start items-center bg-white rounded-lg w-96 my-20">
            <div className="relative w-96 flex flex-row justify-center items-center mx-auto my-8">
            <h1 className="text-black text-5xl font-bold">Forgot Password</h1>
            </div>
            <form className="flex flex-col justify-center items-center gap-y-4" onSubmit={handleLogin}>
                
                <div className="flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black text-xl">Uwo email</h1></div>
                <input type="email" placeholder="3dwestern@uwo.ca" value={account} onChange={(e) => setAccount(e.target.value)} 
                className="text-black mb-2 h-12 w-80 rounded-md border border-black px-2" required />
                </div>

               
                <div className="text-white bg-black rounded-full text-center my-3">
                <button className="px-10 h-12 text-2xl" type="submit">Reset Password</button>
                </div>
            </form>

            {error && <p className="text-md text-red-500">{error}</p>} 
            <Link href="/login" className="underline text-black mb-10 text-lg">Back to login</Link>
        </div>
    ); 
}