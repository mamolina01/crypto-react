import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import imagenCripto from "./img/imagen-criptos.png";
import { Formulario, Resultado, Spinner } from "./components";
import { useCotizarCripto } from "./hooks";

const Contenedor = styled.div`
	max-width: 900px;
	margin: 0 auto;
	width: 90%;
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`;

const Imagen = styled.img`
	max-width: 400px;
	width: 80%;
	margin: 0 auto;
	display: block;
`;

const Heading = styled.h1`
	font-family: "Lato", sans-serif;
	color: #fff;
	text-align: center;
	font-weight: 700;
	font-size: 34px;
	margin-top: 80px;
	margin-bottom: 50px;

	&::after {
		content: "";
		width: 100px;
		height: 6px;
		background-color: #66a2fe;
		display: block;
		margin: 10px auto 0 auto;
	}
`;

export const App = () => {
	const [monedas, setMonedas] = useState("");

	const { cotizacion, isLoading } = useCotizarCripto(monedas);

	console.log(cotizacion);
	return (
		<>
			<Heading>Cotiza Criptomonedas al Instante</Heading>

			<Contenedor>
				{/* <Imagen src={imagenCripto} alt="imagen-criptomonedas" />
				<div> */}
				<Formulario setMonedas={setMonedas} />

				{isLoading ? (
					<Spinner />
				) : cotizacion.PRICE ? (
					<Resultado resultado={cotizacion} />
				) : (
					<Imagen src={imagenCripto} alt="imagen-criptomonedas" />
				)}
				{/* </div> */}
			</Contenedor>
		</>
	);
};
