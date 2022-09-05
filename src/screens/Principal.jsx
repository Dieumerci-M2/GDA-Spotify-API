import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import "../styles/principal.css";
import axios from "axios";
import { useState, useEffect } from "react";

const ClientId = "03880715cb5c42db88b289ec843534bc";
const ClientSecret = 'edc948911cf346b8b32578f0454ee678'
const Principal = () => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
    const [token, setToken] = useState("");

    useEffect(() => {
      let authParameter = {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `grant_type=client_credentials&client_id=${ClientId}&client_secret=${ClientSecret}`
      }
      fetch('https://accounts.spotify.com/api/token', authParameter)
      .then(result => result.json()).then(data => setToken(data.access_token))

    }, []);
    
    const lookat =(e)=>{
        setSearchKey(e.target.value)
    }
    const searchArtist = async(e)=>{
      e.preventDefault()
      const{data} = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
          'Content-Type': 'application/json',
          Authorization : `Bearer ${token}`
        },
        params : {
          q : searchKey,
          type : 'artist'
        } 
      })
      console.log(data)
    }

  return (
    <div className="containe">
      <SideBar />
      <div className="middle">
        <NavBar token ={token} setToken = {setToken} lookat = {lookat} searchArtist = {searchArtist} />
        <Main />
      </div>
    </div>
  );
};

export default Principal;
