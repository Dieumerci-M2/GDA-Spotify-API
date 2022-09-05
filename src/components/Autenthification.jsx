import React from "react";
import "../styles/autenthification.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

const Autenthification = () => {
  const ClientId = "03880715cb5c42db88b289ec843534bc";
  const redirection = "http://localhost:5173/home";
  const outendpoint = "https://accounts.spotify.com/authorize";
  //const scope = 'user-read-email playlist-read-private'
  const answer = "token";

  return (
    <section className="containe text-center">
      <div className="contenu">
        <h1>Bienvenu chez GDA Music</h1>
        <div className="autenth">
          <div>
            <input type="mail" placeholder="E-mail" />
          </div>
          <div>
            <input type="password" placeholder="pass" />
          </div>
        </div>
        <div className="connecte">
              <a
                href={`${outendpoint}?client_id=${ClientId}&redirect_uri=${redirection}&response_type=${answer}`}
              >
                Se connecter
              </a>
            
        
        </div>
      </div>
    </section>
  );
};
// &scope=${scope}

export default Autenthification;
