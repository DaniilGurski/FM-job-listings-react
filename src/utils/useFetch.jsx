import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const controller = new AbortController()

        fetch(url, { signal: controller.signal })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Response is NOT ok")
                }
                return res.json();
            })

            .then(data => {
                setData(data)
                setLoading(false)
                setError(null)
            })

            .catch((error) => {
                setLoading(false)
                setError("Failed to load data");
            })
        
        // abort previous fetch request if new is send
        return () => {
            controller.abort();
        }
    }, [url])

    return {data, loading, error}
    
}