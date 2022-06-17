import React, { useState } from "react";

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState();

  const sendRequest = async (url, configure) => {
    setIsLoading(true);
    const response = await fetch(url, {
      method: configure?.method ?? "GET",
      headers: configure?.headers ?? { "Content-Type": "application/json" },
      body: configure?.body ?? undefined,
      token: configure?.token,
    });
    const responseData = await response.json();
    if (!response.ok)
     setError(responseData);
    else {
      setError("");
      setData(responseData);
    }
    setIsLoading(false);

    return response.ok ? {data:responseData} :{errorMsg:responseData};
  };

  return {
    data,
    error,
    isLoading,
    sendRequest,
  };
}

export default useHttp;
