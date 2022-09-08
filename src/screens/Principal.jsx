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
  const [album, setAlbum] = useState([]);


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

    // Search Function

    const searchArtist = async(e)=>{
      e.preventDefault()

      // Get request using search to get Artist ID

      const response = await axios.get('https://api.spotify.com/v1/search?', {
        headers: {
          'Content-Type': 'application/json',
          Authorization : `Bearer ${token}`
        },
        params : {
          q : searchKey,
          type : 'artist'
        } 
      })
      const artistId = response.data.artists.items[0].id
      // Get request with Artist ID grab all album from that artist 

      const artistParameters ={
        method : 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization : `Bearer ${token}`
        }
      }

      let returnArtistAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistId + '/albums?includes_groups=album&market=US&limit=49', artistParameters)
      .then(response=> response.json())
      .then(data=> {
        setAlbum(data.items)
      })
      // Display those album from user

      //console.log(artistID)
    }

  return (
    <div className="containe">
      <SideBar />
      <div className="middle">
        <div className="nav-up">
        <NavBar token ={token} setToken = {setToken} lookat = {lookat} searchArtist = {searchArtist} />
        </div>
        <div className="cover-main">
          <Main albums = {album}/>
        </div>
      </div>
    </div>
  );
};

export default Principal;
