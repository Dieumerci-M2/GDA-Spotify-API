import React from "react";
import "../styles/autenthification.css";
import {FcGoogle} from 'react-icons/fc'
import logostream from '../assets/attachment_113743867.png'
import jwt_decode from 'jwt-decode'
import { useState, useEffect } from "react";

const Autenthification = () => {
  
  const ClientId = "03880715cb5c42db88b289ec843534bc";
  const ClientSecret = 'edc948911cf346b8b32578f0454ee678';
  const redirection = "http://localhost:5173/home";
  const outendpoint = "https://accounts.spotify.com/authorize";
  const scope = 'user-read-email playlist-read-private'
  const answer = "token";

  const[user, setUser] = useState({})

  // Configuration of Login with Google part 
   
   useEffect(()=>{
       // Global google
       google.accounts.id.initialize({
         client_id:"698638413623-40gu5f9rmbsjgnd4u42o5npbvcurn94u.apps.googleusercontent.com",
         callback : handleCallbackResponse
       })
       google.accounts.id.renderButton(
           document.getElementById('icon-google'),
           {theme: 'outline', size: 'large'}
       )
   },[])
   const handleCallbackResponse = (response)=>{
     let userObject = jwt_decode(response.credential)
     console.log(userObject)
     setUser(userObject)
   }

return (
    <section className="contain">
      <div className="contenus">
        <div className="title-principal">
          <h1>Bienvenu chez GDA Music</h1>
        </div>
        <div className="logo-Streaming">
            <img src={logostream} alt="icone de GDA Music"/>
        </div>
        <div className="aunthent">
          <h3>Authentifications</h3>
        </div>
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
          <div className="google-connecte">
          <button>
            <span id="icon-google"><FcGoogle /></span>
            Se connecter avec google
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Autenthification;