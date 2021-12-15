import React from "react";
import { useParams } from "react-router";

const Dados = () => {
  const { topic } = useParams();
  return (
    <div>
      <h1>Dados</h1>
      <p>{topic}</p>
    </div>
  );
};

export default Dados;
