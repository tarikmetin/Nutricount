import { useState, useEffect } from "react";

export default function fetchImg(name) {
  const [response, setResponse] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${name}&client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }`
      );
      const data = await res.json();
      setResponse(data.results);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  return {
    response,
    fetchData: () => fetchData(),
  };
}
