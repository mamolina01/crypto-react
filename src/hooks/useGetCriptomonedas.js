import { useEffect, useState } from "react";

export const useGetCriptomonedas = () => {
	const [criptoMonedas, setCriptoMonedas] = useState([]);
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
		const arrayCriptos = result?.Data.map((crypto) => {
			const objeto = {
				id: crypto.CoinInfo.Name,
				nombre: crypto.CoinInfo.FullName,
			};

			return objeto;
		});

		setCriptoMonedas(arrayCriptos);
		setIsLoading(false);
	};

	useEffect(() => {
		getData();
	}, []);

	return { isLoading, criptoMonedas };
};
