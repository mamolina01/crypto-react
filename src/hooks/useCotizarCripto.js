import { useEffect, useState } from "react";

export const useCotizarCripto = (monedas) => {
	const [cotizacion, setCotizacion] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const manageApi = async (moneda, criptoMoneda) => {
		const response = await fetch(
			`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
		)
			.then((response) => response.json())
			.then((result) => result);

		return response;
	};

	const getData = async (moneda, criptoMoneda) => {
		setIsLoading(true);
		const result = await manageApi(moneda, criptoMoneda);
		const cotizado = result.DISPLAY[criptoMoneda][moneda];
		setCotizacion(cotizado);
		setIsLoading(false);
	};

	useEffect(() => {
		if (Object.keys(monedas).length > 0) {
			const { moneda, criptoMoneda } = monedas;
			getData(moneda, criptoMoneda);
		}
	}, [monedas]);

	return { isLoading, cotizacion };
};
