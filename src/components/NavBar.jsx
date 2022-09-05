import React from 'react'
import {BsSearch} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import '../styles/navbar.css'
import { useState } from 'react'
import Autenthification from './Autenthification'
const NavBar = ({token, setToken, lookat, searchArtist}) => {
    const logout = ()=>{
      setToken('')
      window.localStorage.removeItem(token)
    }
  return (
    <section className='nav '>
        <form className='search ms-4' onSubmit={searchArtist}>
            <input placeholder='search for Artists' type="input" className='enter me-2' 
            onChange={lookat} /><Button type='submit'onClick={()=>searchArtist}>Search</Button>
        </form>
        <div className="autenthification me-4 mt-3">
          <div className='picture'>
            <span className='profil me-4'>photo</span>
            <Button onClick={ ()=> logout}>Se Déconncter</Button> 
          </div> 
          <h5 className='mt-2 text-light'>Dieu-merci</h5>
        </div>        
    </section>   
  )
}

export default NavBar