import React from "react";
import { useParams } from "react-router";
import NotFound from "./NotFound";

const myPolicies = [
  {
    id: "cookies",
    title: "Cookies",
    content: [
      { id: "inicio", content: "Inicio" },
      { id: "meio", content: "Meio" },
      { id: "fim", content: "Fim" },
    ],
  },
  {
    id: "dados",
    title: "Dados",
    content: [
      { id: "inicio", content: "Inicio" },
      { id: "meio", content: "Meio" },
      { id: "fim", content: "Fim" },
    ],
  },
  {
    id: "termos",
    title: "Termos",
    content: [
      { id: "inicio", content: "Inicio" },
      { id: "meio", content: "Meio" },
      { id: "fim", content: "Fim" },
    ],
  },
];

const Policy = ({ policy, topic }) => {
  const [policyContent, setPolicyContent] = React.useState(null);

  React.useEffect(() => {
    for (let item of policy.content) {
      if (item.id === topic) {
        setPolicyContent(item.content);
        break;
      }
    }
  });

  if (policyContent === null) return null;
  return (
    <div>
      <h1>{policy.title}</h1>
      <p>{policyContent}</p>
    </div>
  );
};

const Policies = () => {
  const [policy, setPolicy] = React.useState(null);
  const [error, setError] = React.useState(false);
  const { type, topic } = useParams();

  React.useEffect(() => {
    const chosenPolicy = myPolicies.find((myPolicy) => myPolicy.id === type);
    chosenPolicy ? setPolicy(chosenPolicy) : setError(true);
  }, [type]);

  if (error === true) return <p>Não existe está policy</p>;
  if (policy === null) return null;
  return <Policy policy={policy} topic={topic} />;
};

export default Policies;
