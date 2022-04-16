import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [pending, isPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortConst = newAbortController()
        fetch(url, {})
    })
}