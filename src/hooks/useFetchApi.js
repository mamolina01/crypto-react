import { useEffect, useState } from "react";

export const useFetchApi = () => {
  const [response, setResponse] = useState("");
  const [monedas, setMonedas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const manageApi = async () => {
    const response = await fetch(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
    )
      .then((response) => response.json())
      .then((result) => result);

    return response;
  };

  const getData = async () => {
    setIsLoading(true);
    const result = await manageApi();
    console.log(result?.Data);

    setMonedas(result?.Data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, monedas };
};
