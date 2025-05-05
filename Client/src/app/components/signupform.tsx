"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; 
import { CircleHelp } from 'lucide-react';

// sign up form: needs email, 
export default function SignUpForm () {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [account, setAccount] = useState(""); // email
    const [password, setPassWord] = useState("");
    const [error, setError] = useState(""); // error handling 
    const [number, setNumber] = useState("");
    const router = useRouter(); // routing after auth 

    const handleLogin = async (e: React.FormEvent) => { // TODO: Ask about signing up API, whether any more middleware for registering before dashboard page
        e.preventDefault();

        const trimmedAccount = account.trim();
        const trimmedPwd = password.trim();
        const trimmedNum = number.trim();
        const trimmedFirst = firstName.trim();
        const trimmedLast = lastName.trim();

        if (!trimmedAccount || trimmedPwd || !trimmedNum || !trimmedFirst || !trimmedLast ) { // prevent blanks 
            return;
        }

        // check both 
        if (!trimmedAccount.endsWith('uwo.ca') && !trimmedNum.startsWith('2513')) {
            setError("Account email must end with uwo.ca and student number is not a UWO student number");
        }

        // check suffix of email
        if (!trimmedAccount.endsWith('uwo.ca')) {
            setError("Account email must end with uwo.ca.");
            return; 
        }

        // check prefix of student number 
        if (!trimmedNum.startsWith('2513') || trimmedNum.length != 9) {
            setError("Student number is not a UWO student number.");
            return; 
        }

        const response = await fetch("http:://localhost:5000/api/account/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // make sure it is JSON 
            },
            body: JSON.stringify({
                 studentNumber: parseInt(trimmedNum, 10),
                 email: trimmedAccount,
                 name: {
                    first: trimmedFirst,
                    last: trimmedLast,
                 },
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
    return (
        <div className="mx-auto flex flex-col justify-start items-center bg-white rounded-lg w-96 my-20">
            <div className="relative w-96 flex flex-row justify-center items-center mx-auto my-8">
            <h1 className="text-black text-5xl font-bold">Sign up</h1>
            < CircleHelp className="absolute right-0 mr-10 text-black" />
            </div>
            <form className="flex flex-col justify-center items-center gap-y-4" onSubmit={handleLogin}>
                
                <div className="flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black text-xl">First Name</h1></div>
                    <input placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)} 
                    className="text-black mb-2 h-12 w-80 rounded-md border border-black px-2" required />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black text-xl">Last Name</h1></div>
                    <input placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} 
                    className="text-black mb-2 h-12 w-80 rounded-md border border-black px-2" required />
                </div>


                <div className="flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black text-xl">Uwo email</h1></div>
                    <input type="email" placeholder="3dwestern@uwo.ca" value={account} onChange={(e) => setAccount(e.target.value)} 
                    className="text-black mb-2 h-12 w-80 rounded-md border border-black px-2" required />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black text-xl">Uwo Student Number</h1></div>
                    <input placeholder="123456789" value={number} onChange={(e) => setNumber(e.target.value)} 
                    className="text-black mb-2 h-12 w-80 rounded-md border border-black px-2" required/>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black text-lg">Password</h1></div>
                    <input type="password" placeholder="mypassword" value={password} onChange={(e) => setPassWord(e.target.value)} 
                    className="text-black h-12 w-80 rounded-md border border-black px-2" required />
                </div>
               
                <div className="text-white bg-black rounded-full text-center my-3">
                <button className="px-10 h-10 text-4xl" type="submit">Sign Up</button>
                </div>
            </form>

            {error && <p className="text-md text-red-500">{error}</p>} 
            <Link href="/login" className="underline text-black mb-4 text-lg">Back to login</Link>
        </div>
    ); 
}