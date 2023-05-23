import styled from "@emotion/styled";
import { SelectMonedas } from "./SelectMonedas";
import { monedas } from "../data";
import { useEffect, useState } from "react";
import { useFetchApi } from "../hooks/useFetchApi";

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

export const Formulario = () => {
  const [monedaInicial, setMonedaInicial] = useState("");

  const { response, isLoading } = useFetchApi();

  return (
    <>
      <form action="">
        <SelectMonedas
          label={"Seleccione la moneda"}
          monedas={monedas}
          moneda={monedaInicial}
          setMoneda={setMonedaInicial}
        />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};
