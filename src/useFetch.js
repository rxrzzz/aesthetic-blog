import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [pending, isPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data from that particular resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        isPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          isPending(false);
          setError(err.message);
        }
      });
  }, [url]);
  return { data, pending, error };
};

export default useFetch;
