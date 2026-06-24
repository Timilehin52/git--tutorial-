import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setIsLoading(false);
        setData(result);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError("unable to fetch data");
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error };
}
