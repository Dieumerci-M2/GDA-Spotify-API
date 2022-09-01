import React from 'react'
import {BsSearch} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import '../styles/navbar.css'
import Autenthification from './Autenthification'
const NavBar = () => {
 
  return (
    <section className='nav '>
        <div className='search ms-4'>
            <input type="text" className='enter me-2' /><span className='fs-3 text-light'><BsSearch/></span>
        </div>
        <div className="autenthification me-4 mt-3">
          <div className='picture'>
            <span className='profil me-4'>photo</span>
            <Button>Se Déconncter</Button>
            
          </div> 
          <h5 className='mt-2 text-light'>Dieu-merci</h5>
        </div>        
    </section>   
  )
}

export default NavBar