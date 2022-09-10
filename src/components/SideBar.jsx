import React from "react";
import "../styles/sidebar.css";
import logo from "../assets/attachment_113743867.png";
import { HiHome } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiMusic2Fill } from "react-icons/ri";
import { IoIosMicrophone } from "react-icons/io";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <section className="side-containe">
      <div className="title-principal">
        <span className="title-Gda">GDA Music</span>
      </div>
      <div className="logo">
        <img src={logo} alt="voici notre logo" className="logo-treaming" />
      </div>
      <div className="icone-home">
        <span className="ic-home">
          <HiHome />
        </span>
        <Link to="" className="redurection">
          {" "}
          <span className="home">Home</span>
        </Link>
      </div>
      <div className="othermenu">
        <div>
          <span>
            <BsFillPlusCircleFill />
          </span>
          <span className="icone playlist">Créer une Playlist</span>
        </div>
        <div>
          <span>
            <RiMusic2Fill />
          </span>
          <span className="icone preference">Musique Favorite</span>
        </div>
        <div>
          <span>
            <IoIosMicrophone />
          </span>
          <span className="icone InfoArtiste">Info Artiste</span>
        </div>
      </div>
      <div className="mentionLeg">
        <span>Mentions Légales</span>
      </div>
    </section>
  );
};

export default SideBar;
