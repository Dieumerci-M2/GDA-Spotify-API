import React from 'react'
import '../styles/music.css'
import {RiStarSLine} from 'react-icons/ri'
import {BiDownload} from 'react-icons/bi'
import {BsPlayCircleFill} from 'react-icons/bs'

const Music = ({artiste1, play, stars, download}) => {
  return (
    <article className='music ms-4'>
      <div className="contenu text-dark">
        <div className="photo-artiste">
          <img src={artiste1} alt="tof" cover />
        </div>
        <div className="title-Music text-center w-138 h-45">
          <span>Kirk Franklin</span>
          <span>Fill Album Just for.</span>
        </div>
        <div className="player text-center w-105 h-35">
          <BiDownload /><BsPlayCircleFill /><RiStarSLine />
        </div>
      </div>
    </article>
  )
}

export default Music