"use client";
import { useState } from 'react';
import Link from 'next/link'; 
import UsePostRequest from './hooks/postrequest';
import Message from './message'; 

// forgot password form: send them an email and a link to reset it?
export default function ForgotForm () {
    
    const [account, setAccount] = useState("");
    const [error, setError] = useState(""); // error handling 
    const [message, setMessage] = useState(false); 

    const { postReq, response, error: postError } = UsePostRequest<string, { ok: boolean, message?: string }>(); // TODO: Change depending on server JSON response format 

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
        
        await postReq('http://localhost:5000/api/account/forget', account); // send the account 

        if (response?.ok) {
            setMessage(true);
            console.log("RESPONSE OK");
        } else {
            setError(postError || response?.message || "An error occurred."); // is postError actually a thing?
        }

    };


    // TODO: Check styling. For now will just say reset account using email. 
    return (
        <>
        {message ? (
            <Message header={"Check Your Email"} message={"Please check your email to reset your password."}/>
        ) : (
            <>
            <div className="mx-auto flex flex-col justify-start items-center bg-white dark:bg-black/50 rounded-lg w-3/4 sm:w-96 my-20">
            <div className="relative w-full flex flex-row justify-center items-center mx-auto my-8">
            <h1 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold">Forgot Password</h1>
            </div>
            <form className="relative w-5/6 flex flex-col justify-center items-center gap-y-4" onSubmit={handleLogin}>
            
            {/* If you think having a shorter input looks better on mobile: w-5/6 sm:w-full */}
            <div className="w-full sm:w-80 flex flex-col justify-center items-center px-2 sm:px-0">
            <div className="self-start mb-2"><h1 className="text-black dark:text-white text-xl sm:text-2xl">UWO email</h1></div>
            <input type="email" placeholder="3dwestern@uwo.ca" value={account} onChange={(e) => setAccount(e.target.value)} 
            className="text-black dark:text-white dark:bg-black/0 mb-2 h-12 w-full sm:w-80 rounded-md border border-black dark:border-white px-2" required />
            </div>
            
            <div className="text-white bg-black dark:textwhite dark:bg-gradient-to-r dark:from-fuchsia-800 dark:via-fuchsia-700 dark:to-purple-400 rounded-full text-center my-3">
            <button className="px-5 h-12 text-lg sm:text-2xl" type="submit">Reset Password</button>
            </div>
            </form>
            
            {error && <p className="text-md text-red-500">{error}</p>} 
            <Link href="/login" className="underline text-black dark:text-white mb-10 text-md sm:text-lg">Back to login</Link>
            </div>
            </>
        )}
        </>
    ); 
}