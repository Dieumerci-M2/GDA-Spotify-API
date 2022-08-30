import React from 'react'
import '../styles/sidebar.css'
import logo from '../assets/attachment_113743867.png'
import {HiHome} from 'react-icons/hi'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {RiMusic2Fill} from 'react-icons/ri'
import {IoIosMicrophone} from 'react-icons/io'
const SideBar = () => {
  return (
    <section>
        <div className="title">
            <span>GDA Music</span>
        </div>
        <div className="logo">
            <img src={logo} alt="voici notre logo" />
        </div>
        <div className="home">
            <HiHome /><span>Home</span>
        </div>
        <div className="othermenu">
            <div>
                <BsFillPlusCircleFill /><span id='playlist'>Créer une Playlist</span>
            </div>
            <div>
                <RiMusic2Fill /><span id='preference'>Musique Favorite</span>
            </div>
            <div>
                <IoIosMicrophone /><span id='InfoArtiste'>Info Artiste</span>
            </div>
            
        </div>
        <div className="mentionLeg">
            <span>Mentions Légales</span>
        </div>
    </section>
  )
}

export default SideBar