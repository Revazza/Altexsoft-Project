import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("My Error");
        } else {
          const responseData = await response.json();
          setData(responseData);
        }
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { error, isLoading, data };
}

export default useFetch;
