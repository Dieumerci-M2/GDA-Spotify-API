import React, {useState} from 'react'
import '../styles/main.css'
import Music from './Music'
import Iframe from './Iframe'

const Main = ({albums}) => {
  const [source, setsource] = useState({id:'', type:'', display:false});
  const showIframe = (id, type) => {
    setsource({
      id, type, display:true
    });
  }
  return (
    <section className='main'>
        { source.display && <Iframe id={source.id} type={source.type} /> }
        <div className="song">
           <h4>Nouvautés</h4>
           <div className="albums">
           {
              albums.map((album, i)=>{
                console.log(album)
                return(<Music key ={i} image = {album.images[1].url}
                name ={album.name} id={album.id} showiframe={showIframe} />)
              })
           } 
           </div> 
        </div>
    </section>
  )
}

export default Main