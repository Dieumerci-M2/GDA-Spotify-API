import React from 'react'
import {BsSearch} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import '../styles/navbar.css'
import Autenthification from './Autenthification'
const NavBar = () => {
  return (
    <section className='nav '>
        <div className='search'>
            <input type="text" /><BsSearch/>
        </div>
        <div className="autenthification">
            <Button variant="light" >Se connecter</Button>
            <h5>Dieu-merci</h5>
        </div>        
    </section>   
  )
}

export default NavBar