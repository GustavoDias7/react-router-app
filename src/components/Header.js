import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <nav className={style.header}>
      <ul>
        <li>
          <NavLink className={style.link} to="/" end>
            Produto
          </NavLink>
        </li>
        <li>
          <NavLink className={style.link} to="contato">
            Contato
          </NavLink>
        </li>
        {["cookies", "dados", "termos"].map((policyType) => {
          return (
            <li key={policyType}>
              <Link className={style.link} to={`politica/${policyType}/inicio`}>
                {policyType.replace(0, policyType[0].toUpperCase)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
