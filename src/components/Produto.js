import React from "react";
import { useParams } from "react-router";
import Head from "./Head";
import Loading from "./Loading";
import style from "./Produto.module.css";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setProduto(json);
      } catch (error) {
        setError("We have a problem!!!");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={style.produto}>
      <Head
        title={"RooterProject | " + produto.nome}
        description="This is the home page of project"
      />
      <div>
        {produto.fotos.map((foto) => {
          return <img key={foto.src} src={foto.src} alt={foto.titulo} />;
        })}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={style.preco}>{produto.preco}</span>
        <p className={style.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
