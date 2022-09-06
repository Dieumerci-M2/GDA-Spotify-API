import React from 'react'
import '../styles/main.css'
import Music from './Music'

const Main = ({albums}) => {
  return (
    <section>
        <div className="song">
           <h4>Nouvautés</h4>
           <div className="albums">
           {
              albums.map((album, i)=>{
                console.log(album)
                return(<Music key ={i} image = {album.images[1].url}
                name ={album.name}/>)
              })
           } 
           </div>   
        </div>
    </section>
  )
}

export default Main