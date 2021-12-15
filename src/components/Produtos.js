import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import style from "./Produtos.module.css";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    async function fetchProduto() {
      fetch("https://ranekapi.origamid.dev/json/api/produto/")
        .then((res) => res.json())
        .then((data) => setProdutos(data));
    }
    fetchProduto();
  }, []);

  if (produtos === null)
    return (
      <div className={style.produtos + " animeLeft"}>
        <div className={style.imgContainer} />
        <div className={style.imgContainer} />
        <div className={style.imgContainer} />
        <div className={style.imgContainer} />
        <div className={style.imgContainer} />
        <div className={style.imgContainer} />
      </div>
    );
  return (
    <>
      <Head
        title="Roter Project | Produtos"
        description="This is the home page of project"
      />
      <section className={style.produtos}>
        {produtos.map((produto) => {
          return (
            <Link to={`produto/${produto.id}`} key={produto.id}>
              <div className={style.imgContainer}>
                <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
              </div>
              <h2 className={style.nome}>{produto.nome}</h2>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Produtos;
