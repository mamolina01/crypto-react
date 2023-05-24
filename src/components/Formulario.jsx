import styled from "@emotion/styled";
import { SelectMonedas } from "./SelectMonedas";
import { monedas } from "../data";
import { useEffect, useState } from "react";
import { useGetCriptomonedas } from "../hooks";

const InputSubmit = styled.input`
	background-color: #9497ff;
	border: none;
	width: 100%;
	padding: 10px;
	color: #fff;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 20px;
	border-radius: 5px;
	transition: all 0.3s ease;
	margin-top: 30px;

	&:hover {
		background-color: #7a7dfe;
		cursor: pointer;
	}
`;

const Texto = styled.div`
	background-color: #b7322c;
	color: #fff;
	padding: 15px;
	font-size: 22px;
	text-transform: uppercase;
	font-family: "Lato", sans-serif;
	font-weight: 700;
	text-align: center;
`;

export const Formulario = ({ setMonedas }) => {
	const [moneda, setMoneda] = useState("");
	const [criptoMoneda, setCriptoMoneda] = useState("");
	const [error, setError] = useState(false);

	const { criptoMonedas } = useGetCriptomonedas();

	const handleSubmit = (e) => {
		e.preventDefault();
		if ([moneda, criptoMoneda].includes("")) {
			console.log("ERROR");
			setError(true);
			return;
		}
		setError(false);
		setMonedas({
			moneda: moneda,
			criptoMoneda: criptoMoneda,
		});
	};

	return (
		<>
			{error && <Texto>Todos los campos son obligatorios</Texto>}
			<form onSubmit={handleSubmit}>
				<SelectMonedas
					label={"Seleccione la Moneda"}
					monedas={monedas}
					moneda={moneda}
					setMoneda={setMoneda}
				/>
				<SelectMonedas
					label={"Seleccione la Criptomoneda"}
					monedas={criptoMonedas}
					moneda={criptoMoneda}
					setMoneda={setCriptoMoneda}
				/>
				<InputSubmit type="submit" value="Cotizar" />
			</form>
		</>
	);
};
