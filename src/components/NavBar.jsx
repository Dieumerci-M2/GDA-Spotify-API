import React from 'react'
import {BsSearch} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import '../styles/navbar.css'
import Autenthification from './Autenthification'
const NavBar = () => {
  const ClientId = '03880715cb5c42db88b289ec843534bc'
  const redirection = 'http://localhost:5173/'
  const outendpoint = 'https://accounts.spotify.com/authorize'
  const answer = 'token'

  return (
    <section className='nav '>
        <div className='search ms-4'>
            <input type="text" className='enter me-2' /><span className='fs-3 text-light'><BsSearch/></span>
        </div>
        <div className="autenthification me-4 mt-3">
          <div className='picture'>
            <span className='profil me-4'>photo</span>
            <Button variant="primary" className='w-100'> <a href={`${outendpoint}?client_id=${ClientId}&redirect_uri=${redirection}&response_type=${answer}`}>Se connecter</a> </Button>
          </div> 
          <h5 className='mt-2 text-light'>Dieu-merci</h5>
        </div>        
    </section>   
  )
}

export default NavBar