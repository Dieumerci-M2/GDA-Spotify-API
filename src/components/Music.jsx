import React from 'react'
import '../styles/music.css'
import {RiStarSLine} from 'react-icons/ri'
import {BiDownload} from 'react-icons/bi'
import {BsPlayCircleFill} from 'react-icons/bs'

const Music = ({image, name, play, stars, download, showiframe, id}) => {
  return (
    <article className='music'>
      <div className="contenu text-dark">
        <div className="photo-artiste">
          <img src={image} alt="tof" />
        </div>
        <div className="title-Music text-center w-138 h-45">
          <span className='title'> {name} </span>
        </div>
        <div className="player text-center w-105 h-35">
          <span className='Download'><BiDownload /></span>
          <span className='play-button' onClick={() => showiframe(id, 'album')}><BsPlayCircleFill /></span>
          <span className='stars'><RiStarSLine /></span>
        </div>
      </div>
    </article>
  )
}

export default Music