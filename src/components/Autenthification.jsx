import React from "react";
import "../styles/autenthification.css";
import {FcGoogle} from 'react-icons/fc'
import logostream from '../assets/attachment_113743867.png'
import jwt_decode from 'jwt-decode'
import { useState, useEffect } from "react";
import Principal from "../screens/Principal";


const Autenthification = () => {
  
  const ClientId = "03880715cb5c42db88b289ec843534bc";
  const ClientSecret = 'edc948911cf346b8b32578f0454ee678';
  const redirection = "http://localhost:5173/home";
  const outendpoint = "https://accounts.spotify.com/authorize";
  const scope = 'user-read-email playlist-read-private'
  const answer = "token";

  const[user, setUser] = useState({})
  const[dropComponent, setDropComponent] = useState(true)

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
     document.getElementById('contain').hidden = dropComponent;

   }

return (
    <section id="contain">
      <div className="contenus">
        <h1>Bienvenu chez GDA Music</h1>
        <div className="logo-Streaming">
          <img src={logostream} alt="icone de GDA Music"/>
        </div>
        <h3>Authentifications</h3>
        <input type="mail" placeholder="E-mail" />
        <input type="password" placeholder="password" />
        <button>
            <a
              href={`${outendpoint}?client_id=${ClientId}&redirect_uri=${redirection}&response_type=${answer}&scope=${scope}`}
            >
              Se connecter
            </a>
        </button>
        <button id="icon-google">
        </button>
        </div>
    </section>
  );
};

export default Autenthification;