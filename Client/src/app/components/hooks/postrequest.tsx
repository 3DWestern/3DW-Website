// hook for POST requests for all forms 
'use client'; 
import { useState } from 'react';


export default function UsePostRequest<PayLoad=any, Response=any>() {

    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<Response | null>(null);

    const postReq = async (url: string, data: PayLoad): Promise<void> => {
        setError(null);
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                throw new Error("request failed");
            }
            const result = await res.json(); 
            setResponse(result as Response);

        } catch (err) {
            setError((err as Error).message);
        } 
    };

    return { postReq, error, response };

}