import React from 'react'
import '../styles/sidebar.css'
import logo from '../assets/attachment_113743867.png'
import {HiHome} from 'react-icons/hi'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {RiMusic2Fill} from 'react-icons/ri'
import {IoIosMicrophone} from 'react-icons/io'
const SideBar = () => {
  return (
    <section className='h-100'>
        <div className="mt-5 mb-2 text-center">
            <span className='fs-2 text-light fw-bold'>GDA Music</span>
        </div>
        <div className="text-center mb-4">
            <img src={logo} alt="voici notre logo" />
        </div>
        <div className="icone-home my-8 text-light">
            <div className='fs-4 fw-4'>
                <HiHome /><span className='ms-4 text-light fw-semibold'>Home</span>
            </div>
            
        </div>
        <div className="othermenu ms-5 text-light mt-8 fs-4 fw-4">
            <div>
                <BsFillPlusCircleFill /><span id='playlist' className='ms-3 mt-8 fs-4 fw-semibold'>Créer une Playlist</span>
            </div>
            <div>
                <RiMusic2Fill /><span id='preference'className='ms-3 mt-8 fs-4 fw-semibold'>Musique Favorite</span>
            </div>
            <div>
                <IoIosMicrophone /><span id='InfoArtiste' className='ms-3 mt-8 fs-4 fw-semibold'>Info Artiste</span>
            </div>
            
        </div>
        <div className="mentionLeg mt-40 text-center text-light">
            <span>Mentions Légales</span>
        </div>
    </section>
  )
}

export default SideBar