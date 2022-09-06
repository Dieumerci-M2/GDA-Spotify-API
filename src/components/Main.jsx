import React from 'react'
import '../styles/main.css'
import Music from './Music'


const Main = ({albums}) => {
  return (
    <section>
        <div className="song">
           <h4>Nouvautés</h4>
           {
              albums.map((album, i)=>{
                console.log(album)
                return(<Music image = {album.images[1].url}
                name ={album.name}/>)
              })
           } 
             
        </div>
    </section>
  )
}

export default Main