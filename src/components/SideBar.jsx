import React from 'react'
import '../styles/sidebar.css'
import logo from '../assets/attachment_113743867.png'
import {HiHome} from 'react-icons/hi'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {RiMusic2Fill} from 'react-icons/ri'
import {IoIosMicrophone} from 'react-icons/io'
const SideBar = () => {
  return (
    <section className='side-containe'>
        <div>
            <span className='title-Gda'>GDA Music</span>
        </div>
        <div className="logo">
            <img src={logo} alt="voici notre logo" />
        </div>
        <div className="icone-home">
            <span className='ic-home'><HiHome /></span><span className='home ms-3 text-light'>Home</span>
        </div>
        <div className="othermenu">
            <div>
            <span className='icone play'><BsFillPlusCircleFill /></span><span id='playlist'>Créer une Playlist</span>
            </div>
            <div>
                <span className='icone preference'><RiMusic2Fill /></span><span id='preference'>Musique Favorite</span>
            </div>
            <div>
                <span className='icone info'><IoIosMicrophone /></span><span id='InfoArtiste'>Info Artiste</span>
            </div>
            
        </div>
        <div className="mentionLeg">
            <span>Mentions Légales</span>
        </div>
    </section>
  )
}

export default SideBar