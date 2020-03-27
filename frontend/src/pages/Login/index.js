import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import api from "../../services/api";

import "./styles.css";

import HeroLogoImg from "../../assets/logo.svg";
import HeroesImg from "../../assets/heroes.png";

export default function Login() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const { data } = await api.post("/sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", data.name);

      history.push("/profile");
    } catch (err) {
      console.log(` > A requisição gerou um erro : ${err}`);
      alert("Falha no login. Tente novamente.");
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={HeroLogoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={event => setId(event.target.value)}
          />

          <button type="submit" className="button">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={HeroesImg} alt="Heroes" />
    </div>
  );
}
