import React from 'react'
import '../styles/main.css'
import Music from './Music'
const Main = () => {
  return (
    <section>
        <div className="song">
           <h4>Nouvautés</h4> 
           <Music />
        </div>
    </section>
  )
}

export default Main