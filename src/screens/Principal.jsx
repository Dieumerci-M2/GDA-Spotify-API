import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import "../styles/principal.css";
import axios from "axios";
import { useState, useEffect } from "react";
//import { userContext } from './MyContext'
const Principal = ({ token }) => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track%2Cartist&market=ES&limit=10&offset=5",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    })();
  });

  //setArtists(data.artists.items)
  return (
    <div className="containe">
      <SideBar />
      <div className="middle">
        <NavBar />
        <Main />
      </div>
    </div>
  );
};

export default Principal;
