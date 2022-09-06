import React from 'react'
import '../styles/ifram.css'
const Iframe = ({id, type}) => {
  return (
    <div className='frame-pop-up'>
         <iframe src={`https://open.spotify.com/embed/${type}/${id}?utm_source=generator`} width="100%" height="180"allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> 
    </div>
  )
}

export default Iframe