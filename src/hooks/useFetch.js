import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);

      if (!response.ok)
       setError("some error message");
      else {
        const responseData = await response.json();
        setData(responseData);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { error, isLoading, data };
}

export default useFetch;
