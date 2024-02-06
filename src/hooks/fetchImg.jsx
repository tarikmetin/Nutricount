import { useState, useEffect } from "react";

export default function fetchImg(name) {
  const [response, setResponse] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${name}&client_id=pYiViWy_o1uuMNBV--AEm7erCh7pAjLcj4lI-l0cYE4`
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
