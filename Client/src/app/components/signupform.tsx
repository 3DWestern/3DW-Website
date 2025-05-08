"use client";
import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Message from './message'; // if additional verification is needed for the user to login 
import Link from 'next/link'; 
import { CircleHelp } from 'lucide-react';
import UsePostRequest from './hooks/postrequest';

// sign up form: needs email, 
export default function SignUpForm () {
    
    const [formData, setFormData] = useState({
        account: "",
        firstName: "",
        lastName: "",
        password: "", 
        number: "",
    });

    type Form = {
        studentNumber: number;
        email: string;
        name: {
            first: string;
            last: string;
        };
        password: string; 
    }

    const [error, setError] = useState(""); // error handling 
    // const router = useRouter(); // routing after auth; depends on whether we are routing to login or dashboard or not 

    const { postReq, error: postError, response } = UsePostRequest<Form, {ok: boolean, message?: string}>();

    const handleLogin = async (e: React.FormEvent) => { // TODO: Ask about signing up API, whether any more middleware for registering before dashboard page
        e.preventDefault();

        const trimmedAccount = formData.account.trim();
        const trimmedPwd = formData.password.trim();
        const trimmedNum = formData.number.trim();
        const trimmedFirst = formData.firstName.trim();
        const trimmedLast = formData.lastName.trim();

        if (!trimmedAccount || !trimmedPwd || !trimmedNum || !trimmedFirst || !trimmedLast ) { // prevent blanks 
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

        await postReq('http://localhost:5000/api/account/register', {
            studentNumber: parseInt(trimmedNum, 10),
            email: trimmedAccount,
            name: {
                first: trimmedFirst,
                last: trimmedLast,
            },
            password: trimmedPwd,
        });

        if (response?.ok) { // do we route to dashboard 
            console.log("RESPONSE OK"); // placeholder 
            // router.push('/dashboard'); 
            // setMessage('true'); // if we are displaying a message after signing up.
        } else {
            setError(postError || response?.message || "An error occurred" ); 
        }

    };

    // TODO: Add question mark for FAQ pop in 
    return (
        <div className="mx-auto flex flex-col justify-start items-center bg-white dark:bg-black/50 rounded-lg w-3/4 sm:w-96 my-20">
            <div className="relative w-full sm:w-96 flex flex-row justify-center items-center mx-auto my-4 sm:my-8">
            <h1 className="text-black dark:text-white text-4xl sm:text-5xl font-bold">Sign Up</h1>
            < CircleHelp className="absolute right-0 mr-10 sm:right-0 text-black dark:text-white" />
            </div>
            <form className="w-5/6 flex flex-col justify-center items-center gap-y-4" onSubmit={handleLogin}>
                
                <div className="w-full sm:w-80 flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black dark:text-white text-xl sm:text-2xl">First Name</h1></div>
                    <input placeholder="John" value={formData.firstName} onChange={(e) => setFormData({... formData, firstName: e.target.value})} 
                    className="text-black dark:text-white dark:bg-black/0 mb-2 h-12 w-full sm:w-80 rounded-md border border-black dark:border-white px-2" required />
                </div>

                <div className="w-full sm:w-80 flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black dark:text-white text-xl sm:text-2xl">Last Name</h1></div>
                    <input placeholder="Doe" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value})} 
                    className="text-black dark:text-white dark:bg-black/0 mb-2 h-12 w-full sm:w-80 rounded-md border border-black dark:border-white px-2" required />
                </div>

                <div className="w-full sm:w-80 flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black dark:text-white text-xl sm:text-2xl">UWO email</h1></div>
                    <input type="email" placeholder="3dwestern@uwo.ca" value={formData.account} onChange={(e) => setFormData({ ...formData, account: e.target.value})} 
                    className="text-black dark:text-white dark:bg-black/0 mb-2 h-12 w-full sm:w-80 rounded-md border border-black dark:border-white px-2" required />
                </div>

                <div className="w-full sm:w-80 flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black dark:text-white text-xl sm:text-2xl">UWO Student Number</h1></div>
                    <input placeholder="123456789" value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value})} 
                    className="text-black dark:text-white dark:bg-black/0 mb-2 h-12 w-full sm:w-80 rounded-md border border-black dark:border-white px-2" required />
                </div>

                <div className="w-full sm:w-80 flex flex-col justify-center items-center">
                    <div className="self-start mb-2"><h1 className="text-black dark:text-white text-xl sm:text-2xl">Password</h1></div>
                    <input type="password" placeholder="mypassword" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value})} 
                    className="text-black dark:text-white dark:bg-black/0 mb-2 h-12 w-full sm:w-80 rounded-md border border-black dark:border-white px-2" required />
                </div>
               
                <div className="text-white bg-black dark:bg-gradient-to-r dark:from-fuchsia-800 dark:via-fuchsia-700 dark:to-purple-400 dark:border dark:border-white rounded-full text-center my-3">
                <button className="px-10 h-10 text-3xl sm:text-4xl" type="submit">Sign Up</button>
                </div>
            </form>
            {error && <p className="text-md text-red-500">{error}</p>} 
            <Link href="/login" className="underline text-black dark:text-white mb-4 text-lg">Back to login</Link>
        </div>
    ); 
}