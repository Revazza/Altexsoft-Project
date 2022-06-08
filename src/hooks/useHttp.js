import React, { useState } from "react";

function useHttp() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = async (url, configure) => {
    setIsLoading(true);
    
    const response = await fetch(url, {
      method: configure?.method ?? "GET",
      headers: configure?.headers ?? { "Content-Type": "application/json" },
      body: configure?.body ?? undefined,
      token: configure?.token,
    });
    const responseData = await response.json();

    if (response.ok) {
      console.log("Response is Ok : ", responseData);
    } else {
      setError("ERROR");
      console.log("Response is NOT OK: ", responseData);
    }

    setIsLoading(true);
  };

  return {
    error,
    isLoading,
    sendRequest,
  };
}

export default useHttp;
