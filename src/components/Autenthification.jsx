import React from "react";
import "../styles/autenthification.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

const Autenthification = () => {
  const ClientId = "03880715cb5c42db88b289ec843534bc";
  const ClientSecret = 'edc948911cf346b8b32578f0454ee678'
  const redirection = "http://localhost:5173/home";
  const outendpoint = "https://accounts.spotify.com/authorize";
  const scope = 'user-read-email playlist-read-private'
  const answer = "token";

  return (
    <section className="contain">
      <div className="contenus">
        <h1>Bienvenu chez GDA Music</h1>
        <h3>Authentifications</h3>
        <div className="autenth">
          <div>
            <input type="mail" placeholder="E-mail" />
          </div>
          <div>
            <input type="password" placeholder="password" />
          </div>
        </div>
        <div className="connecte">
          <button>
              <a
                href={`${outendpoint}?client_id=${ClientId}&redirect_uri=${redirection}&response_type=${answer}&scope=${scope}`}
              >
                Se connecter
              </a>
          </button>
          <button>Connecte with google</button>
        </div>
      </div>
    </section>
  );
};

export default Autenthification;
