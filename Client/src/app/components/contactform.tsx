"use client";
import { useState } from 'react';
// import { useRouter } from 'next/navigation'; // TODO: remove router from contact after double checking 
import { Kantumruy_Pro } from "next/font/google";
import Message from './message';
import UsePostRequest from './hooks/postrequest';

// load font 
const kantPro = Kantumruy_Pro({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    fallback: ['Jersey_25', 'Arial', 'sans-serif'],
    adjustFontFallback: true,
});

export default function SignUpForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [showMsg, setShowMsg] = useState(false);

    type Form = {
        name: string;
        email: string;
        message: string;
    }


    const { postReq, error: postError, response } = UsePostRequest<Form, { ok: boolean, message: string }>();
    const [error, setError] = useState("");
    //const router = useRouter(); // routing after auth 

    const handleSubmit = async (e: React.FormEvent) => { // TODO: Ask about signing up API, whether any more middleware for registering before dashboard page
        e.preventDefault();

        const trimmedEmail = formData.email.trim();
        const trimmedName = formData.name.trim();
        const trimmedMsg = formData.message.trim();

        if (!trimmedEmail || !trimmedName) { // prevent blanks 
            return;
        }


        await postReq('http://localhost:5000/api/contact/', { // TODO: Check the format w/ Josh and integrate! 
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMsg,
        });


        if (response?.ok) {
            console.log("RESPONSE OK");
            setShowMsg(true); // show message has been sent 
        } else {
            setError(postError || response?.message || "An error occurred");
        }

    };

    // will need to squish the animated printer sprites in the background if possible on sm screens 
    // check whether a character limit is needed?
    return (
        <>
            {
                showMsg ? (
                    <Message header={"Your message has been sent!"} message={"Thank you for expressing interest in us!"} />
                ) : (
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-center my-10 mx-auto sm:px-5 text-white">
                            <div className="relative mb-5 flex flex-col items-center w-fit mx-auto whitespace-nowrap bg-k">
                                <h1 className="absolute left-[7px] top-1 sm:left-2 sm:top-2 text-purple-500 text-6xl sm:text-7xl md:text-9xl z-0 select-none">CONTACT US</h1>
                                <h1 className="absolute left-1 top-1 text-black text-6xl sm:text-7xl md:text-9xl z-10 select-none">CONTACT US</h1>
                                <h1 className="relative text-white text-6xl sm:text-7xl md:text-9xl z-20">CONTACT US</h1>
                            </div>
                            <p className={`${kantPro.className} text-xl sm:text-2xl md:w-2/3 mx-auto`}>We are actively seeking sponsors and collaborators to take our projects to the next level. Connect with us and let&apos;s discuss how we can build something amazing together.</p>
                        </div>

                        <form action="https://api.web3forms.com/submit" method="POST" className="text-xl flex flex-col justify-center items-center mb-5 sm:mb-10 mx-auto w-[23rem] sm:w-[40rem] text-black">
                            {/* Access token */}
                            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3_API_KEY}></input>

                            <input placeholder="Bill Gates"
                                type="text" name="name"
                                className="w-full h-10 sm:h-8 px-2 rounded-full mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                            <input placeholder="3dwestern@uwo.ca"
                                type="email" name="email"
                                className="w-full h-10 sm:h-8 px-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                            <textarea
                                name="message"
                                placeholder="I want to build a 3D Printed rocket..."
                                className="w-full h-80 px-2 text-md align-top resize-none mt-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required/>

                            {/* Spam protection */}
                            <input type="checkbox" name="botcheck" className="hidden"></input>
                            
                            <button type="submit"
                                className="px-2 mt-12 mb-5 text-5xl sm:text-6xl rounded-md text-white bg-[#750A89] transform transition-transform duration-400 hover:scale-125">
                                SEND</button>
                            {error && <p className="text-md text-red-500">{error}</p>}
                        </form>
                        {/** TODO: give error msg more space and a larger size */}
                    </div>
                )
            }
        </>
    );
}