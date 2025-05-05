"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Kantumruy_Pro } from "next/font/google";


// load font 
const kantPro = Kantumruy_Pro({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    fallback: ['Jersey_25','Arial', 'sans-serif'],
    adjustFontFallback: true,
});

export default function SignUpForm () {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const router = useRouter(); // routing after auth 

    const handleSubmit = async (e: React.FormEvent) => { // TODO: Ask about signing up API, whether any more middleware for registering before dashboard page
        e.preventDefault();

        const trimmedEmail = email.trim();
        const trimmedName = name.trim();

        if (!trimmedEmail || !trimmedName) { // prevent blanks 
            return; 
        }

        const response = await fetch("http:://localhost:5000/api/contact", { // TODO: replace with the actual route of the contact endpoint 
            method: "POST",
            headers: {
                "Content-Type": "application/json", // make sure it is JSON 
            },
            body: JSON.stringify({ // TODO: Check the format with Josh! 
                name: trimmedName, 
                email: trimmedEmail,
                message: message, 
                }),
        });

        if (response.ok) {
            router.push('/dashboard'); // see if you can render the info here or whether a page is needed for the rendered message.
        } else {
            const data = await response.json(); // returning JSON 
            setError(data.message);
        }

    };

    // define width, height, and responsiveness of the form  
    // Note: I did not set the mesage as required
    // TODO: add finishing touches, adjust error position, sizing for large screens and responsiveness for mid sized screens; adjust responsive margins for input elements 
    // the font size might be too big for sm screens for <p> 
    // will need to squish the animated printer sprites in the background if possible on sm screens 
    // check whether a character limit is needed?
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center my-10 sm:mt-20 mx-auto sm:px-5 text-white">
            <h1 className="text-5xl sm:text-6xl mb-5 sm:mb-10">CONTACT US</h1>
            <p className={`${kantPro.className} text-xl sm:text-2xl w-2/3 mx-auto`}>We are actively seeking sponsors and collaborators to take our projects to the next level. Connect with us and let&apos;s discuss how we can build something amazing together.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mb-5 sm:my-12 sm:mb-10 mx-auto w-[23rem] sm:w-[40rem] text-black">
                <input placeholder="Bill Gates" 
                className="w-full h-10 sm:h-8 px-2 rounded-full mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                value={name} onChange={(e) => setName(e.target.value)} required/>
                <input placeholder="3dwestern@uwo.ca" 
                className="w-full h-10 sm:h-8 px-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500" 
                value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <textarea 
                placeholder="I want to build a 3D Printed rocket..." 
                className="w-full h-80 px-2 text-md align-top resize-none mt-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit" 
                className="px-2 mt-12 mb-5 text-5xl sm:text-6xl rounded-md text-white bg-[#750A89] transform transition-transform duration-400 hover:scale-125">
                    SEND</button>
            </form>
            {error && <p className="text-red-200">{error}</p>}
            {/** TODO: give error msg more space and a larger size */}
        </div>
    ); 
}