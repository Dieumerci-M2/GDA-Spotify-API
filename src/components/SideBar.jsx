import React from 'react'
import '../styles/sidebar.css'
import logo from '../assets/attachment_113743867.png'
import {HiHome} from 'react-icons/hi'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {RiMusic2Fill} from 'react-icons/ri'
import {IoIosMicrophone} from 'react-icons/io'
const SideBar = () => {
  return (
    <section className='side-containe h-100'>
        <div className="mt-3 mb-2 text-center">
            <span className='fs-2 text-light fw-bold'>GDA Music</span>
        </div>
        <div className="text-center mb-4">
            <img src={logo} alt="voici notre logo" />
        </div>
        <div className="icone-home text-light">
            <span className='ic-home fs-1'><HiHome /></span><span className='home ms-3 text-light'>Home</span>
        </div>
        <div className="othermenu ms-3 text-light">
            <div>
            <span className='fs-3'><BsFillPlusCircleFill /></span><span id='playlist' className="ms-4 pe-auto">Créer une Playlist</span>
            </div>
            <div>
                <span className='fs-3'><RiMusic2Fill /></span><span id='preference'className='ms-4'>Musique Favorite</span>
            </div>
            <div>
                <span className='fs-3'><IoIosMicrophone /></span><span id='InfoArtiste' className='ms-4'>Info Artiste</span>
            </div>
            
        </div>
        <div className="mentionLeg mt-40 text-center text-light">
            <span>Mentions Légales</span>
        </div>
    </section>
  )
}

export default SideBar