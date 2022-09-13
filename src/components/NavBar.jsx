import React from "react";
import "../styles/navbar.css";
import Autenthification from "./Autenthification";
import { Link } from "react-router-dom";
const NavBar = ({ token, setToken, lookat, searchArtist }) => {
  const logout = () => {
    setToken("");
    window.localStorage.removeItem(token);
  };
  return (
    <div className="nav ">
      <form className="search" onSubmit={searchArtist}>
        <input
          placeholder="search for Artists, Albums & tracks"
          type="input"
          onChange={lookat}
        />
        <span className="bsearch">
          <button type="submit" onClick={() => searchArtist}>
            Search
          </button>
        </span>
      </form>
      <div className="autenthification">
        <div className="picture">
          <span className="profil">photo</span>
          <span className="logout">
            <button onClick={()=>{}}>Se Déconncter</button>
          </span>
        </div>
        <h5 className="name-profil">Dieu-merci</h5>
      </div>
    </div>
  );
};

export default NavBar;
