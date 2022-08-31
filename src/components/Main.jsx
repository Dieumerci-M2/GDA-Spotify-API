import React from 'react'
import '../styles/main.css'
import Music from './Music'
import artiste2 from '../assets/booba.jpg'
import artiste3 from '../assets/burnaboy.jpg'
import artiste4 from '../assets/Kirk-franklin.jpg'
import artiste5 from '../assets/stromae.jpg'
import artiste1 from '../assets/BenjaminDube.jpg'

const Main = () => {
  return (
    <section>
        <div className="song">
           <h4>Nouvautés</h4> 
           <Music artiste1 = {artiste1}/>
        </div>
    </section>
  )
}

export default Main