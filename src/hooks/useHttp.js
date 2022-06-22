import React, { useState } from "react";

function useHttp() {
  const sendRequest = async (url, configure) => {
    const response = await fetch(url, {
      method: configure?.method ?? "GET",
      headers: configure?.headers ?? { "Content-Type": "application/json" },
      body: configure?.body ?? undefined,
      token: configure?.token,
    });
    const responseData = await response.json();
    let error = '';
    if (!response.ok)
      error = responseData;
    return response.ok ? {data:responseData} :{errorMsg:error};
  };

  return {
    sendRequest,
  };
}

export default useHttp;
