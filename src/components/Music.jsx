import React from 'react'
import '../styles/music.css'
import {BsPlayCircleFill} from 'react-icons/bs'
import {BiDownload} from 'react-icons/bi'
import {RiStarSLine} from 'react-icons/ri'
const Music = () => {
  return (
    <section className='container'>
        <div className='contour'>
            <span>photo</span>
            <span>name</span>
            <span>title</span>
            <div className="player">
                <BiDownload />
                <BsPlayCircleFill />
                <RiStarSLine />
            </div>
        </div>
    </section>
  )
}

export default Music