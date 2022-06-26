import React, { useState } from "react";

function useHttp() {
  const [isLoading,setIsLoading] = useState();

  const sendRequest = async (url, configure) => {
    try {
      setIsLoading(true);
      console.log({
        method: configure?.method ?? "GET",
        headers: configure?.headers ?? {
          "Content-Type": "application/json",
        },
        body: configure?.body ?? undefined,
      });
      const response = await fetch(url, {
        method: configure?.method ?? "GET",
        headers: configure?.headers ?? {
          "Content-Type": "application/json",
        },
        body: configure?.body ?? undefined,
      });
      const responseData = await response.json();
      if (!response.ok)
       throw new Error(responseData);

      setIsLoading(false);
      return {data:responseData};
    } catch (error) {
      setIsLoading(false);
      return { errorMsg: error.message };
    }
  };

  return {
    sendRequest,
    isLoading
  };
}

export default useHttp;
