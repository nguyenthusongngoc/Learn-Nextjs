import { useEffect, useState } from "react";
import { $http } from "../http";

const useFetch = (method: any, url: string, body: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await $http({
          method: method,
          url: url,
          data: body,
        });
        const data = await resp.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error:any) {
        setServerError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { isLoading, apiData, serverError };
};

export default useFetch;
